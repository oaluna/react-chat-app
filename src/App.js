import React from 'react';
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from "@pusher/chatkit-client-react"
import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import chatkitLogo from './chatkit-logo.svg';
 
const instanceLocator = "v1:us1:3c2bc2d2-4ff2-42d4-aa04-0eaffdf52046"
const userId = "user"
 
const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3c2bc2d2-4ff2-42d4-aa04-0eaffdf52046/token",
})


function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <UserList userId={userId} />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={chatkitLogo}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}

export default App;
