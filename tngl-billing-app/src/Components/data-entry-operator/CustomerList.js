import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer data from the JSON server on component mount
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        // Handle error, e.g., show an error message to the user
      }
    };

    fetchCustomers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleCustomerClick = (customerId) => {
    // Set the selected customer when clicked
    setSelectedCustomer(customerId);
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} onClick={() => handleCustomerClick(customer.id)}>
            {customer.name} - {customer.customerNumber}
          </li>
        ))}
      </ul>

      {selectedCustomer && (
        <div>
          <h3>Customer Details</h3>
          <p>ID: {selectedCustomer}</p>
          {/* Display other customer information here */}
          {customers
            .filter((customer) => customer.id === selectedCustomer)
            .map((customer) => (
              <div key={customer.id}>
                <p>Name: {customer.name}</p>
                <p>Address: {customer.address}</p>
                <p>Customer Number: {customer.customerNumber}</p>
                <p>Meter Serial Number: {customer.meterSerialNumber}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;
