import './App.css'
import { useState } from "react";
import { UseDounce } from './hooks/useDebounce';


function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = UseDounce(search, 1000);

  return (
    <div className="App">
    <input value={search} onChange={(e) => setSearch(e.target.value)} />
    <hr />
    <h2>Normal : {search}</h2>
    <hr />
    <h2>Debounced : {debouncedValue}</h2>
  </div>
  )
}

export default App
