import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Title from '../../components/Title/Title'
import { getBookingByBookingId } from "../../service/api";
import { deleteBooking } from "../../service/api";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const Reserva = () => {
  const params = useParams();
  const { ID_RESERVA } = params;
  const [reservas, setReservas] = useState();

  async function request() {
    //Array vindo vazio com busca por ID (resolvido)
    const response = await getBookingByBookingId(ID_RESERVA);
    setReservas(response);
  }

  function handleDelete() {
    deleteBooking()
    }

  useEffect(() => {
    request();
  }, []);
  console.log(reservas);

  return (
    <div>
      <Title title="Bem vindo(a), Nahla" />

      <h3>Editar Reserva:</h3>
      <div>
        {!!reservas &&
          reservas[0].map((reserva, key) => {
            return (
              //Mudar nome dos atributos no cdg para fazer funcionar?
              <div>
                <Form
                key={key}
                quarto={reserva.ID_QUARTO}
                hospede={reserva.ID_HOSPEDE}
                checkout={reserva.CHECKOUT}
                checkin={reserva.CHECKIN}
                reserva={reserva.ID_RESERVA}
              />
              <Button text="atualizar"/>
              <Button text="deletar" onClick={handleDelete}/>
              </div>
              

            );
          })}
      </div>
    </div>
  );
};

export default Reserva;

//SOCORRO