import { useState } from "react";

type DashboardProps = {
  onLogout: () => void;
};

type Page =
  | "home"
  | "courses"
  | "schedule"
  | "grades"
  | "profile";

export function Dashboard({ onLogout }: DashboardProps) {
  const [page, setPage] = useState<Page>("home");

  function renderPage() {
    if (page === "courses") {
      return (
        <section className="content-card">
          <h2>My Courses</h2>

          <div className="courses">
            <div className="course">
              <h3>Data Visualization</h3>
              <p>Course Code: DV301</p>
              <p>Credits: 3</p>
            </div>

            <div className="course">
              <h3>Distributed Processing</h3>
              <p>Course Code: DP302</p>
              <p>Credits: 3</p>
            </div>

            <div className="course">
              <h3>Stochastic Processes</h3>
              <p>Course Code: SP303</p>
              <p>Credits: 3</p>
            </div>

            <div className="course">
              <h3>Big Data Analytics</h3>
              <p>Course Code: BD304</p>
              <p>Credits: 3</p>
            </div>
          </div>
        </section>
      );
    }

    if (page === "schedule") {
      return (
        <section className="content-card">
          <h2>My Schedule</h2>

          <div className="schedule-list">
            <div>
              <strong>Saturday</strong>
              <span>Data Visualization — 10:00 AM</span>
            </div>

            <div>
              <strong>Sunday</strong>
              <span>Distributed Processing — 12:00 PM</span>
            </div>

            <div>
              <strong>Monday</strong>
              <span>Stochastic Processes — 10:00 AM</span>
            </div>

            <div>
              <strong>Tuesday</strong>
              <span>Big Data Analytics — 12:00 PM</span>
            </div>
          </div>
        </section>
      );
    }

    if (page === "grades") {
      return (
        <section className="content-card">
          <h2>My Grades</h2>

          <div className="grades-list">
            <div>
              <span>Data Visualization</span>
              <strong>A</strong>
            </div>

            <div>
              <span>Distributed Processing</span>
              <strong>B+</strong>
            </div>

            <div>
              <span>Stochastic Processes</span>
              <strong>A-</strong>
            </div>

            <div>
              <span>Big Data Analytics</span>
              <strong>A</strong>
            </div>
          </div>
        </section>
      );
    }

    if (page === "profile") {
      return (
        <section className="content-card">
          <h2>My Profile</h2>

          <div className="profile-info">
            <div>
              <span>Name</span>
              <strong>Ahmed</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>student@test.com</strong>
            </div>

            <div>
              <span>Department</span>
              <strong>Computer Science</strong>
            </div>

            <div>
              <span>Level</span>
              <strong>3</strong>
            </div>
          </div>
        </section>
      );
    }

    return (
      <>
        <div className="stats-grid">
          <div className="stat-card">
            <span>Total Courses</span>
            <strong>6</strong>
          </div>

          <div className="stat-card">
            <span>Current GPA</span>
            <strong>3.45</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>24</strong>
          </div>

          <div className="stat-card">
            <span>Status</span>
            <strong>Active</strong>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="content-card">
            <h2>Student Information</h2>

            <div className="info-row">
              <strong>Name</strong>
              <span>Ahmed</span>
            </div>

            <div className="info-row">
              <strong>Department</strong>
              <span>Computer Science</span>
            </div>

            <div className="info-row">
              <strong>Level</strong>
              <span>3</span>
            </div>

            <div className="info-row">
              <strong>Status</strong>
              <span>Active</span>
            </div>
          </div>

          <div className="content-card">
            <h2>Academic Summary</h2>

            <div className="info-row">
              <strong>Semester</strong>
              <span>Fall 2026</span>
            </div>

            <div className="info-row">
              <strong>Courses</strong>
              <span>6</span>
            </div>

            <div className="info-row">
              <strong>GPA</strong>
              <span>3.45</span>
            </div>

            <div className="info-row">
              <strong>Academic Status</strong>
              <span>Good Standing</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span>SU</span>

          <div>
            <strong>Smart University</strong>
            <small>Student Portal</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            🏠 Dashboard
          </button>

          <button
            className={page === "courses" ? "active" : ""}
            onClick={() => setPage("courses")}
          >
            📚 My Courses
          </button>

          <button
            className={page === "schedule" ? "active" : ""}
            onClick={() => setPage("schedule")}
          >
            📅 My Schedule
          </button>

          <button
            className={page === "grades" ? "active" : ""}
            onClick={() => setPage("grades")}
          >
            📊 My Grades
          </button>

          <button
            className={page === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            👤 My Profile
          </button>
        </nav>

        <button
          className="sidebar-logout"
          onClick={onLogout}
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <section className="main-content">
        <header className="content-header">
          <div>
            <span className="badge">Smart University</span>

            <h1>
              {page === "home"
                ? "Student Dashboard"
                : page === "courses"
                ? "My Courses"
                : page === "schedule"
                ? "My Schedule"
                : page === "grades"
                ? "My Grades"
                : "My Profile"}
            </h1>

            <p className="muted">
              Welcome back, Ahmed!
            </p>
          </div>
        </header>

        {renderPage()}
      </section>
    </main>
  );
}