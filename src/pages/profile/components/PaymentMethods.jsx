import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCreditCard,
   faPlus,
   faTrash,
   faStar,
   faStarHalfAlt,
   faTimes,
   faSave,
   faLock,
   faShieldAlt,
   faCheckCircle,
   faExclamationTriangle,
   faInfoCircle,
   faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileComponents.css";
import "./PaymentMethodsStyles.css";

const PaymentMethods = ({ isGuest }) => {
   const [paymentMethods, setPaymentMethods] = useState(
      isGuest
         ? []
         : [
              {
                 id: 1,
                 type: "visa",
                 last4: "4242",
                 expMonth: "05",
                 expYear: "25",
                 name: "Sarah Johnson",
                 isDefault: true,
              },
              {
                 id: 2,
                 type: "mastercard",
                 last4: "5678",
                 expMonth: "09",
                 expYear: "24",
                 name: "Sarah Johnson",
                 isDefault: false,
              },
           ],
   );

   const [showAddForm, setShowAddForm] = useState(false);
   const [newCard, setNewCard] = useState({
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: "",
      name: "",
      makeDefault: false,
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setNewCard((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));

      // Clear error when user types
      if (errors[name]) {
         setErrors((prev) => ({
            ...prev,
            [name]: "",
         }));
      }
   };

   const validateForm = () => {
      const newErrors = {};

      // Validate card number (simple validation for demo)
      if (!newCard.cardNumber) {
         newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(newCard.cardNumber.replace(/\s/g, ""))) {
         newErrors.cardNumber = "Card number must be 16 digits";
      }

      // Validate expiration date
      if (!newCard.expMonth) {
         newErrors.expMonth = "Month is required";
      }

      if (!newCard.expYear) {
         newErrors.expYear = "Year is required";
      }

      // Validate CVV
      if (!newCard.cvv) {
         newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(newCard.cvv)) {
         newErrors.cvv = "CVV must be 3 or 4 digits";
      }

      // Validate name
      if (!newCard.name) {
         newErrors.name = "Name is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         setIsSubmitting(true);

         // Simulate API call to add payment method
         setTimeout(() => {
            const cardType = newCard.cardNumber.startsWith("4") ? "visa" : newCard.cardNumber.startsWith("5") ? "mastercard" : "amex";

            const newPaymentMethod = {
               id: Date.now(),
               type: cardType,
               last4: newCard.cardNumber.slice(-4),
               expMonth: newCard.expMonth,
               expYear: newCard.expYear,
               name: newCard.name,
               isDefault: newCard.makeDefault,
            };

            // If new card is default, update other cards
            let updatedPaymentMethods = [...paymentMethods];
            if (newCard.makeDefault) {
               updatedPaymentMethods = updatedPaymentMethods.map((method) => ({
                  ...method,
                  isDefault: false,
               }));
            }

            // Add new payment method
            setPaymentMethods([...updatedPaymentMethods, newPaymentMethod]);

            // Reset form
            setNewCard({
               cardNumber: "",
               expMonth: "",
               expYear: "",
               cvv: "",
               name: "",
               makeDefault: false,
            });

            setShowAddForm(false);
            setIsSubmitting(false);
         }, 1500);
      }
   };

   const handleCancel = () => {
      setShowAddForm(false);
      setNewCard({
         cardNumber: "",
         expMonth: "",
         expYear: "",
         cvv: "",
         name: "",
         makeDefault: false,
      });
      setErrors({});
   };

   const handleSetDefault = (id) => {
      setPaymentMethods(
         paymentMethods.map((method) => ({
            ...method,
            isDefault: method.id === id,
         })),
      );
   };

   const handleDelete = (id) => {
      const methodToDelete = paymentMethods.find((method) => method.id === id);

      // If deleting default method, show alert
      if (methodToDelete.isDefault && paymentMethods.length > 1) {
         alert("Please set another payment method as default before deleting this one.");
         return;
      }

      // Confirm deletion
      if (window.confirm("Are you sure you want to delete this payment method?")) {
         setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
      }
   };

   // Format card number with spaces
   const formatCardNumber = (value) => {
      const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      const matches = v.match(/\d{4,16}/g);
      const match = (matches && matches[0]) || "";
      const parts = [];

      for (let i = 0, len = match.length; i < len; i += 4) {
         parts.push(match.substring(i, i + 4));
      }

      if (parts.length) {
         return parts.join(" ");
      } else {
         return value;
      }
   };

   return (
      <div className='payment-methods-container-pm'>
         <div className='profile-section-pm'>
            <div className='profile-section-header-pm'>
               <h2>Payment Methods</h2>
               {!isGuest && !showAddForm && (
                  <button className='action-button-pm add-payment-btn-pm' onClick={() => setShowAddForm(true)}>
                     <FontAwesomeIcon icon={faPlus} />
                     <span>Add Payment Method</span>
                  </button>
               )}
            </div>

            {/* Security Information */}
            <div className='security-info-pm'>
               <FontAwesomeIcon icon={faShieldAlt} className='security-icon-pm' />
               <div className='security-text-pm'>
                  <h4>Your payment information is secure</h4>
                  <p>All payment details are encrypted and securely stored. We never store your full card details on our servers.</p>
               </div>
            </div>

            {isGuest ? (
               <div className='empty-state-pm'>
                  <div className='empty-state-icon-pm'>
                     <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <h3>No Payment Methods</h3>
                  <p>You're currently browsing as a guest. Sign in or create an account to save payment methods.</p>
                  <a href='/signin' className='action-button-pm signin-btn-pm'>
                     Sign In
                  </a>
               </div>
            ) : (
               <>
                  {showAddForm ? (
                     <div className='payment-form-overlay-pm'>
                        <div className='payment-form-container-pm'>
                           <div className='payment-form-header-pm'>
                              <h3>Add New Payment Method</h3>
                              <button className='close-form-button-pm' onClick={handleCancel} aria-label='Close form'>
                                 <FontAwesomeIcon icon={faTimes} />
                              </button>
                           </div>
                           <form className='payment-form-pm' onSubmit={handleSubmit}>
                              <div className='form-group-pm'>
                                 <label htmlFor='name'>Name on Card</label>
                                 <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='John Doe'
                                    value={newCard.name}
                                    onChange={handleInputChange}
                                    className={errors.name ? "error-pm" : ""}
                                    required
                                 />
                                 {errors.name && <div className='error-message-pm'>{errors.name}</div>}
                              </div>

                              <div className='form-group-pm'>
                                 <label htmlFor='cardNumber'>Card Number</label>
                                 <div className='card-number-input-pm'>
                                    <FontAwesomeIcon icon={faCreditCard} className='card-icon-pm' />
                                    <input
                                       type='text'
                                       id='cardNumber'
                                       name='cardNumber'
                                       placeholder='1234 5678 9012 3456'
                                       value={newCard.cardNumber}
                                       onChange={(e) => {
                                          const formattedValue = formatCardNumber(e.target.value);
                                          setNewCard((prev) => ({
                                             ...prev,
                                             cardNumber: formattedValue,
                                          }));

                                          if (errors.cardNumber) {
                                             setErrors((prev) => ({
                                                ...prev,
                                                cardNumber: "",
                                             }));
                                          }
                                       }}
                                       maxLength='19'
                                       required
                                    />
                                    <div className='card-type-indicator-pm'>
                                       {newCard.cardNumber && (
                                          <div
                                             className={`card-type-${
                                                newCard.cardNumber.startsWith("4")
                                                   ? "visa"
                                                   : newCard.cardNumber.startsWith("5")
                                                   ? "mastercard"
                                                   : "amex"
                                             }-pm`}></div>
                                       )}
                                    </div>
                                 </div>
                                 {errors.cardNumber && <div className='error-message-pm'>{errors.cardNumber}</div>}
                                 <div className='security-note-pm'>
                                    <FontAwesomeIcon icon={faLock} />
                                    <span>Your card details are encrypted and secure</span>
                                 </div>
                              </div>

                              <div className='form-row-pm'>
                                 <div className='form-group-pm'>
                                    <label>Expiration Date</label>
                                    <div className='expiry-inputs-pm'>
                                       <select
                                          name='expMonth'
                                          value={newCard.expMonth}
                                          onChange={handleInputChange}
                                          className={errors.expMonth ? "error-pm" : ""}
                                          required>
                                          <option value=''>Month</option>
                                          {Array.from({ length: 12 }, (_, i) => {
                                             const month = i + 1;
                                             return (
                                                <option key={month} value={month.toString().padStart(2, "0")}>
                                                   {month.toString().padStart(2, "0")}
                                                </option>
                                             );
                                          })}
                                       </select>

                                       <select
                                          name='expYear'
                                          value={newCard.expYear}
                                          onChange={handleInputChange}
                                          className={errors.expYear ? "error-pm" : ""}
                                          required>
                                          <option value=''>Year</option>
                                          {Array.from({ length: 10 }, (_, i) => {
                                             const year = new Date().getFullYear() + i;
                                             return (
                                                <option key={year} value={year.toString().slice(-2)}>
                                                   {year}
                                                </option>
                                             );
                                          })}
                                       </select>
                                    </div>
                                    {(errors.expMonth || errors.expYear) && (
                                       <div className='error-message-pm'>{errors.expMonth || errors.expYear}</div>
                                    )}
                                 </div>

                                 <div className='form-group-pm'>
                                    <label htmlFor='cvv'>CVV</label>
                                    <div className='cvv-input-pm'>
                                       <input
                                          type='text'
                                          id='cvv'
                                          name='cvv'
                                          placeholder='123'
                                          value={newCard.cvv}
                                          onChange={handleInputChange}
                                          maxLength='4'
                                          className={errors.cvv ? "error-pm" : ""}
                                          required
                                       />
                                       <FontAwesomeIcon
                                          icon={faInfoCircle}
                                          className='cvv-info-icon-pm'
                                          title='3-digit code on the back of your card, or 4-digit code on the front for AMEX'
                                       />
                                    </div>
                                    {errors.cvv && <div className='error-message-pm'>{errors.cvv}</div>}
                                 </div>
                              </div>

                              <div className='form-group-pm checkbox-group-pm'>
                                 <label className='checkbox-label-pm'>
                                    <input type='checkbox' name='makeDefault' checked={newCard.makeDefault} onChange={handleInputChange} />
                                    <span>Make this my default payment method</span>
                                 </label>
                              </div>

                              <div className='form-actions-pm'>
                                 <button type='button' className='cancel-button-pm' onClick={handleCancel}>
                                    <FontAwesomeIcon icon={faTimes} />
                                    <span>Cancel</span>
                                 </button>

                                 <button type='submit' className='save-button-pm' disabled={isSubmitting}>
                                    {isSubmitting ? (
                                       <>
                                          <div className='button-spinner-pm'></div>
                                          <span>Adding...</span>
                                       </>
                                    ) : (
                                       <>
                                          <FontAwesomeIcon icon={faSave} />
                                          <span>Add Payment Method</span>
                                       </>
                                    )}
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  ) : (
                     <>
                        {paymentMethods.length > 0 ? (
                           <div className='payment-methods-list-pm'>
                              {paymentMethods.map((method) => (
                                 <div className={`payment-method-card-pm ${method.isDefault ? "default-pm" : ""}`} key={method.id}>
                                    <div className='payment-card-icon-pm'>
                                       <div className={`payment-card-type-pm payment-card-${method.type}-pm`}></div>
                                    </div>

                                    <div className='payment-method-details-pm'>
                                       <div className='card-number-pm'>•••• •••• •••• {method.last4}</div>

                                       <div className='card-info-pm'>
                                          <div className='card-name-pm'>{method.name}</div>
                                          <div className='card-expiry-pm'>
                                             Expires {method.expMonth}/{method.expYear}
                                          </div>
                                       </div>

                                       {method.isDefault && (
                                          <div className='default-payment-badge-pm'>
                                             <FontAwesomeIcon icon={faCheckCircle} />
                                             <span>Default</span>
                                          </div>
                                       )}
                                    </div>

                                    <div className='payment-method-actions-pm'>
                                       {!method.isDefault && (
                                          <button
                                             className='set-default-button-pm'
                                             onClick={() => handleSetDefault(method.id)}
                                             aria-label='Set as default payment method'>
                                             <FontAwesomeIcon icon={faStar} />
                                             <span>Set as Default</span>
                                          </button>
                                       )}

                                       <button
                                          className='edit-payment-button-pm'
                                          onClick={() => {
                                             // Add edit functionality here
                                             alert("Edit functionality will be implemented soon");
                                          }}
                                          aria-label='Edit payment method'>
                                          <FontAwesomeIcon icon={faPencilAlt} />
                                       </button>

                                       <button
                                          className='delete-payment-button-pm'
                                          onClick={() => handleDelete(method.id)}
                                          aria-label='Delete payment method'>
                                          <FontAwesomeIcon icon={faTrash} />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <div className='empty-state-pm'>
                              <div className='empty-state-icon-pm'>
                                 <FontAwesomeIcon icon={faCreditCard} />
                              </div>
                              <h3>No Payment Methods</h3>
                              <p>You haven't added any payment methods yet.</p>
                              <button className='action-button-pm add-first-payment-btn-pm' onClick={() => setShowAddForm(true)}>
                                 <FontAwesomeIcon icon={faPlus} />
                                 <span>Add Payment Method</span>
                              </button>
                           </div>
                        )}
                     </>
                  )}
               </>
            )}
         </div>
      </div>
   );
};

export default PaymentMethods;
