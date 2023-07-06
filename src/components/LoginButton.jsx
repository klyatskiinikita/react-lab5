import React from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onLogin}>Log in</button>
  );
}

export default LoginButton;
