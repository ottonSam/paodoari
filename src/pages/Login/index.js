import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import { Form, Container } from './styles';

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
    <Container>
      <Form>
      <p>Faça seu <span>Login!</span></p>
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
      <Link to='/singup' >Criar uma conta</Link>
      </Form>
    </Container>
  ); 
  
}

export default Login;