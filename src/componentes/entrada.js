import React, { useContext } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate} from "react-router-dom";
import Loader from "./loader";
import UserContext from "./context";


export default function Entrada() {
  
  const [valor, setValor] = React.useState(0);
  const [descricao, setDescricao] = React.useState("");
  const [load, setLoad] = React.useState(false);

  const {user} = useContext(UserContext);
  
  const axiosURL = 'http://localhost:5000/atividades';
  let navigate = useNavigate();
  
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  function montarobj(){
    setLoad(true);
    const obj = {
      valor, 
      descricao,
      cor: ".verde"
    }
    
    const response = axios.post(axiosURL, obj, config);

    response.catch(err => {
        alert("Algo deu errado, por favor verifique os dados e tente novamente");
        setLoad(false);
    });

    response.then( result => {
        navigate("/wallet");
    });
  }  
  
    return (
      <>
      <Topo>
          <h1>Nova entrada</h1>
      </Topo>
      <Entradas>
          <input placeholder="  Valor" value={valor} onChange={e => setValor(e.target.value)} disabled = {load}/>
          <input placeholder="  Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} disabled = {load}/>
      </Entradas>
      <Botao onClick={montarobj} disabled = {load}>
        {(load) ? <Loader/> : <p>Salvar entrada</p>}
      </Botao>
      </>
    );
  }
  const Topo = styled.header`
   height: 31px;
   width: 326px;
   margin: auto;
   margin-top: 25px; 
   display: flex;
   justify-content: space-between;
   
   h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
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
