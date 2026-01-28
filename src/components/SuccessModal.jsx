import "./succesModal.scss";

function SuccessModal({onClose,onClearCart,total,isDeliveryChecked,userData,type,}) {
function handleOk() {
  if (type !== 'event') {
    onClearCart();
  }
  onClose();
}


return (
    <>
   <div className="modal-open thankyou__modal"   role="dialog"
  aria-modal="true"
    aria-labelledby="success-title"
  >
                 <div className="thankyou__overlay" onClick={handleOk}></div>
                 <div className="thankyou__line">
                 <button className="thankyou__close" aria-label="close" onClick={handleOk}>
                      <svg className="thankyou__icon"><use href="#icon-close"></use></svg>
                      </button>
                 <div className="thankyou__window">
                    {type === 'order' && (
                        <>
                <h2 className="thankyou__title" id="success-title">Thank you for your order ☕️</h2>
                <p className="thankyou__text">Your order total is <span className="thankyou__price">{total.toFixed(2)} $</span></p>
                <p className="thankyou__text">    {isDeliveryChecked ? `Delivery to: ${userData.address.street}`: 'Pickup in café'}</p>
                <p className="thankyou__text">You’ll receive a confirmation via SMS shortly.</p>
               </> )}
               {type === 'event' && (
                <>
                <h2 className="thankyou__title">Thank you for your event booking!</h2>
                <p className="thankyou__text">Your event has been booked successfully.</p>
                <p className="thankyou__text">We will contact you via your preferred method to confirm details.</p>
                </>
               )}
                <div className="thankyou__button">
                <button className="thankyou__btn" onClick={handleOk}>OK</button>
                </div>
                </div>
                </div>
                </div>
    </>
)

}
export default SuccessModal;