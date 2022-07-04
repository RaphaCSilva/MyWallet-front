import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import Loader from "./loader";


export default function Wallet() {
  
  const user = "Fulano";


    return (
      <>
        <Topo>
            <h1>
                Olá, {user}
            </h1>
            <Link to= '/'>
                <h1>
                    A
                </h1>
            </Link> 
        </Topo>
        <Extrato>
            <ul>
                <li>
                    <p>
                        <span> 30/11 </span><span> Almoço </span> <span className = 'vermelho'> 59.00 </span>
                    </p>
                </li>
                <li>
                    <p>
                        <span> 30/11 </span><span> Almoço </span> <span className = 'verde'> 59.00 </span>
                    </p>
                </li>
                <li>
                    <p>
                        <span> 30/11 </span><span> Almoço </span> <span className = 'verde'> 59.00 </span>
                    </p>
                </li>
                <li>
                    <p>
                        <span> 30/11 </span><span> Almoço </span> <span className = 'verde'> 59.00 </span>
                    </p>
                </li>
              
            </ul>
        </Extrato>
        <Botoes>
            <NovaEntrada>
                <p>
                    Nova entrada 
                </p>
            </NovaEntrada>
            <NovaSaida>
                <p>
                    Nova saída
                </p>
            </NovaSaida>
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