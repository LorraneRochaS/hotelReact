import React from 'react'
import S from './Title.module.css'

// esse modulo foi criado com o proposito de funcionar como um titulo para um campo fora de um card, nao foi criado pensando em nenhuma pag especifica

const Title = (props) => {
  return (
    <h2  className={S.title}>{props.title}</h2>
  )
}

export default Title