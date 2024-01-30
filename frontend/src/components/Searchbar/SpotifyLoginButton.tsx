import React from 'react';
import { initiateSpotifyAuthentication } from '../../api';

interface SpotifyLoginButtonProps {
  onAuthenticate: () => void;
}

const SpotifyLoginButton: React.FC<SpotifyLoginButtonProps> = ({ onAuthenticate }) => {
  const handleButtonClick = async () => {
    try {

      await initiateSpotifyAuthentication();

      onAuthenticate();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Login to Spotify
    </button>
  );
}

export default SpotifyLoginButton;