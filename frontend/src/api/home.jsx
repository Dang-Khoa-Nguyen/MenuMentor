const API_URL = "http://127.0.0.1:5000";

export async function fetchHome() {
  // Send get request to backend to get all animals
  const res = await fetch(`${API_URL}/home`);

  // Verify the response
  if (!res.ok) {
    throw new Error("Failed to fetch home");
  }

  // Return the json of the response
  return res.json();
}