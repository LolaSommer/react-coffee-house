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
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
      />

      <Hero />
      <Menu />
      <About />
      <Events />
      <Footer />

      {/* скрытые компоненты */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      {isAuthOpen && <Auth onClose={() => setIsAuthOpen(false)} />}
    </>
  );
}

export default App;






