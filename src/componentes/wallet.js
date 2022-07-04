import React, { useContext, useEffect, useState } from "react";
import UserContext from "./context";
import axios from 'axios';
import styled from 'styled-components';
import {Link} from "react-router-dom";


export default function Wallet() {
    
    const {user} = useContext(UserContext);
    const [atividades, setAtividades] = useState([]);

    const axiosURL = "http://localhost:5000/atividades";
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    useEffect(() => {
        const promise = axios.get(axiosURL, config );
        promise.then((res) => {
            setAtividades(res.data);
        }); 
    }, []);

    return (
      <>
        <Topo>
            <h1>
                Olá, {user.nome}
            </h1>
            <Link to= '/'>
                <h1>
                    A
                </h1>
            </Link> 
        </Topo>
        <Extrato>
            <ul>
                {(atividades.length !== 0)? atividades.map((atividade, index) => 
                <p key = {index}>
                   <span> {atividade.data} </span><span> {atividade.descricao} </span> <span className = {atividade.cor}> {atividade.valor} </span>
                </p>): <h2> Não há registros de entrada ou saída </h2>}
            </ul>
        </Extrato>
        <Botoes>
            <Link to = '/entrada'>
                <NovaEntrada>
                    <p>
                        Nova entrada 
                    </p>
                </NovaEntrada>
            </Link>
            <Link to = '/saida'>
                <NovaSaida>
                    <p>
                        Nova saída
                    </p>
                </NovaSaida>
            </Link>
        </Botoes>
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
 const Extrato = styled.div`
   width: 326px;
   height: 446px;
   left: 25px;
   top: 78px;
   background: #FFFFFF;
   border-radius: 5px;
   margin: auto;
   margin-top: 22px;
   overflow-y: scroll;

   h2 { 
    width: 180px;
    height: 46px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    margin: auto;
    margin-top: 180px;
   }
   
   ul{
        padding-top: 23px;
        padding-left: 12px;
        
        li{
            margin-bottom: 13px;
            p{
                display: flex;
                justify-content: space-between;

                span:nth-child(1){
                    font-family: 'Raleway';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #C6C6C6;
                }
                span:nth-child(2){
                    font-family: 'Raleway';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #000000;
    
                }
                span:nth-child(3){
                    font-family: 'Raleway';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: right;
                    margin-right: 11px;
                }
                .verde{
                    color: #03AC00;
                }
                .vermelho{
                    color: #C70000;
                }
            }
        }
   }
 `;

 const Botoes = styled.div`
    width: 326px;
    margin: auto;
    margin-top: 13px; 
    display: flex;
    justify-content: space-between;
 `;
 const NovaEntrada = styled.button`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    display: flex;

    p{
        width: 64px;
        height: 40px;
        margin-left: 6px;
        margin-top: 65px;
        
        text-align: left;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
 `;
 const NovaSaida = styled.button`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;

    p{
        width: 44px;
        height: 40px;
        margin-left: 6px;
        margin-top: 61px;

        text-align: left;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
 `;