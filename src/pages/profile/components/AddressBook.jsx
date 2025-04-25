import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMapMarkerAlt,
   faPlus,
   faEdit,
   faTrash,
   faStar,
   faTimes,
   faSave,
   faHome,
   faBriefcase,
   faBuilding,
   faCheckCircle,
   faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileComponents.css";
import "./AddressBookStyles.css";

const AddressBook = ({ isGuest }) => {
   const [addresses, setAddresses] = useState(
      isGuest
         ? []
         : [
              {
                 id: 1,
                 name: "Home",
                 firstName: "Sarah",
                 lastName: "Johnson",
                 street: "123 Crystal Way",
                 city: "Sedona",
                 state: "AZ",
                 zip: "86336",
                 country: "United States",
                 phone: "(555) 123-4567",
                 isDefault: true,
                 addressType: "home",
              },
              {
                 id: 2,
                 name: "Work",
                 firstName: "Sarah",
                 lastName: "Johnson",
                 street: "456 Office Plaza, Suite 200",
                 city: "Phoenix",
                 state: "AZ",
                 zip: "85001",
                 country: "United States",
                 phone: "(555) 987-6543",
                 isDefault: false,
                 addressType: "work",
              },
              {
                 id: 3,
                 name: "Parents",
                 firstName: "Robert & Mary",
                 lastName: "Johnson",
                 street: "789 Family Lane",
                 city: "Tucson",
                 state: "AZ",
                 zip: "85701",
                 country: "United States",
                 phone: "(555) 234-5678",
                 isDefault: false,
                 addressType: "other",
              },
           ],
   );

   const [showAddForm, setShowAddForm] = useState(false);
   const [editingAddress, setEditingAddress] = useState(null);
   const [formData, setFormData] = useState({
      name: "",
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      phone: "",
      isDefault: false,
      addressType: "home", // new field for address type (home, work, other)
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
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

      // Validate required fields
      const requiredFields = ["name", "firstName", "lastName", "street", "city", "state", "zip", "country"];
      requiredFields.forEach((field) => {
         if (!formData[field]) {
            newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} is required`;
         }
      });

      // Validate zip code format (simple validation for demo)
      if (formData.zip && !/^\d{5}(-\d{4})?$/.test(formData.zip)) {
         newErrors.zip = "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)";
      }

      // Validate phone format (simple validation for demo)
      if (formData.phone && !/^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/.test(formData.phone)) {
         newErrors.phone = "Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         setIsSubmitting(true);

         // Simulate API call to add/update address
         setTimeout(() => {
            if (editingAddress) {
               // Update existing address
               const updatedAddresses = addresses.map((addr) => {
                  if (addr.id === editingAddress.id) {
                     return { ...formData, id: addr.id };
                  }
                  // If new address is default, update other addresses
                  if (formData.isDefault && addr.id !== editingAddress.id) {
                     return { ...addr, isDefault: false };
                  }
                  return addr;
               });

               setAddresses(updatedAddresses);
            } else {
               // Add new address
               const newAddress = {
                  ...formData,
                  id: Date.now(),
               };

               // If new address is default, update other addresses
               let updatedAddresses = [...addresses];
               if (formData.isDefault) {
                  updatedAddresses = updatedAddresses.map((addr) => ({
                     ...addr,
                     isDefault: false,
                  }));
               }

               setAddresses([...updatedAddresses, newAddress]);
            }

            // Reset form
            setFormData({
               name: "",
               firstName: "",
               lastName: "",
               street: "",
               city: "",
               state: "",
               zip: "",
               country: "United States",
               phone: "",
               isDefault: false,
               addressType: "home",
            });

            setShowAddForm(false);
            setEditingAddress(null);
            setIsSubmitting(false);
         }, 1500);
      }
   };

   const handleEdit = (address) => {
      setFormData({ ...address });
      setEditingAddress(address);
      setShowAddForm(true);
      setErrors({});
   };

   const handleCancel = () => {
      setShowAddForm(false);
      setEditingAddress(null);
      setFormData({
         name: "",
         firstName: "",
         lastName: "",
         street: "",
         city: "",
         state: "",
         zip: "",
         country: "United States",
         phone: "",
         isDefault: false,
         addressType: "home",
      });
      setErrors({});
   };

   const handleSetDefault = (id) => {
      setAddresses(
         addresses.map((addr) => ({
            ...addr,
            isDefault: addr.id === id,
         })),
      );
   };

   const handleDelete = (id) => {
      const addressToDelete = addresses.find((addr) => addr.id === id);

      // If deleting default address, show alert
      if (addressToDelete.isDefault && addresses.length > 1) {
         alert("Please set another address as default before deleting this one.");
         return;
      }

      // Confirm deletion
      if (window.confirm("Are you sure you want to delete this address?")) {
         setAddresses(addresses.filter((addr) => addr.id !== id));
      }
   };

   // US states for dropdown
   const usStates = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
   ];

   return (
      <div className='address-book'>
         <div className='profile-section'>
            <div className='profile-section-header'>
               <h2>Address Book</h2>
               {!isGuest && !showAddForm && (
                  <button className='action-button' onClick={() => setShowAddForm(true)}>
                     <FontAwesomeIcon icon={faPlus} />
                     <span>Add New Address</span>
                  </button>
               )}
            </div>

            {isGuest ? (
               <div className='empty-state'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <h3>No Saved Addresses</h3>
                  <p>You're currently browsing as a guest. Sign in or create an account to save addresses.</p>
                  <a href='/signin' className='action-button'>
                     Sign In
                  </a>
               </div>
            ) : (
               <>
                  {showAddForm ? (
                     <div className='add-address-form-overlay'>
                        <div className='add-address-form-container'>
                           <div className='add-address-form-header'>
                              <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
                              <button className='close-form-button' onClick={handleCancel} aria-label='Close form'>
                                 <FontAwesomeIcon icon={faTimes} />
                              </button>
                           </div>
                           <div className='add-address-form-content'>
                              <form className='address-form' onSubmit={handleSubmit}>
                                 <div className='form-row'>
                                    <div className='form-group'>
                                       <label htmlFor='name'>Address Nickname</label>
                                       <input
                                          type='text'
                                          id='name'
                                          name='name'
                                          placeholder='Home, Work, etc.'
                                          value={formData.name}
                                          onChange={handleInputChange}
                                          className={errors.name ? "error" : ""}
                                       />
                                       {errors.name && <div className='error-message'>{errors.name}</div>}
                                    </div>

                                    <div className='form-group'>
                                       <label htmlFor='addressType'>Address Type</label>
                                       <select
                                          id='addressType'
                                          name='addressType'
                                          value={formData.addressType}
                                          onChange={handleInputChange}>
                                          <option value='home'>Home</option>
                                          <option value='work'>Work</option>
                                          <option value='other'>Other</option>
                                       </select>
                                    </div>
                                 </div>

                                 <div className='form-row'>
                                    <div className='form-group'>
                                       <label htmlFor='firstName'>First Name</label>
                                       <input
                                          type='text'
                                          id='firstName'
                                          name='firstName'
                                          value={formData.firstName}
                                          onChange={handleInputChange}
                                          className={errors.firstName ? "error" : ""}
                                       />
                                       {errors.firstName && <div className='error-message'>{errors.firstName}</div>}
                                    </div>

                                    <div className='form-group'>
                                       <label htmlFor='lastName'>Last Name</label>
                                       <input
                                          type='text'
                                          id='lastName'
                                          name='lastName'
                                          value={formData.lastName}
                                          onChange={handleInputChange}
                                          className={errors.lastName ? "error" : ""}
                                       />
                                       {errors.lastName && <div className='error-message'>{errors.lastName}</div>}
                                    </div>
                                 </div>

                                 <div className='form-group'>
                                    <label htmlFor='street'>Street Address</label>
                                    <input
                                       type='text'
                                       id='street'
                                       name='street'
                                       value={formData.street}
                                       onChange={handleInputChange}
                                       className={errors.street ? "error" : ""}
                                    />
                                    {errors.street && <div className='error-message'>{errors.street}</div>}
                                 </div>

                                 <div className='form-row'>
                                    <div className='form-group'>
                                       <label htmlFor='city'>City</label>
                                       <input
                                          type='text'
                                          id='city'
                                          name='city'
                                          value={formData.city}
                                          onChange={handleInputChange}
                                          className={errors.city ? "error" : ""}
                                       />
                                       {errors.city && <div className='error-message'>{errors.city}</div>}
                                    </div>

                                    <div className='form-group'>
                                       <label htmlFor='state'>State</label>
                                       <select
                                          id='state'
                                          name='state'
                                          value={formData.state}
                                          onChange={handleInputChange}
                                          className={errors.state ? "error" : ""}>
                                          <option value=''>Select State</option>
                                          {usStates.map((state) => (
                                             <option key={state} value={state}>
                                                {state}
                                             </option>
                                          ))}
                                       </select>
                                       {errors.state && <div className='error-message'>{errors.state}</div>}
                                    </div>
                                 </div>

                                 <div className='form-row'>
                                    <div className='form-group'>
                                       <label htmlFor='zip'>ZIP Code</label>
                                       <input
                                          type='text'
                                          id='zip'
                                          name='zip'
                                          value={formData.zip}
                                          onChange={handleInputChange}
                                          className={errors.zip ? "error" : ""}
                                       />
                                       {errors.zip && <div className='error-message'>{errors.zip}</div>}
                                    </div>

                                    <div className='form-group'>
                                       <label htmlFor='country'>Country</label>
                                       <select
                                          id='country'
                                          name='country'
                                          value={formData.country}
                                          onChange={handleInputChange}
                                          className={errors.country ? "error" : ""}>
                                          <option value='United States'>United States</option>
                                          <option value='Canada'>Canada</option>
                                          <option value='Mexico'>Mexico</option>
                                          {/* Add more countries as needed */}
                                       </select>
                                       {errors.country && <div className='error-message'>{errors.country}</div>}
                                    </div>
                                 </div>

                                 <div className='form-group'>
                                    <label htmlFor='phone'>Phone Number (optional)</label>
                                    <input
                                       type='tel'
                                       id='phone'
                                       name='phone'
                                       placeholder='(123) 456-7890'
                                       value={formData.phone}
                                       onChange={handleInputChange}
                                       className={errors.phone ? "error" : ""}
                                    />
                                    {errors.phone && <div className='error-message'>{errors.phone}</div>}
                                 </div>

                                 <div className='form-group checkbox-group'>
                                    <label className='checkbox-label'>
                                       <input type='checkbox' name='isDefault' checked={formData.isDefault} onChange={handleInputChange} />
                                       <span>Make this my default address</span>
                                    </label>
                                 </div>

                                 <div className='form-actions'>
                                    <button type='button' className='cancel-button' onClick={handleCancel}>
                                       <FontAwesomeIcon icon={faTimes} />
                                       <span>Cancel</span>
                                    </button>

                                    <button type='submit' className='save-button' disabled={isSubmitting}>
                                       {isSubmitting ? (
                                          <>
                                             <div className='button-spinner'></div>
                                             <span>{editingAddress ? "Updating..." : "Adding..."}</span>
                                          </>
                                       ) : (
                                          <>
                                             <FontAwesomeIcon icon={faSave} />
                                             <span>{editingAddress ? "Update Address" : "Add Address"}</span>
                                          </>
                                       )}
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <>
                        {addresses.length > 0 ? (
                           <div className='addresses-grid'>
                              {addresses.map((address) => (
                                 <div className={`address-card ${address.isDefault ? "default" : ""}`} key={address.id}>
                                    <div className='address-header'>
                                       <div className='address-name'>
                                          <div className={`address-type-${address.addressType}`}>{address.name}</div>
                                          {address.isDefault && <span className='default-badge'>Default</span>}
                                       </div>

                                       <div className='address-actions'>
                                          {!address.isDefault && (
                                             <button
                                                className='set-default-button'
                                                onClick={() => handleSetDefault(address.id)}
                                                title='Set as Default'>
                                                <FontAwesomeIcon icon={faStar} />
                                             </button>
                                          )}

                                          <button className='edit-button' onClick={() => handleEdit(address)} title='Edit'>
                                             <FontAwesomeIcon icon={faEdit} />
                                          </button>

                                          <button className='delete-button' onClick={() => handleDelete(address.id)} title='Delete'>
                                             <FontAwesomeIcon icon={faTrash} />
                                          </button>
                                       </div>
                                    </div>

                                    <div className='address-content'>
                                       <div className='address-recipient'>
                                          <div className='address-type-icon'>
                                             <FontAwesomeIcon
                                                icon={
                                                   address.addressType === "home"
                                                      ? faHome
                                                      : address.addressType === "work"
                                                      ? faBriefcase
                                                      : faBuilding
                                                }
                                             />
                                          </div>
                                          {address.firstName} {address.lastName}
                                       </div>
                                       <div className='address-details'>
                                          <p>{address.street}</p>
                                          <p>
                                             {address.city}, {address.state} {address.zip}
                                          </p>
                                          <p>{address.country}</p>
                                          {address.phone && <p>Phone: {address.phone}</p>}
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <div className='empty-state'>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                              <h3>No Saved Addresses</h3>
                              <p>You haven't added any addresses yet.</p>
                              <button className='action-button' onClick={() => setShowAddForm(true)}>
                                 <FontAwesomeIcon icon={faPlus} />
                                 <span>Add New Address</span>
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

export default AddressBook;
