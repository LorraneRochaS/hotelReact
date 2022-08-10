import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Indications from "./pages/Indications/Indications";
import Room from "./pages/Room/Room";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";

/*
PROPS
img = imagem
title = titulo
date = data
descr = descriçao
price = preço */

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/quartos" element={<Indications />} />
        {/* Rota para levar em quartos por quantidade de hóspedes */}
        <Route path="/quartos/:tipo" element={<Room />} />
        <Route path='/quarto/:ID_QUARTO' element={<Room />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/perfil/:ID_HOSPEDE' element={<User/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;