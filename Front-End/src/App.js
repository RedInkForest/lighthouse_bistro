import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='divider'></div>
      <HeroSection/>
      <Menu/>
      <div className='divider'></div>
      <About/>
      <div className='divider'></div>
      <Contact/>
    </div>
  );
}

export default App;
