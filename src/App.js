import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div style={{ marginLeft: '225px' }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
