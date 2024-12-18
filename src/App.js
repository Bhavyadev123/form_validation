import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import withLazyLoad from './components/Lazyload'; // Import the lazy loading function
import Loader from './components/Loader'; // Import your loader component
import './App.css';

// Lazily load the RegisterForm component using withLazyLoad
const RegisterForm = withLazyLoad(() => import('./components/RegisterForm'));

const App = () => {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  // Handle starting the registration process
  const handleStart = () => {
    setLoading(true); // Show loader for 2 seconds
    setTimeout(() => {
      setLoading(false);
      setStarted(true); // Start the form after 2 seconds
    }, 2000);
  };

  // Handle form submission
  const handleSubmit = () => {
    setLoading(true); // Show loader for 2 seconds
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true); // Show Thank You page after 2 seconds
    }, 2000);
  };

  return (
    <div className="app">
      {/* Show the welcome page if not started */}
      {!started && !loading && <WelcomePage onStart={handleStart} />}

      {/* Show loader if loading is true */}
      {loading && <Loader />}

      {/* Show the lazily-loaded RegisterForm if started and not submitted */}
      {started && !submitted && !loading && (
        <RegisterForm onSubmit={handleSubmit} />
      )}

      {/* Show Thank You page after form submission */}
      {submitted && !loading && (
        <div className="thank-you">
          <h1>Thank You! You have successfully registered.</h1>
        </div>
      )}
    </div>
  );
};

export default App;
