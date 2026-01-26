const API_URL = "http://127.0.0.1:5000";

export async function fetchFood() {
  // Send get request to backend to get all animals
  const res = await fetch(`${API_URL}/food`);

  // Verify the response
  if (!res.ok) {
    throw new Error("Failed to fetch home");
  }

  // Return the json of the response
  return res.json();
}