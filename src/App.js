import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
      return;
    }

    

    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        
        {error && <p className="error">{error}</p>}

        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

