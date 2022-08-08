import React from 'react'
import Booking from '../../components/Booking/Booking'
import SearchBar from '../../components/SearchBar/SearchBar'
import Title from '../../components/Title/Title'

const User = () => {
  return (
    <div>
      <Title title="Bem vindo(a), Nahla"/>

      <h3>Nova Reserva</h3>
      <SearchBar />
      <h3>Últimas Reservas:</h3>
      <Booking />
    </div>
  )
}

export default User
