import React from 'react'
import S from './Guarantees.module.css'

const Guarantees = (props) => {
  return (
    <img className={S.img} src={props.img} alt="imgs-das-garantias" />
  )
}

export default Guarantees