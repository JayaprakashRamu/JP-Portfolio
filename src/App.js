import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
// import Backtop from './Components/Backtop/Backtop';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Services />
    <Project />
    <Contact />
    {/* <Backtop  /> */}
    </>
  );
}

export default App;
