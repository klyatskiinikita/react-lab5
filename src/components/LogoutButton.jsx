import React from 'react';

function LogoutButton(props) {
  return (
    <button onClick={props.onLogout}>Log out</button>
  );
}

export default LogoutButton;
