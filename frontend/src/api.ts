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
    await initiateSpotifyAuthentication();

    const response = await axios.post(`${API_URL}/api/artists/setlist/search`, {
      name: artistName,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching artist:', error);
    return null;
  }
}