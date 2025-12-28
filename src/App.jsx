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
import { coffeeProducts } from './data/coffeeProducts';
import { desserts } from  './data/desserts.js'
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [cart, setCart] = useState([]);



 function openCoffeeModal(coffeeId) {
  setSelectedItem(coffeeProducts[coffeeId]);
  setModalType('coffee');
  setIsModalOpen(true);
 }
 function openDessertModal(dessertID){
  setSelectedItem(desserts[dessertID]);
 setModalType('dessert');
 setIsModalOpen(true);
 }
 function openCart(){
  setIsCartOpen(true);
 }
  return (
    <>
      <Header
        onCartOpen={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
      />

      <Hero />

      <Menu 
      onCoffeeSelect={openCoffeeModal}
      onDessertSelect={openDessertModal}
      />

      <About />
      <Events />
      <Footer />

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal item={selectedItem} type={modalType}
        onClose={() => setIsModalOpen(false)} />}
      {isAuthOpen && <Auth onClose={() => setIsAuthOpen(false)} />}
      
    </>
  );
}

export default App;







