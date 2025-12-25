import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Auth from "./components/Auth";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [selectedCoffeeId, setSelectedCoffeeId] = useState(null);
  const [selectedMilk, setSelectedMilk] = useState('pure');
  const [selectedStrength, setSelectedStrength] = useState('medium');
  const [selectedCountry, setSelectedCountry] = useState('aura');
  const [cart, setCart] = useState([]);

  function handleCoffeeSelect(id) {
    setSelectedCoffeeId(id);
    setIsModalOpen(true);
  }
  return (
    <>
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
      />

      <Hero />

      <Menu onCoffeeSelect={handleCoffeeSelect}/>

      <About />
      <Events />
      <Footer />

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isAuthOpen && <Auth onClose={() => setIsAuthOpen(false)} />}
      
    </>
  );
}

export default App;







