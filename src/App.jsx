import { useState,useEffect } from "react";
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
import EventsBlog from "./components/EventsBlog.jsx";
import SuccessModal from "./components/SuccessModal";
import DeliveryModal from "./components/DeliveryModal.jsx";
import ActionModal from "./components/ActionModal.jsx";
import SocialModal from "./components/SocialModal.jsx";
import { useModals } from './hooks/useModals';
import {useCart} from './hooks/useCart.js';
import { useAuth } from './hooks/useAuth';
import { coffeeProducts } from './data/coffeeProducts';
import { desserts } from  './data/desserts.js';
import { actions } from "./data/actions.js";
import { social } from "./data/social.js";
function App() {
  const modals = useModals();
  const auth = useAuth();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType]=useState(null);
  const [openedFrom, setOpenedFrom] = useState('menu');
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedSocial,setSelectedSocial] = useState(null);
  const {cart, addToCart,increaseQty, updateCartItem,decreaseQty, removeFromCart,total,
    totalItems,
    clearCart,
  } = useCart();
  const [isDeliveryChecked, setIsDeliveryChecked] = useState(() => {
  const saved = localStorage.getItem('isDeliveryChecked');
  return saved ? JSON.parse(saved) : false;
});

  const [currentPage, setCurrentPage] = useState('home');
const [selectedProductId, setSelectedProductId] = useState(null);
const [deliveryData, setDeliveryData] = useState(null);
const [userData, setUserData] = useState(() => {
  const saved = localStorage.getItem('userData');
  return saved
    ? JSON.parse(saved)
    : {
        phone: null,
        profile: {},
        address: null,
        payment: null,
      };
});
const handleActionClick = (actionId) => {
  const action = actions.find(a => a.id === actionId);
  setSelectedAction(action);
  modals.openModal('action');
};
const handleSocialClick =(socialId) =>{
  const soc = social.find(a=>a.id === socialId);
  setSelectedSocial(soc);
  modals.openModal('social');
}

const [activeSection, setActiveSection] = useState('hero');
const sectionMap = {
  home: ['hero', 'menu', 'about', 'events', 'contact'],
  events: ['events-home', 'tasseography', 'dark', 'roast', 'sound'], 
};

useEffect(() => {
  const ids = sectionMap[currentPage];
  if (!ids) return;

  const sections = ids
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '-25% 0px -25% 0px',
      threshold: 0.2,
    }
  );

  sections.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [currentPage]);
useEffect(() => {
  if (currentPage === 'events') {
    setActiveSection('events-home');
  }
}, [currentPage]);

useEffect(() => {
  if (total < 25 && isDeliveryChecked) {
    setIsDeliveryChecked(false);
  }
}, [total, isDeliveryChecked]);


<div style={{ position: 'fixed', bottom: 10, left: 10, zIndex: 9999 }}>
  active: {activeSection}
</div>

useEffect(() => {
  localStorage.setItem(
    'isDeliveryChecked',
    JSON.stringify(isDeliveryChecked)
  );
}, [isDeliveryChecked]);

useEffect(() => {
  localStorage.setItem('userData', JSON.stringify(userData));
}, [userData]);

const handleAuthSuccess = (phone) => {
  setUserData(prev => ({
    ...prev,
    phone,
  }));
  auth.setIsAuth(true);
};

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
const handleSaveDelivery = (data) => {
  setUserData(prev => ({
    ...prev,
    address: data.address,
    payment: data.payment,
  }));
};
const [deliveryMode, setDeliveryMode] = useState('confirm');

const openDeliveryModal = (mode = 'confirm') => {
  setDeliveryMode(mode);
  modals.openModal('delivery');
};
useEffect(() => {
  if (currentPage === 'events') {
    window.scrollTo(0, 0);
  }
}, [currentPage]);
const [successType, setSuccessType] = useState(null); 
function handleEventSubmit(data) {
  setSuccessType('event');
  modals.openModal('success');
}
function handleOrderSuccess() {
  setSuccessType('order');
  modals.openModal('success');
}

const [eventFormResetKey, setEventFormResetKey] = useState(0);
function handleSuccessClose() {
  if (successType === 'event') {
    setEventFormResetKey(prev => prev + 1);
  }
  modals.closeModal();
}


 return (
  
  <>
<Header
  onCartOpen={() => modals.openModal('cart')}
  totalItems={totalItems}
  onOpenAccount={() => setCurrentPage('account')}
  onGoHome={() => setCurrentPage('home')}
  onAuthClick={() => modals.openModal('auth')}
  isAuth={auth.isAuth}
  currentPage={currentPage}
  activeSection={activeSection}

/>
   <main id='main-content'>
    {currentPage === 'home' && (
      <>
        <Hero />
        <Menu 
          onCoffeeSelect={openCoffeeModal}
          onDessertSelect={openDessertModal}
        />
        <About />
        <Events 
        onPromoClick={handleActionClick}
        onOpenEvents={() => setCurrentPage('events')}
          />
      </>
    )}
          {modals.isOpen('cart') && (
  <Cart
    cart={cart}
    userData={userData}
    onCheckout={null} 
    onChange={handleChange}
    onAuthClick={() => modals.openModal('auth')}
    total={total}
    onAddToCart={addToCart}
    totalItems={totalItems}
    onPlus={increaseQty}
    onMinus={decreaseQty}
    onRemove={removeFromCart}
    onClose={modals.closeModal}
    openModal={modals.openModal}
    isAuth={auth.isAuth}
    setIsAuth={auth.setIsAuth}
     isDeliveryChecked={isDeliveryChecked}
  setIsDeliveryChecked={setIsDeliveryChecked}
  onOpenDeliveryModal={() => openDeliveryModal('edit')}
  handleOrderSuccess={handleOrderSuccess}

  />
)}
{modals.isOpen('success')&&<SuccessModal
 onClose={handleSuccessClose}
   onClearCart={() => {
    clearCart();
    setIsDeliveryChecked(false);
  }}
  userData={userData}
  total={total}
   isDeliveryChecked={isDeliveryChecked}
  setIsDeliveryChecked={setIsDeliveryChecked}
  type={successType}
 />}
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
     onAuthSuccess={handleAuthSuccess}
  initialPhone={userData.phone}
    onNextStep={auth.goToCodeStep}
  />
)}
{modals.isOpen('delivery') && (
  <DeliveryModal onClose={modals.closeModal}  
  onSaveDelivery={handleSaveDelivery}
  userData={userData}
   mode={deliveryMode}/>
)}
{modals.isOpen('action')&& selectedAction&&(<ActionModal 
action={selectedAction}
onClose={modals.closeModal}
  data={selectedAction.modalData}
/>
)}
{modals.isOpen('social')&&(<SocialModal
onClose={modals.closeModal}
/>)}

    {currentPage === 'account' && (
      <Account
      onLogout={() => {
    auth.logout();
    setCurrentPage('home');
  }}
  userData={userData}
  deliveryData={deliveryData}
  setUserData={setUserData}
 onOpenDeliveryModal={() => openDeliveryModal('edit')}
      />
    )}
    
     {currentPage === 'events' && (
  <EventsBlog onBack={() => setCurrentPage('home')} 
  openModal={modals.openModal}
   handleEvent={handleEventSubmit}
   resetKey={eventFormResetKey}
  />
)}
    </main>
     <Footer onSocialClick={handleSocialClick}/>
     
  </>
);

}

export default App;







