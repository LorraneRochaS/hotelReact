import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Booking from '../../components/Booking/Booking'
import SearchBar from '../../components/SearchBar/SearchBar'
import Title from '../../components/Title/Title'
import { getBookingsById } from '../../service/api'
import Button from '../../components/Button/Button'

const User = () => {

    //erro ao buscar API. Método p/ buscar por id de usuário?

    const params = useParams();
    const { ID_HOSPEDE } = params;
  const [reservas, setReservas] = useState();

  async function request() {
    //Array vindo vazio com busca por ID (resolvido)
    const response = await getBookingsById(ID_HOSPEDE)
    setReservas(response);
    
  }

  useEffect(() => {
    request();
  }, []);
//   console.log(reservas);

  return (
    <div>
      <Title title="Bem vindo(a), Nahla"/>
      <Button text="nova reserva"/>
      <h3>Últimas Reservas:</h3>
      <div>{!!reservas &&
        reservas[0].map((reserva, key) => {
          return (

            //Mudar nome dos atributos no cdg para fazer funcionar?
            <Booking
              src="https://cf.bstatic.com/images/hotel/840x460/631/63184497.jpg"
              descr="img quarto"
              key={key}
              idRoom={reserva.ID_QUARTO}
              checkOut={reserva.CHECKOUT}
              checkIn={reserva.CHECKIN}
              id={reserva.ID_RESERVA}
            />
          );
        })}
    </div>

    </div>
  )
}

export default User