import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";


import api from '../../services/api';

function Login() {

  const history = useHistory();


  async function handleLogin(email, senha) {

    const data  = await api.post('/auth', { email, senha });
    const token = data.data;

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    history.push('/');
    
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  
  return (
    <div>
      <form>
        <input 
          type="text" 
          value={email}
          onChange= {e => setEmail(e.target.value) } 
          placeholder="Email" 
        />
        <input 
          type="password" 
          value={senha}
          onChange= {e => setSenha(e.target.value) } 
          placeholder="Password" 
        />
        <button 
          type="button" 
          onClick={_ => handleLogin(email,senha)}>
          Entrar
        </button>
      </form>
      <Link to='/singup' >Criar uma conta</Link>
    </div>
  ); 
  
}

export default Login;