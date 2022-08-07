import React from 'react'
import S from './Convenience.module.css'

//card com conveniencia, contem uma img (src) e um texto descritivo abaixo 

const Convenience = (props) => {
  return (
    <div className={S.convenienceCtn}>
    <img className={S.convenience} src={props.src} alt="conveniencia-acessibilidade-icone" />
    <p className={S.description}>{props.text}</p>
    </div>

  )
}

export default Convenience