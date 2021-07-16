import './App.css';
import List from '../List/List';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS'
];

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
