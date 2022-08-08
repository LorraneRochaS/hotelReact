import React from 'react'
import RoomImg from '../../components/RoomImg/RoomImg'
import Title from '../../components/Title/Title'
import Price from '../../components/Price/Price'
import Button from '../../components/Button/Button'
import S from './Room.module.css'
import Convenience from '../../components/Convenience/Convenience'
import Paragraph from '../../components/Paragraph/Paragraph'
import { useParams } from 'react-router-dom'

const Room = () => { 



    const params = useParams()
    const { ID_QUARTO } = params
    console.log(params);

    
    



  return (
    <div>
        <Title title={ID_QUARTO}/>
        <RoomImg />
        <div className={S.flexCtn1}>
            <Price text='12313' />
            <Button text='Reservar'/>            
        </div>
        <div className={S.flexCtn2}>
        <Convenience />
        <Convenience />
        <Convenience />
        <Convenience />
        </div>
        <div className={S.flexCtn3}>
            <Title title='123123'/>
            <Paragraph paragraph= '123vvf2'/>
        </div>
       
    </div>
  )
}

export default Room