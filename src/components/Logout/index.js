import React from 'react';
import { useHistory, Link } from "react-router-dom";

function Logout() {

  const history = useHistory();

  function handleLogout() {

    localStorage.removeItem('token');
    history.push('/login');
    
  }

  return (
      <Link
        onClick={_ => handleLogout()}>
        Sair
      </Link>
  ); 
  
}

export default Logout;