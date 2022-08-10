import React from 'react'
import S from './Price.module.css'

// esse modulo foi criado para exibir um preço em tamanho grande

const Price = (props) => {
  return (
    <h3 className={S.price}>{props.text}</h3>
  )
}

export default Price