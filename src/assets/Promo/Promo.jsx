import React from 'react'
import S from './Promo.module.css'

const Promo = (props) => {
  return (
    <img className={S.promo} src={props.src} alt="img-promocao" />
  )
}

export default Promo