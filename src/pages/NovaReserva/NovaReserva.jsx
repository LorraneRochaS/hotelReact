import React from 'react'
import { useState } from 'react'
import S from './NovaReserva.module.css'
import { postBooking } from '../../service/api'

const NovaReserva = () => {

    const [newData, setData] = useState({
        ID_RESERVA: "",
    ID_HOSPEDE: "",
    ID_QUARTO: "",
    CHECKIN: "",
    CHECKOUT: "",
    });


  return (
      <div>
          <form action="">
            <input
              type="number"
              name="reserva"
              id="reserva"
              placeholder={newData.ID_RESERVA}
              value={newData.ID_RESERVA}
              onChange={(e) => handleChange(e, "ID_RESERVA")}
            />

            <input
              type="number"
              name="quarto"
              id="quarto"
              placeholder={newData.ID_QUARTO}
              value={newData.ID_QUARTO}
              onChange={(e) => handleChange(e, "ID_QUARTO")}
            />

            <input
              type="nuumber"
              name="hospede"
              id="hospede"
              placeholder={newData.ID_HOSPEDE}
              value={newData.ID_HOSPEDE}
              onChange={(e) => handleChange(e, "ID_HOSPEDE")}
            />

            <input
              id="checkin"
              type="date"
              placeholder={newData.CHECKIN}
              value={newData.CHECKIN}
              onChange={(e) => handleChange(e, "CHECKIN")}
            />

            <input
              id="checkout"
              type="date"
              placeholder={newData.CHECKOUT}
              value={newData.CHECKOUT}
              onChange={(e) => handleChange(e, "CHECKOUT")}
            />

            <button onClick={request}>atualizar</button>
            </form>
    </div>
  )
}

export default NovaReserva
