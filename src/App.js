import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
      <NotificationContainer/>
    </>
  );
}

export default App;
