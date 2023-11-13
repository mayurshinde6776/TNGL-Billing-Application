import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomerForm from './Components/data-entry-operator/CustomerForm';
import CustomerList from './Components/data-entry-operator/CustomerList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define the onAddCustomer function
  const onAddCustomer = (newCustomer) => {
    // Logic to handle adding a new customer
    console.log('Adding customer:', newCustomer);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              TNGL Billing App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/customer-form">
                    Customer Form
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customer-list">
                    Customer List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            {/* Pass onAddCustomer as a prop to CustomerForm */}
            <Route path="/customer-form" element={<CustomerForm onAddCustomer={onAddCustomer} />} />
            <Route path="/customer-list" element={<CustomerList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
