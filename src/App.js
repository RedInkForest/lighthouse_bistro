import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
      <HeroSection/>
    </div>
  );
}

export default App;
