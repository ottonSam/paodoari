import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import api from '../../services/api';

function Login() {

  const history = useHistory();


  async function handleSingUp(email, cpf, telefone, data_de_nascimento, logadouro,
    numero, estado, cidade, usuario, ponto_de_referencia, senha) {

    await api.post('/users', { 
      email, 
      cpf, 
      telefone, 
      data_de_nascimento,
      logadouro, 
      numero, 
      estado, 
      cidade, 
      usuario, 
      ponto_de_referencia, 
      senha
    })
    .then(
      history.push('/login')
    ).catch(function(e){
      alert('Erro ao cadastrar')
    });
  }

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data_de_nascimento, setData_de_nascimento] = useState('');
  const [logadouro, setLogadouro] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [usuario, setUsuario] = useState('');
  const [ponto_de_referencia, setPonto_de_referencia] = useState('');
  const [senha, setSenha] = useState('');
  
  
  return (
    <form>
      <input 
        type="text" 
        value={email}
        onChange= {e => setEmail(e.target.value) } 
        placeholder="Email" 
      />
      <input 
        type="text" 
        value={cpf}
        onChange= {e => setCpf(e.target.value) } 
        placeholder="Cpf" 
      />
      <input 
        type="text" 
        value={telefone}
        onChange= {e => setTelefone(e.target.value) } 
        placeholder="Telefone" 
      />
      <input 
        type="date" 
        value={data_de_nascimento}
        onChange= {e => setData_de_nascimento(e.target.value) } 
        placeholder="data de nascimento" 
      />
      <input 
        type="text" 
        value={logadouro}
        onChange= {e => setLogadouro(e.target.value) } 
        placeholder="Logadouro" 
      />
      <input 
        type="text" 
        value={numero}
        onChange= {e => setNumero(e.target.value) } 
        placeholder="Numero" 
      />
      <input 
        type="text" 
        value={estado}
        onChange= {e => setEstado(e.target.value) } 
        placeholder="Estado" 
      />
      <input 
        type="text" 
        value={cidade}
        onChange= {e => setCidade(e.target.value) } 
        placeholder="Cidade" 
      />
      <input 
        type="text" 
        value={usuario}
        onChange= {e => setUsuario(e.target.value) } 
        placeholder="Usuario" 
      />
      <input 
        type="text" 
        value={ponto_de_referencia}
        onChange= {e => setPonto_de_referencia(e.target.value) } 
        placeholder="Ponto de referencia" 
      />
      <input 
        type="password" 
        value={senha}
        onChange= {e => setSenha(e.target.value) } 
        placeholder="Password" 
      />
      <button 
        type="button" 
        onClick={_ => handleSingUp(
          email, 
          cpf, 
          telefone, 
          data_de_nascimento,
          logadouro, 
          numero, 
          estado, 
          cidade, 
          usuario, 
          ponto_de_referencia, 
          senha
        )}>
        Entrar
      </button>
    </form>
  ); 
  
}

export default Login;