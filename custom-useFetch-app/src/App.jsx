import './App.css'
import useFetch from './UseFetch';

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Real-time Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default App
