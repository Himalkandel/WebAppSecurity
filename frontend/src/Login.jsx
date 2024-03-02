import React from 'react';

function Login({ setToken }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
			const response = await fetch('http://localhost:3000', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});
			

            if (!response.ok) {
                throw new Error(`Login failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Assuming the backend sends the token under a property named 'token'
            setToken(data.token);

        } catch (error) {
            console.error('Login error:', error);
            // Here you might want to show an error message to the user
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input id='username' name='username' type='text' required />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' name='password' type='password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
