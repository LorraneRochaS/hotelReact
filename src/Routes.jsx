import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Home from "./assets/pages/Home/Home";
import Indications from "./assets/pages/Indications/Indications";
import Room from "./assets/pages/Room/Room";
import Login from "./assets/pages/Login/Login";
import User from "./assets/pages/User/User";
import Reserva from "./assets/pages/Reserva/Reserva";

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
        <Route path='/perfil/:ID_RESERVA' element={<User/>}/>
        <Route path='/reserva/:ID_HOSPEDE' element={<Reserva/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
