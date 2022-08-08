import React, { useState, useEffect } from "react";
import RoomCard from "../../components/RoomCard/RoomCard";
import Title from "../../components/Title/Title";
import axios from "axios";

//A pagina indicaçoes é uma pagina que sugere quartos aleatorios ao usuário, voltada para users que estao em estagio inicial de pesquisa de acomodaçoes

/*
PROPS
src = imagem
title = titulo
date = data
descr = descriçao
price = preço */

const Indications = () => {
  const [ quartos, setQuartos] = useState()

  async function request() {
    const response = await axios.get('https://api-site-hotel.herokuapp.com/quarto')
    const json = await response.data
    console.log(json);
    setQuartos(json)
  }

  useEffect(() => {
    request();
  }, []);


  return (
    <div>
      
      
      {!!quartos && quartos.quarto.map((quarto, key) => {
        return (
          <RoomCard src='https://cf.bstatic.com/images/hotel/840x460/631/63184497.jpg' descr='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utilizado' key={key} title={quarto.NUMERO_DO_QUARTO} class={quarto.CLASSE} price={quarto.DIARIA} id={quarto.ID_QUARTO} />
        )
      })}
      
    </div>
  );
};

export default Indications;
