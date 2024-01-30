import axios from 'axios';

const API_URL = "http://localhost:3000";

export async function initiateSpotifyAuthentication() {
  try {
    const response = await axios.post(`${API_URL}/auth/spotify`);
    return response.data;
  } catch (error) {
    console.error('Error initiating Spotify authentication:', error);
    throw error;
  }
}

export async function fetchArtist(artistName: string) {
  try {
    const response = await fetch(`${API_URL}/api/artists/setlist/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: artistName }), // Ensure the payload matches your controller's expectation
    });

    if (!response.ok) {
      console.error(`Error response: ${response.status} - ${response.statusText}`);
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}