import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ChuckNorris from './ChuckNorris';
import Logout from './Logout';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="App">
      {!token ? (
        <LoginForm setToken={setToken} />
      ) : (
        <>
          <ChuckNorris token={token} />
          <Logout onLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;
