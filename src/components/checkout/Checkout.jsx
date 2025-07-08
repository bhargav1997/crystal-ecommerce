import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
   const navigate = useNavigate();
   const { cart, totalPrice, clearCart } = useCart();

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      cardName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
   });

   const [errors, setErrors] = useState({});

   if (cart.length === 0) {
      navigate("/cart");
      return null;
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const validateForm = () => {
      const newErrors = {};

      // Basic validation
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.cardName.trim()) newErrors.cardName = "Name on card is required";
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      if (!formData.expDate.trim()) newErrors.expDate = "Expiration date is required";
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";

      return newErrors;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
         setErrors(formErrors);
         return;
      }

      // Process the order (in a real app, you would send this to a server)
      console.log("Order submitted:", { customer: formData, order: cart, total: totalPrice });

      // Clear the cart and redirect to a success page
      clearCart();
      navigate("/order-success");
   };

   return (
      <div className='checkout-container'>
         <h1 className='checkout-title'>Checkout</h1>

         <div className='checkout-content'>
            <form className='checkout-form' onSubmit={handleSubmit}>
               <div className='form-section'>
                  <h2>Shipping Information</h2>

                  <div className='form-row'>
                     <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                           type='text'
                           id='firstName'
                           name='firstName'
                           value={formData.firstName}
                           onChange={handleChange}
                           placeholder='Enter your first name'
                           className={errors.firstName ? "error" : ""}
                        />
                        {errors.firstName && <span className='error-message'>{errors.firstName}</span>}
                     </div>

                     <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                           type='text'
                           id='lastName'
                           name='lastName'
                           value={formData.lastName}
                           onChange={handleChange}
                           placeholder='Enter your last name'
                           className={errors.lastName ? "error" : ""}
                        />
                        {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                     </div>
                  </div>

                  <div className='form-group'>
                     <label htmlFor='email'>Email</label>
                     <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='your.email@example.com'
                        className={errors.email ? "error" : ""}
                     />
                     {errors.email && <span className='error-message'>{errors.email}</span>}
                  </div>

                  <div className='form-group'>
                     <label htmlFor='address'>Address</label>
                     <input
                        type='text'
                        id='address'
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                        placeholder='Street address'
                        className={errors.address ? "error" : ""}
                     />
                     {errors.address && <span className='error-message'>{errors.address}</span>}
                  </div>

                  <div className='form-row'>
                     <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input
                           type='text'
                           id='city'
                           name='city'
                           value={formData.city}
                           onChange={handleChange}
                           placeholder='City'
                           className={errors.city ? "error" : ""}
                        />
                        {errors.city && <span className='error-message'>{errors.city}</span>}
                     </div>

                     <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input
                           type='text'
                           id='state'
                           name='state'
                           value={formData.state}
                           onChange={handleChange}
                           placeholder='State/Province'
                           className={errors.state ? "error" : ""}
                        />
                        {errors.state && <span className='error-message'>{errors.state}</span>}
                     </div>
                  </div>

                  <div className='form-row'>
                     <div className='form-group'>
                        <label htmlFor='zipCode'>Zip Code</label>
                        <input
                           type='text'
                           id='zipCode'
                           name='zipCode'
                           value={formData.zipCode}
                           onChange={handleChange}
                           placeholder='Zip/Postal Code'
                           className={errors.zipCode ? "error" : ""}
                        />
                        {errors.zipCode && <span className='error-message'>{errors.zipCode}</span>}
                     </div>

                     <div className='form-group'>
                        <label htmlFor='country'>Country</label>
                        <input
                           type='text'
                           id='country'
                           name='country'
                           value={formData.country}
                           onChange={handleChange}
                           placeholder='Country'
                           className={errors.country ? "error" : ""}
                        />
                        {errors.country && <span className='error-message'>{errors.country}</span>}
                     </div>
                  </div>
               </div>

               <div className='form-section'>
                  <h2>Payment Information</h2>

                  <div className='form-group'>
                     <label htmlFor='cardName'>Name on Card</label>
                     <input
                        type='text'
                        id='cardName'
                        name='cardName'
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder='Name as it appears on card'
                        className={errors.cardName ? "error" : ""}
                     />
                     {errors.cardName && <span className='error-message'>{errors.cardName}</span>}
                  </div>

                  <div className='form-group'>
                     <label htmlFor='cardNumber'>Card Number</label>
                     <input
                        type='text'
                        id='cardNumber'
                        name='cardNumber'
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className={errors.cardNumber ? "error" : ""}
                        placeholder='XXXX XXXX XXXX XXXX'
                     />
                     {errors.cardNumber && <span className='error-message'>{errors.cardNumber}</span>}
                  </div>

                  <div className='form-row'>
                     <div className='form-group'>
                        <label htmlFor='expDate'>Expiration Date</label>
                        <input
                           type='text'
                           id='expDate'
                           name='expDate'
                           value={formData.expDate}
                           onChange={handleChange}
                           className={errors.expDate ? "error" : ""}
                           placeholder='MM/YY'
                        />
                        {errors.expDate && <span className='error-message'>{errors.expDate}</span>}
                     </div>

                     <div className='form-group'>
                        <label htmlFor='cvv'>CVV</label>
                        <input
                           type='text'
                           id='cvv'
                           name='cvv'
                           value={formData.cvv}
                           onChange={handleChange}
                           className={errors.cvv ? "error" : ""}
                           placeholder='123'
                        />
                        {errors.cvv && <span className='error-message'>{errors.cvv}</span>}
                     </div>
                  </div>
               </div>

               <button type='submit' className='place-order-btn'>
                  Place Order - ${totalPrice.toFixed(2)}
               </button>
            </form>

            <div className='checkout-order-summary'>
               <h2>Order Summary</h2>

               <div className='order-items'>
                  {cart.map((item) => (
                     <div key={item.id} className='order-item'>
                        <img src={item.image} alt={item.name} />
                        <div className='order-item-details'>
                           <h3>{item.name}</h3>
                           <p>Quantity: {item.quantity}</p>
                           <p className='order-item-price'>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className='order-totals'>
                  <div className='total-row'>
                     <span>Subtotal</span>
                     <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className='total-row'>
                     <span>Shipping</span>
                     <span>Free</span>
                  </div>

                  <div className='total-row final'>
                     <span>Total</span>
                     <span>${totalPrice.toFixed(2)}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
