import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSearch,
   faShippingFast,
   faBox,
   faCheckCircle,
   faTruck,
   faMapMarkerAlt,
   faExclamationCircle,
   faCalendarAlt,
   faUser,
   faEnvelope,
   faClipboardList,
   faMoneyBillWave,
   faExternalLinkAlt,
   faHistory,
} from "@fortawesome/free-solid-svg-icons";
import "./TrackOrderPageEnhanced.css";

const TrackOrderPage = () => {
   const [orderNumber, setOrderNumber] = useState("");
   const [email, setEmail] = useState("");
   const [orderDetails, setOrderDetails] = useState(null);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   // Sample order data for demonstration
   const sampleOrders = [
      {
         orderNumber: "CR12345",
         email: "test@example.com",
         date: "June 15, 2023",
         status: "Delivered",
         items: [
            { name: "Amethyst Crystal", quantity: 1, price: 29.99 },
            { name: "Rose Quartz", quantity: 2, price: 19.99 },
         ],
         shipping: {
            address: "123 Main St, Anytown, CA 12345",
            method: "Standard Shipping",
            trackingNumber: "TRK789012345",
            estimatedDelivery: "June 14, 2023",
            carrier: "USPS",
         },
         timeline: [
            { status: "Order Placed", date: "June 10, 2023", time: "10:30 AM", completed: true },
            { status: "Payment Confirmed", date: "June 10, 2023", time: "11:45 AM", completed: true },
            { status: "Processing", date: "June 11, 2023", time: "9:15 AM", completed: true },
            { status: "Shipped", date: "June 12, 2023", time: "2:30 PM", completed: true },
            { status: "Out for Delivery", date: "June 14, 2023", time: "8:45 AM", completed: true },
            { status: "Delivered", date: "June 14, 2023", time: "3:20 PM", completed: true },
         ],
         total: 69.97,
         tax: 5.25,
         shippingCost: 4.99,
      },
      {
         orderNumber: "CR67890",
         email: "user@example.com",
         date: "June 18, 2023",
         status: "In Transit",
         items: [
            { name: "Clear Quartz Point", quantity: 1, price: 24.99 },
            { name: "Selenite Wand", quantity: 1, price: 15.99 },
            { name: "Chakra Bracelet", quantity: 1, price: 29.99 },
         ],
         shipping: {
            address: "456 Oak Ave, Somewhere, NY 54321",
            method: "Express Shipping",
            trackingNumber: "TRK567890123",
            estimatedDelivery: "June 21, 2023",
            carrier: "FedEx",
         },
         timeline: [
            { status: "Order Placed", date: "June 18, 2023", time: "3:45 PM", completed: true },
            { status: "Payment Confirmed", date: "June 18, 2023", time: "4:00 PM", completed: true },
            { status: "Processing", date: "June 19, 2023", time: "10:30 AM", completed: true },
            { status: "Shipped", date: "June 20, 2023", time: "1:15 PM", completed: true },
            { status: "Out for Delivery", date: "June 21, 2023", time: "9:00 AM", completed: false },
            { status: "Delivered", date: "June 21, 2023", time: "Pending", completed: false },
         ],
         total: 70.97,
         tax: 5.99,
         shippingCost: 9.99,
      },
   ];

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");

      // Simulate API call
      setTimeout(() => {
         const foundOrder = sampleOrders.find(
            (order) => order.orderNumber.toLowerCase() === orderNumber.toLowerCase() && order.email.toLowerCase() === email.toLowerCase(),
         );

         if (foundOrder) {
            setOrderDetails(foundOrder);
         } else {
            setError("No order found with the provided details. Please check your order number and email.");
            setOrderDetails(null);
         }

         setIsLoading(false);
      }, 1000);
   };

   const getStatusIcon = (status) => {
      switch (status.toLowerCase()) {
         case "order placed":
            return faBox;
         case "payment confirmed":
            return faCheckCircle;
         case "processing":
            return faBox;
         case "shipped":
            return faShippingFast;
         case "out for delivery":
            return faTruck;
         case "delivered":
            return faMapMarkerAlt;
         default:
            return faBox;
      }
   };

   const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
         case "delivered":
            return "status-delivered";
         case "in transit":
            return "status-transit";
         case "processing":
            return "status-processing";
         default:
            return "";
      }
   };

   return (
      <div className='track-order-page'>
         <div className='container'>
            <div className='track-order-header'>
               <h1>Track Your Order</h1>
               <p>Enter your order number and the email address used for the order to check your order status and shipping information.</p>
            </div>

            <div className='track-order-form-container'>
               <form className='track-order-form' onSubmit={handleSubmit}>
                  <div className='form-group'>
                     <label htmlFor='orderNumber'>Order Number</label>
                     <input
                        type='text'
                        id='orderNumber'
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        placeholder='e.g. CR12345'
                        required
                     />
                  </div>

                  <div className='form-group'>
                     <label htmlFor='email'>Email Address</label>
                     <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email used for the order'
                        required
                     />
                  </div>

                  <button type='submit' className='track-button' disabled={isLoading}>
                     {isLoading ? (
                        <>
                           <div className='button-spinner'></div>
                           <span>Searching...</span>
                        </>
                     ) : (
                        <>
                           <FontAwesomeIcon icon={faSearch} />
                           <span>Track Order</span>
                        </>
                     )}
                  </button>
               </form>
            </div>

            {error && (
               <div className='error-message'>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <span>{error}</span>
               </div>
            )}

            {orderDetails && (
               <div className='order-details'>
                  <div className='order-summary'>
                     <div className='order-header'>
                        <div>
                           <h2>
                              <FontAwesomeIcon icon={faClipboardList} /> Order #{orderDetails.orderNumber}
                           </h2>
                           <p className='order-date'>
                              <FontAwesomeIcon icon={faCalendarAlt} /> Placed on {orderDetails.date}
                           </p>
                        </div>
                        <div className={`order-status ${getStatusClass(orderDetails.status)}`}>
                           <FontAwesomeIcon
                              icon={
                                 orderDetails.status.toLowerCase() === "delivered"
                                    ? faCheckCircle
                                    : orderDetails.status.toLowerCase() === "in transit"
                                    ? faTruck
                                    : faBox
                              }
                           />
                           {orderDetails.status}
                        </div>
                     </div>

                     <div className='order-info-grid'>
                        <div className='order-info-card'>
                           <h3>
                              <FontAwesomeIcon icon={faMapMarkerAlt} /> Shipping Address
                           </h3>
                           <p>{orderDetails.shipping.address}</p>
                        </div>

                        <div className='order-info-card'>
                           <h3>
                              <FontAwesomeIcon icon={faShippingFast} /> Shipping Method
                           </h3>
                           <p>{orderDetails.shipping.method}</p>
                           <p>Carrier: {orderDetails.shipping.carrier}</p>
                        </div>

                        <div className='order-info-card'>
                           <h3>
                              <FontAwesomeIcon icon={faBox} /> Tracking Number
                           </h3>
                           <p>{orderDetails.shipping.trackingNumber}</p>
                           <a
                              href={`https://www.${orderDetails.shipping.carrier.toLowerCase()}.com/track?tracknum=${
                                 orderDetails.shipping.trackingNumber
                              }`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='carrier-tracking-link'>
                              <FontAwesomeIcon icon={faExternalLinkAlt} /> Track with {orderDetails.shipping.carrier}
                           </a>
                        </div>

                        <div className='order-info-card'>
                           <h3>
                              <FontAwesomeIcon icon={faCalendarAlt} /> Estimated Delivery
                           </h3>
                           <p>{orderDetails.shipping.estimatedDelivery}</p>
                        </div>
                     </div>
                  </div>

                  <div className='order-timeline'>
                     <h3>
                        <FontAwesomeIcon icon={faHistory} /> Order Timeline
                     </h3>
                     <div className='timeline'>
                        {orderDetails.timeline.map((step, index) => (
                           <div key={index} className={`timeline-item ${step.completed ? "completed" : ""}`}>
                              <div className='timeline-icon'>
                                 <FontAwesomeIcon icon={getStatusIcon(step.status)} />
                              </div>
                              <div className='timeline-content'>
                                 <h4>{step.status}</h4>
                                 <p>
                                    {step.date} {step.time !== "Pending" ? `at ${step.time}` : ""}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className='order-items'>
                     <h3>
                        <FontAwesomeIcon icon={faBox} /> Order Items
                     </h3>
                     <div className='items-list'>
                        {orderDetails.items.map((item, index) => (
                           <div key={index} className='order-item'>
                              <div className='item-details'>
                                 <h4>{item.name}</h4>
                                 <p>Quantity: {item.quantity}</p>
                              </div>
                              <div className='item-price'>${(item.price * item.quantity).toFixed(2)}</div>
                           </div>
                        ))}
                     </div>

                     <div className='order-totals'>
                        <div className='total-row'>
                           <span>Subtotal:</span>
                           <span>${(orderDetails.total - orderDetails.tax - orderDetails.shippingCost).toFixed(2)}</span>
                        </div>
                        <div className='total-row'>
                           <span>Shipping:</span>
                           <span>${orderDetails.shippingCost.toFixed(2)}</span>
                        </div>
                        <div className='total-row'>
                           <span>Tax:</span>
                           <span>${orderDetails.tax.toFixed(2)}</span>
                        </div>
                        <div className='total-row grand-total'>
                           <span>Total:</span>
                           <span>${orderDetails.total.toFixed(2)}</span>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default TrackOrderPage;
