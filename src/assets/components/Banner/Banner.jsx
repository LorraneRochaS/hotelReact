import React from 'react'
import S from './Banner.module.css'

const Banner = (props) => {
  return (
    <img  className={S.img} src={props.src} alt="banner-promo-img" />
  )
}

export default Banner