import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Searchbar.scss';

interface SearchBarProps {
  onSearch: (artistName: string) => void;
}

const Searchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [artistName, setArtistName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(artistName);
  };

  return (
    <div className="searchBar">
      <div className="searchBar-container">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '75%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
              className="searchBar-container-field"
              id="filled-search"
              label="Artist Name"
              type="search"
              variant="outlined"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />
        </Box>
      </div>
    </div>
  )
}
 
export default Searchbar;