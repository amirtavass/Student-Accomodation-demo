import "./App.css";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import BulletPoints from "./components/BulletPoints";
import Rooms from "./components/Rooms";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <BulletPoints />
      <Rooms />
      <Features />
      <Reviews />
      <Map />
      <Footer />
    </>
  );
}

export default App;
