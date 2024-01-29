import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Searchbar.scss';

// interface Props {
  
// }
 
// const Searchbar: React.FC<Props> = () => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(fetchArtistsAsync());
//   }, [dispatch])

//   const [artistNameQuery, setArtistNameQuery] = useState<string>(''); // State to store the search query

//   const search = (artistName: string) => {
//     // Your search logic here, using the provided query
//     console.log('Searching for:', artistName);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setArtistNameQuery(event.target.value);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     // Check if the Enter key is pressed (key code 13)
//     if (event.key === 'Enter') {
//       // Prevent the default behavior of the Enter key (e.g., form submission)
//       event.preventDefault();

//       // Call your search function with the entered value
//       search(artistNameQuery);
//     }
//   };

//   return (
//     <div className="searchBar">
//       <div className="searchBar-container">
//         <Box
//           component="form"
//           sx={{
//             '& .MuiTextField-root': { m: 1, width: '75%' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//               className="searchBar-container-field"
//               id="filled-search"
//               label="Artist Name"
//               type="search"
//               variant="outlined"
//               value={artistNameQuery}
//               onChange={handleChange}
//               onKeyDown={handleKeyDown}
//             />
//         </Box>
//       </div>
//     </div>
//   )
// }

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