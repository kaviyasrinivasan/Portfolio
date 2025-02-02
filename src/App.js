import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Achievements/Achievements";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
