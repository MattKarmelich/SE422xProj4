import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [failedAttempt, setFailedAttempt] = useState(false);

    let navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    const createAccount = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let success = username.length && password.length;
        setFailedAttempt(!success)
        if (success) handleBack();
      };

    return (
        <div>
            <h1>New Account</h1>
            <form onSubmit={createAccount}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Create Account</button>
            </form>
            <p>{failedAttempt && <>Please enter a valid username and password</>}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default Register;