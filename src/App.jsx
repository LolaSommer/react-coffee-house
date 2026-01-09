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
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [openedFrom, setOpenedFrom] = useState('menu');
  const {cart,addToCart,increaseQty,updateCartItem,decreaseQty,removeFromCart,total,totalItems} = useCart();
  const [currentPage, setCurrentPage] = useState('home');
const [selectedProductId, setSelectedProductId] = useState(null);
function handleChange(item){
 setSelectedItem(item);
 setModalType('coffee');
modals.openModal('product');
  setOpenedFrom('cart');
}
function openCoffeeModal(id) {
  modals.openModal('product');
  setModalType('coffee');
  setSelectedItem(coffeeProducts[id].modal);
  setSelectedProductId(id);
  setOpenedFrom('menu');
}
function openDessertModal(id) {
  modals.openModal('product');
  setModalType('dessert');
  setSelectedItem(desserts[id].modal);
  setSelectedProductId(id);
}
 return (
  <>
  <Header
          onCartOpen={() => modals.openModal('cart')}
          totalItems={totalItems}
          onOpenAccount={() => setCurrentPage('account')}
          onAuthClick={() => modals.openModal('auth')}
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
       
        {modals.isOpen('cart') && (
  <Cart
    cart={cart}
    onCheckout={() => modals.openModal('delivery')}
    onChange={handleChange}
    onAuthClick={() => modals.openModal('auth')}
    total={total}
    onAddToCart={addToCart}
    totalItems={totalItems}
    onPlus={increaseQty}
    onMinus={decreaseQty}
    onRemove={removeFromCart}
    onClose={modals.closeModal}
  />
)}

     {modals.isOpen('product') && selectedItem && (
  <Modal
    type={modalType}
    item={selectedItem}
    productId={selectedProductId}
    openedFrom={openedFrom}
    onAddToCart={addToCart}
    onUpdateCartItem={updateCartItem}
    onClose={modals.closeModal}
  />
)}

{modals.isOpen('auth') && (
  <Auth
    authStep={auth.authStep}
    onClose={modals.closeModal}
    onAuthSuccess={auth.setIsAuth}
    onNextStep={auth.goToCodeStep}
  />
)}
{modals.isOpen('delivery') && (
  <DeliveryModal onClose={modals.closeModal} />
)}


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







