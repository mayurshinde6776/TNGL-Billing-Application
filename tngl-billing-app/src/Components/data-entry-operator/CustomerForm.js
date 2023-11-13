import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ onAddCustomer }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    address: '',
    customerNumber: '',
    meterSerialNumber: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/customers', customerData);
      const newCustomer = response.data;
      onAddCustomer(newCustomer);
      setCustomerData({
        name: '',
        address: '',
        customerNumber: '',
        meterSerialNumber: '',
      });

      // Show success message
      setSuccessMessage('Customer added successfully');

      // Clear success message after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setSuccessMessage(null);
        // Reset the formSubmitted state to allow showing the form again
        setFormSubmitted(false);
      }, 3000);

      // Set formSubmitted to true to conditionally render the success message
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={customerData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
  
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={customerData.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
  
          <label>
            Customer Number:
            <input
              type="text"
              name="customerNumber"
              value={customerData.customerNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
  
          <label>
            Meter Serial Number:
            <input
              type="text"
              name="meterSerialNumber"
              value={customerData.meterSerialNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
  
          <button type="submit">Add Customer</button>
        </form>
      )}
  
  <p style={{ color: 'green', fontSize: '1.5em' }}>{successMessage}</p>
    
    </div>
  );
  
};

export default CustomerForm;
