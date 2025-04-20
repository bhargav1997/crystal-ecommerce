import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faShoppingBag,
   faSearch,
   faCalendarAlt,
   faEye,
   faFileDownload,
   faChevronDown,
   faChevronUp,
   faFilter,
   faTimes,
   faTruck,
   faBox,
   faCheckCircle,
   faExclamationCircle,
   faStar,
   faReply,
   faPrint,
   faMapMarkerAlt,
   faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileComponents.css";

const OrderHistory = ({ isGuest }) => {
   const [searchTerm, setSearchTerm] = useState("");
   const [filterStatus, setFilterStatus] = useState("all");
   const [filterDateRange, setFilterDateRange] = useState("all");
   const [sortBy, setSortBy] = useState("date-desc");
   const [expandedOrder, setExpandedOrder] = useState(null);
   const [showFilters, setShowFilters] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   // Simulate loading data
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);

   // Filter by date range
   const filterByDateRange = (order) => {
      if (filterDateRange === "all") return true;

      const orderDate = new Date(order.date);
      const today = new Date();
      const daysDiff = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));

      switch (filterDateRange) {
         case "last30":
            return daysDiff <= 30;
         case "last90":
            return daysDiff <= 90;
         case "last6months":
            return daysDiff <= 180;
         case "lastyear":
            return daysDiff <= 365;
         default:
            return true;
      }
   };

   // Mock order data
   const orders = isGuest
      ? []
      : [
           {
              id: "ORD-12345",
              orderNumber: "12345",
              date: "2023-05-15",
              total: 129.99,
              subtotal: 129.99,
              tax: 0,
              shipping: 0,
              discount: 0,
              status: "Delivered",
              shippingMethod: "Standard Shipping",
              estimatedDelivery: "2023-05-20",
              carrier: "UPS",
              items: [
                 {
                    id: 1,
                    name: "Amethyst Crystal",
                    price: 49.99,
                    quantity: 1,
                    sku: "AME-001",
                    canReview: true,
                    hasReviewed: false,
                    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=200&auto=format&fit=crop",
                 },
                 {
                    id: 2,
                    name: "Rose Quartz",
                    price: 39.99,
                    quantity: 2,
                    sku: "RQ-002",
                    canReview: true,
                    hasReviewed: true,
                    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=200&auto=format&fit=crop",
                 },
              ],
              shippingAddress: {
                 name: "Sarah Johnson",
                 street: "123 Crystal Way",
                 city: "Sedona",
                 state: "AZ",
                 zip: "86336",
                 country: "United States",
                 phone: "(555) 123-4567",
              },
              paymentMethod: {
                 type: "visa",
                 last4: "4242",
                 expiryDate: "04/25",
              },
              trackingNumber: "1Z999AA10123456784",
              timeline: [
                 {
                    status: "Order Placed",
                    date: "2023-05-15T10:30:00",
                    description: "Your order has been received and is being processed.",
                 },
                 {
                    status: "Payment Confirmed",
                    date: "2023-05-15T10:35:00",
                    description: "Payment has been successfully processed.",
                 },
                 {
                    status: "Processing",
                    date: "2023-05-16T09:15:00",
                    description: "Your order is being prepared for shipping.",
                 },
                 {
                    status: "Shipped",
                    date: "2023-05-17T14:20:00",
                    description: "Your order has been shipped via UPS.",
                 },
                 {
                    status: "Delivered",
                    date: "2023-05-19T11:45:00",
                    description: "Your order has been delivered.",
                 },
              ],
              canReview: true,
              canReturn: false,
              canCancel: false,
           },
           {
              id: "ORD-12344",
              orderNumber: "12344",
              date: "2023-04-28",
              total: 75.5,
              subtotal: 75.5,
              tax: 0,
              shipping: 0,
              discount: 0,
              status: "Delivered",
              shippingMethod: "Express Shipping",
              carrier: "FedEx",
              items: [
                 {
                    id: 3,
                    name: "Clear Quartz",
                    price: 35.5,
                    quantity: 1,
                    sku: "CQ-003",
                    canReview: true,
                    hasReviewed: false,
                    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=200&auto=format&fit=crop",
                 },
                 {
                    id: 4,
                    name: "Selenite Wand",
                    price: 20.0,
                    quantity: 2,
                    sku: "SW-004",
                    canReview: true,
                    hasReviewed: false,
                    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=200&auto=format&fit=crop",
                 },
              ],
              shippingAddress: {
                 name: "Sarah Johnson",
                 street: "123 Crystal Way",
                 city: "Sedona",
                 state: "AZ",
                 zip: "86336",
                 country: "United States",
              },
              paymentMethod: {
                 type: "mastercard",
                 last4: "5678",
                 expiryDate: "08/24",
              },
              trackingNumber: "1Z999AA10123456785",
              timeline: [
                 {
                    status: "Order Placed",
                    date: "2023-04-28T15:20:00",
                    description: "Your order has been received and is being processed.",
                 },
                 {
                    status: "Payment Confirmed",
                    date: "2023-04-28T15:25:00",
                    description: "Payment has been successfully processed.",
                 },
                 {
                    status: "Processing",
                    date: "2023-04-29T10:30:00",
                    description: "Your order is being prepared for shipping.",
                 },
                 {
                    status: "Shipped",
                    date: "2023-04-30T09:15:00",
                    description: "Your order has been shipped via FedEx.",
                 },
                 {
                    status: "Delivered",
                    date: "2023-05-02T13:40:00",
                    description: "Your order has been delivered.",
                 },
              ],
              canReview: true,
              canReturn: false,
              canCancel: false,
           },
           {
              id: "ORD-12343",
              orderNumber: "12343",
              date: "2023-03-15",
              total: 89.97,
              subtotal: 89.97,
              tax: 0,
              shipping: 0,
              discount: 0,
              status: "Processing",
              shippingMethod: "Standard Shipping",
              estimatedDelivery: "2023-03-25",
              carrier: "USPS",
              items: [
                 {
                    id: 5,
                    name: "Labradorite",
                    price: 29.99,
                    quantity: 3,
                    sku: "LAB-005",
                    canReview: false,
                    hasReviewed: false,
                    image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=200&auto=format&fit=crop",
                 },
              ],
              shippingAddress: {
                 name: "Sarah Johnson",
                 street: "123 Crystal Way",
                 city: "Sedona",
                 state: "AZ",
                 zip: "86336",
                 country: "United States",
              },
              paymentMethod: {
                 type: "amex",
                 last4: "9012",
                 expiryDate: "12/26",
              },
              trackingNumber: "1Z999AA10123456786",
              timeline: [
                 {
                    status: "Order Placed",
                    date: "2023-03-15T11:10:00",
                    description: "Your order has been received and is being processed.",
                 },
                 {
                    status: "Payment Confirmed",
                    date: "2023-03-15T11:15:00",
                    description: "Payment has been successfully processed.",
                 },
                 {
                    status: "Processing",
                    date: "2023-03-16T14:30:00",
                    description: "Your order is being prepared for shipping.",
                 },
              ],
              canReview: false,
              canReturn: false,
              canCancel: true,
           },
        ];

   // Filter and sort orders
   const filteredOrders = orders
      .filter((order) => {
         // Filter by search term
         if (searchTerm && !order.id.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
         }

         // Filter by status
         if (filterStatus !== "all" && order.status.toLowerCase() !== filterStatus) {
            return false;
         }

         // Filter by date range
         if (!filterByDateRange(order)) {
            return false;
         }

         return true;
      })
      .sort((a, b) => {
         // Sort by selected option
         if (sortBy === "date-desc") {
            return new Date(b.date) - new Date(a.date);
         } else if (sortBy === "date-asc") {
            return new Date(a.date) - new Date(b.date);
         } else if (sortBy === "total-desc") {
            return b.total - a.total;
         } else if (sortBy === "total-asc") {
            return a.total - b.total;
         }
         return 0;
      });

   const handleSearch = (e) => {
      e.preventDefault();
      // Search is already handled by the filter function
   };

   const toggleOrderDetails = (orderId) => {
      if (expandedOrder === orderId) {
         setExpandedOrder(null);
      } else {
         setExpandedOrder(orderId);
      }
   };

   // Add date range filter options
   const dateRangeOptions = [
      { value: "all", label: "All Time" },
      { value: "last30", label: "Last 30 Days" },
      { value: "last90", label: "Last 90 Days" },
      { value: "last6months", label: "Last 6 Months" },
      { value: "lastyear", label: "Last Year" },
   ];

   const toggleFilters = () => {
      setShowFilters(!showFilters);
   };

   return (
      <div className='order-history'>
         <div className='profile-section'>
            <div className='profile-section-header'>
               <h2>Order History</h2>
            </div>

            {isLoading ? (
               <div className='orders-loading'>
                  <div className='loading-spinner'></div>
                  <p>Loading your orders...</p>
               </div>
            ) : isGuest ? (
               <div className='empty-state'>
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <h3>No Order History</h3>
                  <p>You're currently browsing as a guest. Sign in or create an account to view your order history.</p>
                  <Link to='/signin' className='action-button'>
                     Sign In
                  </Link>
               </div>
            ) : (
               <>
                  <div className='order-filters'>
                     <form onSubmit={handleSearch} className='order-search'>
                        <input
                           type='text'
                           placeholder='Search by order number'
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type='submit'>
                           <FontAwesomeIcon icon={faSearch} />
                        </button>
                     </form>

                     <button className='filter-toggle-button' onClick={toggleFilters}>
                        <FontAwesomeIcon icon={faFilter} />
                        <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
                        <FontAwesomeIcon icon={showFilters ? faChevronUp : faChevronDown} />
                     </button>

                     <div className='filter-controls' style={{ display: showFilters ? "flex" : "" }}>
                        <div className='filter-group'>
                           <label htmlFor='filterStatus'>Status:</label>
                           <select id='filterStatus' value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                              <option value='all'>All</option>
                              <option value='processing'>Processing</option>
                              <option value='shipped'>Shipped</option>
                              <option value='delivered'>Delivered</option>
                              <option value='cancelled'>Cancelled</option>
                           </select>
                        </div>

                        <div className='filter-group'>
                           <label htmlFor='filterDateRange'>Time Period:</label>
                           <select id='filterDateRange' value={filterDateRange} onChange={(e) => setFilterDateRange(e.target.value)}>
                              {dateRangeOptions.map((option) => (
                                 <option key={option.value} value={option.value}>
                                    {option.label}
                                 </option>
                              ))}
                           </select>
                        </div>

                        <div className='filter-group'>
                           <label htmlFor='sortBy'>Sort by:</label>
                           <select id='sortBy' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                              <option value='date-desc'>Date (Newest First)</option>
                              <option value='date-asc'>Date (Oldest First)</option>
                              <option value='total-desc'>Total (Highest First)</option>
                              <option value='total-asc'>Total (Lowest First)</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  {filteredOrders.length > 0 ? (
                     <div className='orders-list'>
                        {filteredOrders.map((order) => (
                           <div className='order-card' key={order.id}>
                              <div className='order-header'>
                                 <div className='order-header-left'>
                                    <div className='order-id'>Order #{order.orderNumber}</div>
                                    <div className='order-date'>
                                       <FontAwesomeIcon icon={faCalendarAlt} />
                                       {new Date(order.date).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                       })}
                                    </div>
                                 </div>

                                 <div className='order-header-right'>
                                    <div className='order-total'>${order.total.toFixed(2)}</div>
                                    <div className='order-status'>
                                       <span className={`status-badge ${order.status.toLowerCase()}`}>
                                          {order.status === "Processing" && <FontAwesomeIcon icon={faBox} />}
                                          {order.status === "Shipped" && <FontAwesomeIcon icon={faTruck} />}
                                          {order.status === "Delivered" && <FontAwesomeIcon icon={faCheckCircle} />}
                                          {order.status === "Cancelled" && <FontAwesomeIcon icon={faExclamationCircle} />}
                                          <span className='status-text'>{order.status}</span>
                                       </span>
                                    </div>
                                 </div>
                              </div>

                              <div className='order-summary'>
                                 <div className='order-items-count'>
                                    {order.items.reduce((total, item) => total + item.quantity, 0)} items
                                    {order.shippingMethod && <span className='shipping-method'> · {order.shippingMethod}</span>}
                                    {order.estimatedDelivery && order.status !== "Delivered" && (
                                       <span className='estimated-delivery'>
                                          {" "}
                                          · Est. delivery:{" "}
                                          {new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
                                             month: "short",
                                             day: "numeric",
                                          })}
                                       </span>
                                    )}
                                 </div>

                                 <div className='order-actions'>
                                    <button
                                       className='order-action-button'
                                       onClick={() => toggleOrderDetails(order.id)}
                                       aria-expanded={expandedOrder === order.id}
                                       aria-controls={`order-details-${order.id}`}>
                                       <FontAwesomeIcon icon={faEye} />
                                       <span>{expandedOrder === order.id ? "Hide Details" : "View Details"}</span>
                                       <FontAwesomeIcon
                                          icon={expandedOrder === order.id ? faChevronUp : faChevronDown}
                                          className='toggle-icon'
                                       />
                                    </button>

                                    <button className='order-action-button'>
                                       <FontAwesomeIcon icon={faFileDownload} />
                                       <span>Invoice</span>
                                    </button>
                                 </div>
                              </div>

                              {expandedOrder === order.id && (
                                 <div className='order-details-order-history' id={`order-details-${order.id}`}>
                                    <div className='order-items'>
                                       <h4>Items</h4>
                                       {order.items.map((item) => (
                                          <div className='order-item' key={item.id}>
                                             <div className='item-image'>
                                                <img src={item.image} alt={item.name} />
                                             </div>
                                             <div className='item-details'>
                                                <div className='item-name'>{item.name}</div>
                                                <div className='item-meta'>
                                                   <span className='item-price'>${item.price.toFixed(2)}</span>
                                                   <span className='item-quantity'>Qty: {item.quantity}</span>
                                                   {item.sku && <span className='item-sku'>SKU: {item.sku}</span>}
                                                </div>
                                                {item.canReview && (
                                                   <div className='item-actions'>
                                                      {item.hasReviewed ? (
                                                         <span className='reviewed-badge'>
                                                            <FontAwesomeIcon icon={faStar} /> Reviewed
                                                         </span>
                                                      ) : (
                                                         <button className='review-button'>
                                                            <FontAwesomeIcon icon={faStar} /> Write a Review
                                                         </button>
                                                      )}
                                                   </div>
                                                )}
                                             </div>
                                             <div className='item-total'>${(item.price * item.quantity).toFixed(2)}</div>
                                          </div>
                                       ))}
                                    </div>

                                    <div className='order-info-grid'>
                                       <div className='order-info-card'>
                                          <h4>
                                             <FontAwesomeIcon icon={faMapMarkerAlt} /> Shipping Address
                                          </h4>
                                          <div className='address-details'>
                                             <p>{order.shippingAddress.name}</p>
                                             <p>{order.shippingAddress.street}</p>
                                             <p>
                                                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                                             </p>
                                             <p>{order.shippingAddress.country}</p>
                                             {order.shippingAddress.phone && <p>Phone: {order.shippingAddress.phone}</p>}
                                          </div>
                                       </div>

                                       <div className='order-info-card'>
                                          <h4>
                                             <FontAwesomeIcon icon={faCreditCard} /> Payment Information
                                          </h4>
                                          <div className='payment-details-order-history'>
                                             {order.paymentMethod ? (
                                                <div className='payment-method-order-history'>
                                                   <div className='payment-card-icon'>
                                                      <div className={`payment-card-type-${order.paymentMethod.type}`}></div>
                                                   </div>
                                                   <div className='payment-card-info'>
                                                      <div className='payment-card-number'>•••• •••• •••• {order.paymentMethod.last4}</div>
                                                      <div className='payment-card-expiry'>Expires: {order.paymentMethod.expiryDate}</div>
                                                   </div>
                                                </div>
                                             ) : (
                                                <div className='payment-method-order-history payment-method-unavailable'>
                                                   <FontAwesomeIcon icon={faCreditCard} className='payment-unavailable-icon' />
                                                   <span>Payment information not available</span>
                                                </div>
                                             )}
                                             <div className='order-summary-details'>
                                                <div className='summary-row'>
                                                   <span>Subtotal:</span>
                                                   <span>${order.subtotal.toFixed(2)}</span>
                                                </div>
                                                <div className='summary-row'>
                                                   <span>Shipping:</span>
                                                   <span>{order.shipping > 0 ? `$${order.shipping.toFixed(2)}` : "Free"}</span>
                                                </div>
                                                <div className='summary-row'>
                                                   <span>Tax:</span>
                                                   <span>${order.tax.toFixed(2)}</span>
                                                </div>
                                                {order.discount > 0 && (
                                                   <div className='summary-row discount'>
                                                      <span>Discount:</span>
                                                      <span>-${order.discount.toFixed(2)}</span>
                                                   </div>
                                                )}
                                                <div className='summary-row total'>
                                                   <span>Total:</span>
                                                   <span>${order.total.toFixed(2)}</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                       {order.trackingNumber && (
                                          <div className='order-info-card'>
                                             <h4>
                                                <FontAwesomeIcon icon={faTruck} /> Tracking Information
                                             </h4>
                                             <div className='tracking-details'>
                                                <p>
                                                   <strong>Carrier:</strong> {order.carrier}
                                                </p>
                                                <p>
                                                   <strong>Tracking Number:</strong> {order.trackingNumber}
                                                </p>
                                                {order.estimatedDelivery && (
                                                   <p>
                                                      <strong>Estimated Delivery:</strong>{" "}
                                                      {new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
                                                         weekday: "long",
                                                         month: "long",
                                                         day: "numeric",
                                                      })}
                                                   </p>
                                                )}
                                                <a
                                                   href={`https://www.${order.carrier.toLowerCase()}.com/track?tracknum=${
                                                      order.trackingNumber
                                                   }`}
                                                   target='_blank'
                                                   rel='noopener noreferrer'
                                                   className='track-button-order-history'>
                                                   Track Package
                                                </a>
                                             </div>
                                          </div>
                                       )}
                                    </div>

                                    <div className='order-timeline'>
                                       <h4>Order Timeline</h4>
                                       <div className='timeline-container'>
                                          {order.timeline.map((event, index) => (
                                             <div
                                                className={`timeline-item ${index === order.timeline.length - 1 ? "current" : ""}`}
                                                key={index}>
                                                <div className='timeline-icon'>
                                                   {event.status === "Order Placed" && <FontAwesomeIcon icon={faShoppingBag} />}
                                                   {event.status === "Payment Confirmed" && <FontAwesomeIcon icon={faCreditCard} />}
                                                   {event.status === "Processing" && <FontAwesomeIcon icon={faBox} />}
                                                   {event.status === "Shipped" && <FontAwesomeIcon icon={faTruck} />}
                                                   {event.status === "Out for Delivery" && <FontAwesomeIcon icon={faTruck} />}
                                                   {event.status === "Delivered" && <FontAwesomeIcon icon={faCheckCircle} />}
                                                </div>
                                                <div className='timeline-content'>
                                                   <div className='timeline-date'>
                                                      {new Date(event.date).toLocaleDateString("en-US", {
                                                         month: "short",
                                                         day: "numeric",
                                                         year: "numeric",
                                                         hour: "numeric",
                                                         minute: "numeric",
                                                         hour12: true,
                                                      })}
                                                   </div>
                                                   <div className='timeline-status'>{event.status}</div>
                                                   <div className='timeline-description'>{event.description}</div>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>

                                    <div className='order-actions-footer'>
                                       {order.canCancel && (
                                          <button className='cancel-order-button'>
                                             <FontAwesomeIcon icon={faTimes} /> Cancel Order
                                          </button>
                                       )}
                                       {order.canReturn && (
                                          <button className='return-order-button'>
                                             <FontAwesomeIcon icon={faReply} /> Return Items
                                          </button>
                                       )}
                                       <button className='print-order-button'>
                                          <FontAwesomeIcon icon={faPrint} /> Print Order
                                       </button>
                                    </div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className='no-orders-found'>
                        <p>No orders found matching your criteria.</p>
                        {searchTerm || filterStatus !== "all" ? (
                           <button
                              className='clear-filters-button'
                              onClick={() => {
                                 setSearchTerm("");
                                 setFilterStatus("all");
                              }}>
                              Clear Filters
                           </button>
                        ) : null}
                     </div>
                  )}
               </>
            )}
         </div>
      </div>
   );
};

export default OrderHistory;
