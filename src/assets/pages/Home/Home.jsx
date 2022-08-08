import React from "react";
import S from "./Home.module.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Convenience from "../../components/Convenience/Convenience";
import Title from "../../components/Title/Title";
import Promo from "../../components/Promo/Promo";
import { Link } from "react-router-dom";

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
            src="https://cdn-icons.flaticon.com/png/128/1811/premium/1811245.png?token=exp=1659809215~hmac=3a96af15cb9595f5bb86c6f0e0786f53"
          />

          <Convenience
            text="Acessibilidade"
            src="https://cdn-icons-png.flaticon.com/128/61/61313.png"
          />
        </div>
        <Link to='/indicacoes'><Promo
          text="Conheça o nordeste"
          src="https://cdn2.civitatis.com/brasil/natal/galeria/parrachos-maracajau.jpg"
        />
        </Link>
        <Link to='/indicacoes'><Promo
          text="Visite Natal"
          src="https://a.cdn-hotels.com/gdcs/production82/d1932/a34e8140-971f-4e1c-93fa-38335cd551de.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        /></Link>
      </div>
    </>
  );
};

export default Home;
