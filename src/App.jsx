import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultList } from './components/SearchResultList';

function App() {
  const [result, setResult] = useState([]);

  //console.log(result);

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResult={setResult}/>
          <SearchResultList result={result}/>
        </div>
      </div>
        
    </>
  )
}

export default App
