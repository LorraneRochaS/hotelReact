import React from 'react'
import RoomImg from '../../components/RoomImg/RoomImg'
import Title from '../../components/Title/Title'
import Price from '../../components/Price/Price'
import Button from '../../components/Button/Button'
import S from './Room.module.css'
import Convenience from '../../components/Convenience/Convenience'
import Paragraph from '../../components/Paragraph/Paragraph'
import { useParams } from 'react-router-dom'
import { getBookings } from '../../service/api'

const Room = () => {

    const params = useParams()
    const { ID_QUARTO } = params
    console.log(params);

  return (
    <div className={S.father}>
        <Title title={ID_QUARTO}/>
        <RoomImg clas src='https://www.hotel-lordbyron.com/_novaimg/galleria/1403152.jpg' />
        <div className={S.flexCtn1}>
            <Price text='R$ 699' />
            <Button text='Reservar'/>            
        </div>
        <div className={S.flexCtn2}>
        <Convenience src='https://cdn-icons-png.flaticon.com/128/1414/1414446.png' />
        <Convenience src='https://cdn-icons.flaticon.com/png/128/3437/premium/3437732.png?token=exp=1660109951~hmac=556b117ca0875f849bbb7900ca20971d' />
        <Convenience src='https://cdn-icons-png.flaticon.com/128/3029/3029790.png' />
        <Convenience src='https://cdn-icons-png.flaticon.com/128/1076/1076877.png' />
        </div>
        <div className={S.flexCtn3}>
            <Title title='Quarto'/>
            <Paragraph paragraph= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'/>
            <Button className={S.btn1} text='Reservar'/>   
        </div>
       
    </div>
  )
}

export default Room