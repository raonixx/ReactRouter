//import logo from './logo.svg';
//import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/empresa" element={<Empresa />} />
        
        <Route path="/contato" element={<Contato />} />
         
      </Routes>
    </Router>
  );
}

export default App;
