import React from 'react'
import S from './UserPicture.module.css'

const UserPicture = (props) => {
  return (
    <>
    <img className={S.userPicture} src={props.src} alt="imagem-do-usuario" />
    </>
  )
}

export default UserPicture