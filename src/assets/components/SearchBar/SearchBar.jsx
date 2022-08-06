import React from "react";
import Button from "../Button/Button";
import S from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={S.searchBar}>
      <div className={S.inputCtn}>
        <div>
          <p>Entrada</p>
          <input type="date"  name="entrada" id="entrada" />
        </div>
        <div>
          <p>Saída</p>
          <input type="date" name="saida" id="saida" />
        </div>
        <div>
          <p>Hóspedes</p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <Button text="Buscar" />
    </div>
  );
};

export default SearchBar;
