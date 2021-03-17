import React from 'react';
import { useHistory } from "react-router-dom";

function Logout() {

  const history = useHistory();

  function handleLogout() {

    localStorage.removeItem('token');
    history.push('/login');
    
  }

  return (
    <form>
      <button 
        type="button" 
        onClick={_ => handleLogout()}>
        Sair
      </button>
    </form>
  ); 
  
}

export default Logout;