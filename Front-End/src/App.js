import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Menu from './Components/Menu'
import About from './Components/About'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='divider'></div>
      <HeroSection/>
      <Menu/>
      <About/>
    </div>
  );
}

export default App;
