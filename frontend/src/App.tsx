import React, { useState } from 'react';
import './App.scss';
import Searchbar from './components/Searchbar/Searchbar'
import SpotifyLoginButton from './components/Searchbar/SpotifyLoginButton';
import { fetchArtist } from './api';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const handleSearch = async (artistName: string) => {
    try {
      if (!isAuthenticated) {
        console.error('User is not authenticated. Please authenticate first.');
        return;
      }

      const setlistData = await fetchArtist(artistName);
      console.log(setlistData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <div className="App logo">
        <h1>Surround.me</h1>
      </div>
      <div className="App container">
        <SpotifyLoginButton onAuthenticate={handleAuthentication} />
        <Searchbar onSearch={handleSearch} />
      </div>
    </div>
  )
}

export default App;