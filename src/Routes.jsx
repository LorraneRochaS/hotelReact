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
      <RoomImg />
      <Convenience />
      <Description />
      

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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
