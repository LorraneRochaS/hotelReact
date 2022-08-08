import React from 'react'
import Button from '../Button/Button'
import S from './Booking.module.css'
import { useNavigate } from 'react-router-dom'
import { editBooking } from '../../../service/api'
import { deleteBooking } from '../../../service/api'

//Card para mostrar reservas do feitas pelo hóspede

const Booking = (props) => {

const navigate = useNavigate()

function handleEdit() {
  navigate(`/reserva/${props.id}`)
}

function handleDelete() {

}
  
  return (
    <div className={S.roomCard}>
        <img  className={S.img} src={props.src} alt="img do hotel" />
        <div className={S.infoContainer}>
            <h3 className={S.titulo}>Quarto {props.title} {props.class}</h3>
            <h4 className={S.date}>{props.date}</h4>
            <p className={S.descr}>{props.descr}</p>
            <div className={S.priceContainer}>
                <p className={S.price}>R${props.price} / noite</p>
                <Button text='Editar' onClick= {handleEdit} />
                <Button text='Deletar' onClick= {handleDelete}/>
            </div>
        </div>
    </div>
  )
}

export default Booking