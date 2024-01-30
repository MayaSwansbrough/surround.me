import React from 'react';
import { initiateSpotifyAuthentication } from '../../api';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
    <div className="spotifyLoginButton">
      <Stack 
        spacing={2}
        direction="row"
        className="spotifyLoginButton-stack">
        <Button 
          variant="contained"
          onClick={handleButtonClick}
          className="spotifyLoginButton-stack-button">
          Login to Spotify
        </Button>
      </Stack>
    </div>
  );
}

export default SpotifyLoginButton;