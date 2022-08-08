import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import RoomCard from "./assets/components/RoomCard/RoomCard";
import RoomImg from "./assets/components/RoomImg/RoomImg";
import Home from "./assets/pages/Home/Home";
import Title from "./assets/components/Title/Title";
import Convenience from "./assets/components/Convenience/Convenience";
import Description from "./assets/components/Description/Description";
import Paragraph from "./assets/components/Paragraph/Paragraph";
import Indications from "./assets/pages/Indications/Indications";
import SearchBar from "./assets/components/SearchBar/SearchBar";
import Guarantees from "./assets/components/Guarantees/Guarantees";
import Promo from "./assets/components/Promo/Promo";
import Room from "./assets/pages/Room/Room";

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
        <Route
          path="/"
          element={
            <RoomCard
              title="Quarto Standart"
              date="3 - 8 agosto"
              descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              price="R$679 / noite"
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/indicacoes" element={<Indications />} />
        <Route path='/quarto' element={<Room />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
