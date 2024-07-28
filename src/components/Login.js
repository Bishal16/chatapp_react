import React, { useState } from 'react';
import './css/Login.css';
import {getUserById,} from "../api/api";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await getUserById(username);
            const user = response.data;
            console.log(JSON.stringify(user));
            if (user.password === password) {
                onLogin({ username: user.username, phoneNumber: user.phoneNumber }); // Pass the user ID along with the username
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Error logging in');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 122.88 106.91">
                    <title>speech-bubble</title>
                    <path
                        d="M56,92.15a38.3,38.3,0,0,0,11.23,5.78c8.41,2.66,17.75,2.25,27.12-1.74a2.72,2.72,0,0,1,2-.08l12,4L107,90.36a2.78,2.78,0,0,1,1-2.53,28.41,28.41,0,0,0,6.31-6.8,17.53,17.53,0,0,0,2.73-12.47,27,27,0,0,0-6-12.5c-.6-.76-1.25-1.5-1.92-2.23h0a42.62,42.62,0,0,0,1.27-6.59,50,50,0,0,1,5,5.34,32.71,32.71,0,0,1,7.14,15.14A23,23,0,0,1,119.05,84a32.7,32.7,0,0,1-6.29,7.12l1.61,12.4a2.79,2.79,0,0,1-3.6,3.21l-15.24-5a43.85,43.85,0,0,1-30,1.53A45,45,0,0,1,47.47,92.16c.65,0,1.33.06,2.06.09,2.18.06,4.34,0,6.46-.1ZM72.11,35.22a6.39,6.39,0,1,1-6.38,6.39,6.39,6.39,0,0,1,6.38-6.39Zm-42.18,0a6.39,6.39,0,1,1-6.38,6.39,6.39,6.39,0,0,1,6.38-6.39Zm21.09,0a6.39,6.39,0,1,1-6.38,6.39A6.38,6.38,0,0,1,51,35.22ZM52.3,0h.05C66.29.46,78.79,5.42,87.74,13.09,96.89,20.93,102.37,31.6,102,43.26v0c-.36,11.66-6.48,22-16.1,29.3-9.41,7.14-22.22,11.36-36.16,11A62.05,62.05,0,0,1,38.5,82.2a58.64,58.64,0,0,1-9.43-2.87l-22.83,9,7.65-18.19a42.35,42.35,0,0,1-10-12.73A35.22,35.22,0,0,1,0,40.3C.37,28.63,6.49,18.28,16.11,11,25.53,3.83,38.33-.38,52.28,0Zm-.17,6.35h-.05C39.62,6,28.25,9.74,19.94,16,11.83,22.2,6.66,30.83,6.37,40.47A29.15,29.15,0,0,0,9.56,54.53,36.92,36.92,0,0,0,19.7,66.69l1.89,1.51-3.65,8.67,11.21-4.41,1.2.51a52.07,52.07,0,0,0,9.47,3A57,57,0,0,0,49.94,77.2c12.47.36,23.85-3.36,32.16-9.66,8.11-6.16,13.28-14.79,13.57-24.43v0C96,33.44,91.32,24.54,83.6,17.92c-7.91-6.78-19-11.16-31.45-11.54Z"
                        fill="#FFFFFFFF"
                    />
                </svg>
            </div>

            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
