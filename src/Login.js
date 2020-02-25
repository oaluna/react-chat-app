import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Build On This</h1>
      <div className="Login__button" onClick={() => login('oscar', 'bob')}>
        Log in as <b>Oscar</b>
      </div>
      <div className="Login__button" onClick={() => login('bob', 'oscar')}>
        Log in as <b>Bob</b>
      </div>
    </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
