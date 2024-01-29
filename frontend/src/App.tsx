import './App.scss';
import Searchbar from './components/Searchbar/Searchbar'
import { fetchArtist } from './api';

const App: React.FC = () => {
  const handleSearch = async (artistName: string) => {
    try {
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
        <Searchbar onSearch={handleSearch} />
      </div>
    </div>
  )
}

export default App;