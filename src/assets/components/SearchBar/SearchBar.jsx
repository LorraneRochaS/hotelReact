import React, { useState } from "react";
import Button from "../Button/Button";
import S from "./SearchBar.module.css";

//funções para receber dados de busca por disponibilidade e direcionar para pag com resultado

const SearchBar = () => {
  const [search, setSearch] = useState({
    CHECKIN: "",
    CHECKOUT: "",
    QTD_HOSPEDES: ""
  })

function handleChange(target, key) {
  const value = target.value;
  setSearch({ ...search, [key]: value })
}

function handleSearch(e) {
e.preventDefault()
}

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
