import React from 'react'
import S from './RoomImg.module.css'

// esse modulo foi criado para exibir uma imagem grande

const RoomImg = (props) => {
  return (
    <img className={S.img} src={props.img} alt="img-de-exemplo-do-quarto" />
  )
}

export default RoomImg