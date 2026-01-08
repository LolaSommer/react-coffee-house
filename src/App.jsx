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
import { useModals } from './hooks/useModals';
import {useCart} from './hooks/useCart.js';
import { useAuth } from './hooks/useAuth';
import { coffeeProducts } from './data/coffeeProducts';
import { desserts } from  './data/desserts.js'
function App() {
  const modals = useModals();
  const auth = useAuth();
   const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDeliveryOpen,setIsDeliveryOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [openedFrom, setOpenedFrom] = useState('menu');
  const {cart,addToCart,increaseQty,updateCartItem,decreaseQty,removeFromCart,total,totalItems} = useCart();
  const [currentPage, setCurrentPage] = useState('home');
function handleChange(item){
 setSelectedItem(item);
 setModalType('coffee');
modals.openModal('product');
  setOpenedFrom('cart');
}
function openDelivery(){
  setIsDeliveryOpen(true);
}
function closeDelivery(){
  setIsDeliveryOpen(false);
}
function openCoffeeModal(coffeeId) {
  setSelectedItem(coffeeProducts[coffeeId]);
  setModalType('coffee');
  setOpenedFrom('menu');
  modals.openModal('product');
}

 function openDessertModal(dessertID){
  setSelectedItem(desserts[dessertID]);
 setModalType('dessert');
 modals.openModal('product');
 }
 return (
  <>
  <Header
          onCartOpen={() => setIsCartOpen(true)}
          totalItems={totalItems}
          onOpenAccount={() => setCurrentPage('account')}
           onAuthClick={auth.openAuth}
           isAuth={auth.isAuth}
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
       
            {isCartOpen && <Cart cart={cart}  onCheckout={openDelivery}  onChange={handleChange} onAuthClick={auth.openAuth}
 total={total}   onAddToCart={addToCart} totalItems={totalItems} onPlus={increaseQty} onMinus={decreaseQty}  onRemove={removeFromCart}
 onClose={() => setIsCartOpen(false)} />}
      {modals.isOpen('product') && <Modal item={selectedItem}  onUpdateCartItem={updateCartItem} openedFrom={openedFrom} mode={modalMode}  onAddToCart={addToCart} type={modalType}
            onClose={modals.closeModal} />}
{auth.isAuthOpen && (<Auth  authStep={auth.authStep} onClose={auth.closeAuth} onAuthSuccess={auth.setIsAuth} onNextStep={auth.goToCodeStep}/>)}
        {isDeliveryOpen && <DeliveryModal onClose={closeDelivery} />}

      </>
    )}

    {currentPage === 'account' && (
      <Account
      onLogout={() => {
    auth.logout();
    setCurrentPage('home');
  }}
  onGoHome={() => setCurrentPage('home')}
      />
    )}
     <Footer />
  </>
);

}

export default App;







