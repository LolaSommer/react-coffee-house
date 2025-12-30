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

function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}
const total = calculateCartTotal(cart);
 function openCoffeeModal(coffeeId) {
  setSelectedItem(coffeeProducts[coffeeId]);
  setModalType('coffee');
  setIsModalOpen(true);
 }
 function totalItems(cartItems){
  return cartItems.reduce((total,item)=>{
    return total+item.quantity;
  },0);
 }
 function openDessertModal(dessertID){
  setSelectedItem(desserts[dessertID]);
 setModalType('dessert');
 setIsModalOpen(true);
 }
 function openCart(){
  setIsCartOpen(true);
 }
function handleAddToCart(cartItem) {
  setCart(prev => [...prev, cartItem]);
}
const increaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};
const decreaseQty = (id) => {
  setCart(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};
const removeFromCart = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};

  return (
    <>
      <Header
        onCartOpen={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        totalItems={totalItems(cart)}
      />

      <Hero />

      <Menu 
      onCoffeeSelect={openCoffeeModal}
      onDessertSelect={openDessertModal}
      />

      <About />
      <Events />
      <Footer />

      {isCartOpen && <Cart cart={cart} setCart={setCart} total={total}  totalItems={totalItems} onPlus={increaseQty} onMinus={decreaseQty}  onRemove={removeFromCart}
 onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal item={selectedItem} onAddToCart={handleAddToCart} type={modalType}
        onClose={() => setIsModalOpen(false)} />}
      {isAuthOpen && <Auth onClose={() => setIsAuthOpen(false)} />}
      
    </>
  );
}

export default App;







