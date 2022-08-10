import React from 'react'
import S from './UserPicture.module.css'

//foto do usuario no canto da navbar

const UserPicture = (props) => {
  return (
    <>
    <img className={S.userPicture} src={props.src} alt="imagem-do-usuario" />
    </>
  )
}

export default UserPicture