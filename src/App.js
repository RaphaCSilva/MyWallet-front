import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Login from "./componentes/login"
import Cadastro from "./componentes/cadastro"
import Wallet from "./componentes/wallet";
import UserContext from "./componentes/context";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value = {{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
