import React from "react";
import S from "./Home.module.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Convenience from "../../components/Convenience/Convenience";
import Title from "../../components/Title/Title";
import Promo from "../../components/Promo/Promo";

const Home = () => {
  return (
    <>
      <div className={S.home}>
        <Banner src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" />
        <div className={S.searchBarCtn}>
          <SearchBar />
        </div>
        <Title title="Em todos os quartos" />
        <div className={S.convenienceCtn}>
          <Convenience
            text="WiFi"
            src="https://cdn-icons-png.flaticon.com/128/93/93158.png"
          />
          <Convenience
            text="Café da Manhã"
            src="https://cdn-icons-png.flaticon.com/512/685/685352.png"
          />

          <Convenience
            text="Acessibilidade"
            src="https://cdn-icons-png.flaticon.com/128/61/61313.png"
          />
        </div>
        <Promo
          text="Conheça o nordeste"
          src="https://cdn2.civitatis.com/brasil/natal/galeria/parrachos-maracajau.jpg"
        />
        <Promo
          text="Visite Natal"
          src="https://a.cdn-hotels.com/gdcs/production82/d1932/a34e8140-971f-4e1c-93fa-38335cd551de.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        />
      </div>
    </>
  );
};

export default Home;
