import './App.css'
import FileExplorer from './Component/fileExplorer'
import data from "./data.json";
function App() {
  return (
    <>
      <FileExplorer folderData={data} />
    </>
  )
}

export default App
