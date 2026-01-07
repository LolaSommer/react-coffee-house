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
import Account from "./components/Account.jsx";
import DeliveryModal from "./components/DeliveryModal.jsx";
import { coffeeProducts } from './data/coffeeProducts';
import { desserts } from  './data/desserts.js'
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDeliveryOpen,setIsDeliveryOpen] = useState(false);
  const [authStep, setAuthStep] = useState('phone');
  const [modalMode, setModalMode] = useState('add'); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [cart, setCart] = useState([]);
  const [openedFrom, setOpenedFrom] = useState('menu');
  const [isAuth, setIsAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => setCurrentPage(page);
const handleLogout = () => {
  setIsAuth(false);
  setCurrentPage('home');
};
const handleNavigate = (page) => {
    console.log('navigate to:', page);
  setCurrentPage(page);
};

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
function openDelivery(){
  setIsDeliveryOpen(true);
}
function closeDelivery(){
  setIsDeliveryOpen(false);
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
          onOpenAccount={() => setCurrentPage('account')}
          isAuth={isAuth}
        />
    {currentPage === 'home' && (
      <>
        

        <Hero />

        <Menu 
          onCoffeeSelect={openCoffeeModal}
          onDessertSelect={openDessertModal}
        />

        <About />
        <Events />
       
            {isCartOpen && <Cart cart={cart}  onCheckout={openDelivery}  onChange={handleChange} onAuthClick={() => setIsAuthOpen(true)} setCart={setCart} total={total} onAddToCart={handleAddToCart}  totalItems={totalItems} onPlus={increaseQty} onMinus={decreaseQty}  onRemove={removeFromCart}
 onClose={() => setIsCartOpen(false)} />}
      {isModalOpen && <Modal item={selectedItem} onUpdateCartItem={handleUpdateCartItem} openedFrom={openedFrom} mode={modalMode} onAddToCart={handleAddToCart} type={modalType}
        onClose={() => setIsModalOpen(false)} />}
{isAuthOpen && (<Auth onClose={() => setIsAuthOpen(false)} onAuthSuccess={setIsAuth} onCloseAuth={closeAuth}/>)}
        {isDeliveryOpen && <DeliveryModal onClose={closeDelivery} />}

      </>
    )}

    {currentPage === 'account' && (
      <Account
        onLogout={handleLogout}
        onGoHome={() => setCurrentPage('home')}
      />
    )}
     <Footer />
  </>
);

}

export default App;







