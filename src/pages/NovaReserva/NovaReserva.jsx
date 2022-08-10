import React from "react";
import { useState } from "react";
import S from "./NovaReserva.module.css";
import { postBooking } from "../../service/api";

const NovaReserva = () => {
  const [newData, setData] = useState({
    ID_HOSPEDE: "",
    ID_QUARTO: "",
    CHECKIN: "",
    CHECKOUT: "",
  });

  function handleChange(e, key) {
    const value = e.target.value;
    setData({ ...newData, [key]: value });
  }

  const request = async (e) => {
    e.preventDefault();
    const response = await postBooking(newData);
    setData({
      ID_HOSPEDE: newData.ID_HOSPEDE,
      ID_QUARTO: newData.ID_QUARTO,
      CHECKIN: newData.CHECKIN,
      CHECKOUT: newData.CHECKOUT,
    });
    console.log(response);
  };

  return (
    <div>
      <form action="">
        <input
          type="number"
          name="quarto"
          id="quarto"
          placeholder="Quarto"
          value={newData.ID_QUARTO}
          onChange={(e) => handleChange(e, "ID_QUARTO")}
        />

        <input
          type="number"
          name="hospede"
          id="hospede"
          placeholder="Hóspede"
          value={newData.ID_HOSPEDE}
          onChange={(e) => handleChange(e, "ID_HOSPEDE")}
        />

        <input
          id="checkin"
          type="date"
          value={newData.CHECKIN}
          onChange={(e) => handleChange(e, "CHECKIN")}
        />

        <input
          id="checkout"
          type="date"
          value={newData.CHECKOUT}
          onChange={(e) => handleChange(e, "CHECKOUT")}
        />

        <button className={S.button} onClick={request}>
          <p className={S.text}>Adicionar</p>
        </button>
      </form>
    </div>
  );
};

export default NovaReserva;
