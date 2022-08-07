import React from 'react'
import Button from '../Button/Button'
import S from './RoomCard.module.css'

/*
PROPS
img = imagem
tittle = titulo
date = data
descr = descriçao
price = preço */

const RoomCard = (props) => {
  
  return (
    <div className={S.roomCard}>
        <img  className={S.img} src={props.src} alt="img do hotel" />
        <div className={S.infoContainer}>
            <h3 className={S.titulo}>Quarto {props.title} {props.class} </h3>
            <h4 className={S.date}>{props.date}</h4>
            <p className={S.descr}>{props.descr}</p>
            <div className={S.priceContainer}>
                <p className={S.price}>{props.price}</p>
                <Button text='ver'/>
            </div>
        </div>
    </div>
  )
}

export default RoomCard