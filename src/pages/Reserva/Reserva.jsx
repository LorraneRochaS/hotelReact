import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Title from "../../components/Title/Title";
import { getBookingByBookingId } from "../../service/api";
import { deleteBooking } from "../../service/api";
import { editBooking } from "../../service/api";
import Button from "../../components/Button/Button";

const Reserva = () => {
  const params = useParams();
  const { ID_RESERVA } = params;
  const [oldData, setOldData] = useState({
    ID_RESERVA: ID_RESERVA,
    ID_HOSPEDE: "",
    ID_QUARTO: "",
    CHECKIN: "",
    CHECKOUT: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  async function getReservas() {
    const response = await getBookingByBookingId(ID_RESERVA);
    setOldData(response);
  }

  function handleChange(e, key) {
    const value = e.target.value;
    setOldData({ ...oldData, [key]: value });
  }

  function handleDelete() {
    deleteBooking();
  }

  useEffect(() => {
    getReservas();
  }, []);

  const request = async (e) => {
    e.preventDefault();
    const response = await editBooking(ID_RESERVA, oldData);

    if (response) {
      setStatus({
        type: "sucess",
        mensagem: "Dados alterados com sucesso!",
      });
    }
  };

  return (
    <div>
      <Title title="Bem vindo(a), Nahla" />

      <h3>Editar Reserva:</h3>
      <div>
        <div>
          <form action="">
            <input
              type="text"
              name="reserva"
              id="reserva"
              placeholder={oldData.ID_RESERVA}
              value={oldData.ID_RESERVA}
              onChange={(e) => handleChange(e, "ID_RESERVA")}
            />

            <input
              type="text"
              name="quarto"
              id="quarto"
              placeholder={oldData.ID_QUARTO}
              value={oldData.ID_QUARTO}
              onChange={(e) => handleChange(e, "ID_QUARTO")}
            />

            <input
              type="text"
              name="hospede"
              id="hospede"
              placeholder={oldData.ID_HOSPEDE}
              value={oldData.ID_HOSPEDE}
              onChange={(e) => handleChange(e, "ID_HOSPEDE")}
            />

            <input
              id="checkin"
              type="date"
              placeholder={oldData.CHECKIN}
              value={oldData.CHECKIN}
              onChange={(e) => handleChange(e, "CHECKIN")}
            />

            <input
              id="checkout"
              type="date"
              placeholder="checkout"
              value={oldData.CHECKOUT}
              onChange={(e) => handleChange(e, "CHECKOUT")}
            />

            <button onClick={request}>atualizar</button>
          </form>
          <Button text="deletar" onClick={handleDelete} />
          {status.type === "sucess" ? <p>{status.mensagem}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Reserva;

//SOCORRO
