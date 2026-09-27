import type { LoginRequest, LoginResponse } from "../types/auth";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    let detail = `Request failed with status ${response.status}.`;

    try {
      const body = await response.json();
      detail = body.detail ?? detail;
    } catch {
      // Keep the default message if the response is not JSON.
    }

    throw new Error(detail);
  }

  return response.json() as Promise<T>;
}

export const api = {
  login(data: LoginRequest) {
    return request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async get<T>(path: string) {
    return request<T>(path);
  },
};
