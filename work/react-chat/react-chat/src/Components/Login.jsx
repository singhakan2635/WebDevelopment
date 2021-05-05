import { useState } from 'react';

const Login = function({ onLogin }) {
  // We store the name-in-progress locally in this component state
  const [username, setUsername] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (e) => {
    // setStatus('');
    setUsername(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const handleClick = (e) => {
    onLogin(username);
  }

  return (
    <div className="login-container">
      <h1>ChatRoom</h1>
      <label>
        Username<br></br>
        <input onChange={onChange} value={username} />
      </label>
      <br></br>
      <button onClick={handleClick} disabled={isDisabled} >Login</button>
    </div>
  );
};
export default Login;
