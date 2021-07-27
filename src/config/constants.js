export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market.herokuapp.com"
    : "http://localhost:8080";
