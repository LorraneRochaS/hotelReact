import React from 'react'
import S from './CardTitle.module.css'

const CardTitle = (props) => {
  return (
    <h3 className={S.cardTitle}>{props.text}</h3>
  )
}

export default CardTitle