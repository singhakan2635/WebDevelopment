import './App.css';
import React, { useState, useEffect } from 'react';
import { endSession, checkSession,createSession, fetchToSendMessage } from './Components/services';
import Login from './Components/Login';
import ChatDetails from'./Components/ChatDetails';
import Error from './Components/Error';
import {errorcode} from './Components/errorcode';


function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false});
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect( () => {
    checkSession()
    .then( (response) => {
      setUserState({
        isLoggedIn: true,
      });
      onLogin("existingUser");
    })
    .catch( (err) => {
      // We treat any failure as not logged in
      setUserState({
        isLoggedIn: false,
      });
      setError(errorcode[err.error] || err.error)
    });
  }, []); // only run on initial render

  
  const onLogin = function(username) 
  {
    createSession(username)
    .then( (userInfo) => {
      setUsers(userInfo.users);
      setMessages(userInfo.messages);
      setError('');
      setUserState({
        isLoggedIn: true,
      });
    })
    .catch( (err) =>
    {
      setError(errorcode[err.error] || err.error)
    })
  };

  const abilityToSendMessage = (message) =>
  {
    fetchToSendMessage(message)
    .then( (userInfo) => {
      setUsers(userInfo.users);
      setMessages(userInfo.messages);
      setError('');
    })
    .catch( (err) => {
      setError(errorcode[err.error] || err.error)
    });
  };

  const logout = () => {
    endSession()
    .then( () => 
    {
      setUserState({
        isLoggedIn: false,
      });
    })
    .catch((err) => 
    {
      setError(errorcode[err.error] || err.error)
    })
  }

  
  let content;

  if(userState.isLoggedIn) {
    content = (
      <ChatDetails users={users} messages={messages} logout={logout} abilityToSendMessage={abilityToSendMessage} />
    )
  } else {
    content = <Login onLogin={onLogin}/>;
  }

  return (
    <div className="app">
      <div>
       <Error error={error} />
      </div>
      {content}
      
    </div>
  );
}

export default App;
