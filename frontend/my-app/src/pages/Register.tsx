import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userEP from '../endpoints/userEP'

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const [taken, setTaken] = useState(false);
    const [unexpected, setUnexpected] = useState(false);


    let navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    const createAccount = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = username.length && password.length;
        setValid(!valid)
        if (valid) {
            const result = await userEP(username, password, "register");

            console.log(result)
            
            setTaken(result === -1);
            setUnexpected(result === -2);
            if(result === 1) handleBack();
        }
      };

    return (
        <div>
            <h1>New Account</h1>
            <form onSubmit={createAccount}>
                <label htmlFor="username">Username:</label>
                &nbsp;
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                &nbsp;
                <label htmlFor="password">Password:</label>
                &nbsp;
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                &nbsp;
                <button type="submit">Create Account</button>
            </form>
            <p>{valid && <>Please enter a valid username and password</>}</p>
            <p>{taken && <>Sorry, this username is already taken</>}</p>
            <p>{unexpected && <>Unexpected error</>}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default Register;