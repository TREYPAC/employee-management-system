import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';

// Home Component
function Home() {
  return <h1>Welcome to Treys React App!</h1>;
}

// About Component
function About() {
  return <h1>About This App</h1>;
}

// App Component
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/employee-form">Employee Form</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
