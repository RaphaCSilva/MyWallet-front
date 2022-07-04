import React, { useContext } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import Loader from "./loader";
import UserContext from "./context";


export default function Login() {
  
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [load, setLoad] = React.useState(false);

  const {setUser} = useContext(UserContext);
  
  const URL = 'http://localhost:5000/login';
  let navigate = useNavigate();
  
  function montarobj(){
    setLoad(true);
    const obj = {
      email,
      senha
    }

    const response = axios.post(URL, obj);

    response.catch(err => {
        alert("Algo deu errado, por favor verifique os dados e tente novamente");
        setLoad(false);
    });

    response.then( result => {
      const {token, nome} = result.data;
      if(result.status === 200){
        setUser({token, nome});
        navigate("/wallet");
      }
    });
  }  
  
    return (
      <>
      <Titulo>
          <h1>MyWallet</h1>
      </Titulo>
      <Entradas>
          <input placeholder="  E-mail" value={email} onChange={e => setEmail(e.target.value)} disabled = {load}/>
          <input type="password" placeholder="  Senha" value={senha} onChange={e => setSenha(e.target.value)} disabled = {load}/>
      </Entradas>
      <Cadastrar>
      <Botao onClick={montarobj} disabled = {load}>
        {(load) ? <Loader/> : <p>Entrar</p>}
      </Botao>
      <Link to= '/cadastro'>
        <h2>
          Primeira vez? Cadastre-se!
        </h2>
      </Link>
      </Cadastrar>
      </>
    );
  }

  const Titulo = styled.div`
    width: 147px;
    height: 50px;
    margin: auto;
    margin-top: 159px;
    }
    h1{
      font-family: 'Saira Stencil One';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 50px;
      color: #FFFFFF;
    }
  `;
  const Entradas = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input{
      width: 326px;
      height: 58px;
      background: #FFFFFF;
      border: none;
      border-radius: 5px;
      margin: auto;
      margin-bottom: 13px;
    }
  `;

  const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 326px;
  height: 46px;
  background: #A328D6;
  border: none;
  border-radius: 5px;
  margin: auto;

  p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }
`;

const Cadastrar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;    
    margin-top: 36px;
  }
`;