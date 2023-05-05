import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onEnter: (success: boolean, account: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onEnter }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedAttempt, setFailedAttempt] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let success = true;
    setFailedAttempt(!success)
    onEnter(success, username);
  };

  const handleVisitor = () => {
    onEnter(true, "");
  };

  const handleNewAccount = () => {
    navigate("/register")
  };

  return (
    <div >
      <h1>Welcome</h1>
    <form onSubmit={handleLogin}>
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
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      &nbsp;
      <button type="submit">Log In</button>
    </form>
    <p>{failedAttempt && <>Log In Attempt Failed!</>}</p>
    <p> <button onClick={handleNewAccount}>Register</button> &nbsp; <button onClick={handleVisitor}>Enter as Visitor</button></p>
    </div>
  );
};

export default LoginPage;