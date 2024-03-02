import React, { useState } from 'react';
import './App.css';
import Login from './Login';
// Uncomment these once you're ready to use them
// import Fact from './Fact';
// import Logout from './Logout';

function App() {
    const [token, setToken] = useState(null);

    return (
        <div className="app">
            {!token ? (
                <Login setToken={setToken} />
            ) : (
                <>
                    {/* Uncomment and use Fact component when it's ready */}
                    {/* <Fact token={token} /> */}
                    {/* <Logout /> */}
                </>
            )}
        </div>
    );
}

export default App;
