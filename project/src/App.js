import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js';
import Output from './pages/Output';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.js';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        </Routes>
        <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Routes>
        <Route exact path="/output" element={<Output/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
