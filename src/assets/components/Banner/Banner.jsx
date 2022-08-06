import React from 'react'
import S from './Banner.module.css'

//o componente banner é uma imagem de convencimento usada no topo da pagina, pensado para uso preferencial na pagina home

const Banner = (props) => {
  return (
    <img  className={S.img} src={props.src} alt="banner-promo-img" />
  )
}

export default Banner