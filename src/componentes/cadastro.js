import React, {useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import Loader from "./loader";


export default function Cadastro() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [load, setLoad] = useState(false);
  
  let navigate = useNavigate();

  function montarobj(){
    setLoad(true);
    const obj = {
      nome,
      email,
      senha,
      confirma
    }
    const URL = 'http://localhost:5000/cadastro';
    if(confirma === senha){
      const response = axios.post(URL, obj);
      console.log(obj);
      response.catch(err => {
        alert("Algo deu errado, por favor verifique os dados e tente novamente");
        console.log(err);
        setLoad(false);
      });
      response.then( result => {
        if(result.status === 201){
          navigate("/");
        }
      });
    }
  }
    return (
      <>
      <Titulo>
          <h1>MyWallet</h1>
      </Titulo>
      <Entradas>
          <input placeholder="  nome" value={nome} onChange={e => setNome(e.target.value)} disabled = {load}/>
          <input placeholder="  email" value={email} onChange={e => setEmail(e.target.value)} disabled = {load}/>
          <input  type="password" placeholder="  senha" value={senha} onChange={e => setSenha(e.target.value)} disabled = {load}/>
          <input  type="password" placeholder="  confirme a senha" value={confirma} onChange={e => setConfirma(e.target.value)} disabled = {load}/>
      </Entradas>
      <Cadastrar>
      <Botao onClick={montarobj} disabled = {load}>
        {(load) ? <Loader/> : <p>Cadastrar</p>}
      </Botao>
      <Link to= '/'>
        <h2>
          Já tem uma conta? Entre agora!
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
    margin-top: 95px;
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
    margin-top: 28px;

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