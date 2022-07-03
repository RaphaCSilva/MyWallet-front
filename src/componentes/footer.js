import React, { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import UserContext from "./context";

export default function Footer() {

  const {progress} = useContext(UserContext);

    return(
      <>
      <Barrainferior>
        <Link to={"/habitos"}>
          <h1> Habitos </h1>
        </Link>
        <div className="circulo">
          <Link to={"/hoje"}>
            <CircularProgressbarWithChildren
              value = {progress}
              background
              backgroundPadding={6} 
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor:  "#FFFFFF",
                pathColor: "#FFFFFF",
                trailColor: "transparent"
              })}        
            >
              <Text>
                Hoje
              </Text>  
            </CircularProgressbarWithChildren>
          </Link>
        </div>
        <Link to={"/historico"}>
          <h1> Histórico </h1>
        </Link>
      </Barrainferior>
      </>
    );
}

const Barrainferior = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  left: 0px;
  bottom: 0px;
  background: #FFFFFF;
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
  }
  .circulo {
    width: 91px;
    height: 91px;
    margin-bottom: 41px;
  }
`;
const Text = styled.div`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
`;