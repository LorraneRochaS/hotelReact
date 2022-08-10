import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Booking from '../../components/Booking/Booking'
import SearchBar from '../../components/SearchBar/SearchBar'
import Title from '../../components/Title/Title'
import { getBookingsById } from '../../../service/api'

const User = () => {

  const [ checkin, setCheckIn] = useState()
  const [ checkOut, setCheckOut] = useState()


    //erro ao buscar API. Método p/ buscar por id de usuário?

    const params = useParams();
    const { ID_RESERVA } = params;
  const [reservas, setReservas] = useState();

  async function request() {
    //Array vindo vazio com busca por ID (resolvido)
    const response = await getBookingsById(ID_RESERVA)
    setReservas(response);    
  }

  // recebe os dados antigos e mais tarde os novos
  const [ reservaAntiga, setReservaAntiga ] = useState({
    ID_RESERVA: '',
    ID_QUARTO: '',
    ID_HOSPEDE: '',
    CHECKIN: '',
    CHECKOUT: '',
    STATUS_PAGAMENTO:''
  })

  // funçao que chama o setador dos dados somente quando ja preenchidos
  const getDadosReservas = async () => {
    const dados = await getBookingsById(ID_RESERVA)
    setReservaAntiga(dados)
  }

  useEffect(() => {
    request();
    getDadosReservas()
  }, []);

  console.log(reservas);
  // console.log(dados);  <- apagado aqui nao sei pq

  //funçao que envia os dados antigos pros inputs
  const handleInputChange = (e, key) => {
    setReservaAntiga({ ...reservaAntiga, [key]: e.target.value})
  }

  //
  const update = async (e) => {
    e.preventDefault()
    const response = await alteraReserva (ID_RESERVA, reservaAntiga)
  }

  return (
    <div>
      <Title title="Bem vindo(a), Nahla"/>

      <h3>Nova Reserva</h3>
      <SearchBar />
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
