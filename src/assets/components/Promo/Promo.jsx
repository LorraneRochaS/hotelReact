import React from "react";
import CardTitle from "../../CardTitle/CardTitle";
import S from "./Promo.module.css";

// o componente promo tem uma imagem (src) de fundo e um titulo (text), ela tem por objetivo funcionar como um link chamativo.

const Promo = (props) => {
  return (
    <div className={S.promoCtn}>
      <CardTitle className={S.title} text={props.text} />
      <img className={S.promo} src={props.src} alt="img-promocao" />
      
    </div>
  );
};

export default Promo;
