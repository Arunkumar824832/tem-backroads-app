import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Footer from"./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Tours from "./components/Tours.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
