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
  const [authStep, setAuthStep] = useState('phone');
  const [modalMode, setModalMode] = useState('add'); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [cart, setCart] = useState([]);
  const [openedFrom, setOpenedFrom] = useState('menu');
function handleChange(item){
 setSelectedItem(item);
 setModalType('coffee');
setIsModalOpen(true);
  setOpenedFrom('cart');
}
function handleUpdateCartItem(updatedItem) {
  setCart(prev =>
    prev.map(item =>
      item.cartKey === updatedItem.cartKey
        ? { ...item, ...updatedItem }
        : item
    )
  );
}

function openAuth(){
  setIsAuthOpen(true);
  setAuthStep('phone');
}
function closeAuth(){
  setIsAuthOpen(false);
}
function goToCodeStep(){
  setAuthStep('code');
}
function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}
const total = calculateCartTotal(cart);
 function openCoffeeModal(coffeeId) {
  setSelectedItem(coffeeProducts[coffeeId]);
  setModalType('coffee');
   setOpenedFrom('menu');
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
  setCart(prev => {
    const existingItemIndex = prev.findIndex(item => item.cartKey === cartItem.cartKey);
    if (existingItemIndex !== -1) {
      const updatedCart = [...prev];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
      };
      return updatedCart;
    } else {
      return [...prev, { ...cartItem, quantity: 1 }];
    }
  });
}
const increaseQty = (cartKey) => {
  setCart(prev =>
    prev.map(item =>
      item.cartKey === cartKey
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};
const decreaseQty = (cartKey) => {
  setCart(prev =>
    prev
      .map(item =>
        item.cartKey === cartKey
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};
const removeFromCart = (cartKey) => {
  setCart(prev => prev.filter(item => item.cartKey !== cartKey));
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

      {isCartOpen && <Cart cart={cart} onChange={handleChange} onAuthClick={() => setIsAuthOpen(true)} setCart={setCart} total={total} onAddToCart={handleAddToCart}  totalItems={totalItems} onPlus={increaseQty} onMinus={decreaseQty}  onRemove={removeFromCart}
 onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal item={selectedItem} onUpdateCartItem={handleUpdateCartItem} openedFrom={openedFrom} mode={modalMode} onAddToCart={handleAddToCart} type={modalType}
        onClose={() => setIsModalOpen(false)} />}
{isAuthOpen && (<Auth onClose={() => setIsAuthOpen(false)} onCloseAuth={closeAuth}/>)}

    </>
  );
}

export default App;







