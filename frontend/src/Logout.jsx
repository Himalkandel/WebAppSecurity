import React from 'react';

function Logout({ onLogout }) {
    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3333/logout', {
                method: 'POST',
                headers: {
                },
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

            // If logout was successful, call onLogout to update the parent component's state
            onLogout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
