import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Title from "../../components/Title/Title";
import { getBookingByBookingId } from "../../service/api";
import { deleteBooking } from "../../service/api";
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
    deleteBooking();
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
                <form action="" key={key}>
                  <fieldset>
                    <label htmlFor="">Reserva</label>
                    <input
                      type="text"
                      placeholder="reserva"
                      value={reserva.ID_RESERVA}
                      onChange={({ target }) =>
                        handleChange(target, "ID_RESERVA")
                      }
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="">Quarto</label>
                    <input
                      type="text"
                      placeholder="quarto"
                      value={reserva.ID_QUARTO}
                      onChange={({ target }) =>
                        handleChange(target, "ID_QUARTO")
                      }
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="">Hóspede</label>
                    <input
                      type="text"
                      placeholder="hospede"
                      value={reserva.ID_HOSPEDE}
                      onChange={({ target }) =>
                        handleChange(target, "ID_HOSPEDE")
                      }
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="">Check In:</label>
                    <input
                      type="date"
                      placeholder="checkin"
                      value={reserva.CHECKIN}
                      onChange={({ target }) => handleChange(target, "CHECKIN")}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="">Checkout:</label>
                    <input
                      type="date"
                      placeholder="checkout"
                      value={reserva.CHECKOUT}
                      onChange={({ target }) =>
                        handleChange(target, "CHECKOUT")
                      }
                    />
                  </fieldset>
                </form>
                <Button text="atualizar" />
                <Button text="deletar" onClick={handleDelete} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Reserva;

//SOCORRO
