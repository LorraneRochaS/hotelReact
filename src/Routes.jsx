import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Home from "./assets/pages/Home/Home";
import Indications from "./assets/pages/Indications/Indications";
import Room from "./assets/pages/Room/Room";
import Login from "./assets/pages/Login/Login";

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
        <Route path="/quartos/:tipo" element={<Room />} />
        <Route path='/quarto/:ID_QUARTO' element={<Room />} />
        <Route path='/login' element={<Login/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
