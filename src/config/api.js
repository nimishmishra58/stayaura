const base = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000").replace(
  /\/+$/,
  ""
);

export const apiUrl = (path) => `${base}${path.startsWith("/") ? path : `/${path}`}`;
