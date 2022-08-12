import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      
      <Gallery />
      <Testimonials />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
