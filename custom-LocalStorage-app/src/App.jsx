//Write a Custom Hook “useLocalStorage”, to store as well as get data from localStorage API.
import './App.css'
import useLocalStorage from './UseLocalStorage';


function App() {
  const [name, setName] = useLocalStorage("name", "Guest");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default App
