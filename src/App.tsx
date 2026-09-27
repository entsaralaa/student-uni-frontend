import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Dashboard } from "./components/Dashboard";
import type { LoginRequest } from "./types/auth";

function App() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginRequest>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function validate() {
    const next: Partial<LoginRequest> = {};

    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email.";
    }

    if (!form.password) {
      next.password = "Password is required.";
    } else if (form.password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    // Demo Login - Frontend only
    setTimeout(() => {
      localStorage.setItem(
        "access_token",
        "demo-token"
      );

      setLoggedIn(true);
      setLoading(false);
    }, 500);
  }

  function handleLogout() {
    localStorage.removeItem("access_token");

    setLoggedIn(false);

    setForm({
      email: "",
      password: "",
    });
  }

  if (loggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <main className="page">
      <section className="card">
        <span className="badge">
          Smart University
        </span>

        <h1>Student Login</h1>

        <p className="muted">
          Sign in to access your university account.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <Input
            label="Email"
            type="email"
            value={form.email}
            placeholder="student@university.edu"
            error={errors.email}
            onChange={(value) =>
              setForm((current) => ({
                ...current,
                email: value,
              }))
            }
          />

          <Input
            label="Password"
            type="password"
            value={form.password}
            placeholder="••••••••"
            error={errors.password}
            onChange={(value) =>
              setForm((current) => ({
                ...current,
                password: value,
              }))
            }
          />

          <Button
            type="submit"
            loading={loading}
          >
            Login
          </Button>
        </form>

        {message && (
          <div className="error-box">
            {message}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;