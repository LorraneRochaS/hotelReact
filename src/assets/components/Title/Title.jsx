import React from 'react'
import S from './Title.module.css'

const Title = (props) => {
  return (
    <h2  className={S.title}>{props.title}</h2>
  )
}

export default Title