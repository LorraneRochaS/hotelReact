import React from 'react'
import S from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={S.Container}>

                    <div className={S.about}>
                        <h2>Sobre Nós</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam nemo veniam perspiciatis facilis maiores ullam omnis ea dicta quae, fugiat aperiam fuga magnam maxime exercitationem ab, illum minus beatae?</p>

                        <ul className={S.Sci}>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/87/87390.png' /></li>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/1051/1051360.png' /></li>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/466/466963.png' /></li>
                            <li><img src='https://cdn-icons-png.flaticon.com/512/1400/1400824.png' /></li>
                        </ul>
                    </div>
                    <div className={S.links}>
                        <h2>Links</h2>
                        <ul>
                            <li><a href='#' />Sobre</li>
                            <li><a href='#' />FAQ</li>
                            <li><a href='#' />Politicas de Privacidade</li>
                            <li><a href='#' />Help</li>
                            <li><a href='#' />Termos & Condiçoes</li>
                        </ul>
                    </div>

                    <div className={S.links2}>
                        <h2>Links</h2>
                        <li><a href='#' />Sobre</li>
                        <li><a href='#' />FAQ</li>
                        <li><a href='#' />Politicas de Privacidade</li>
                        <li><a href='#' />Help</li>
                        <li><a href='#' />Termos & Condiçoes</li>

                    </div>

                    <div className={S.Contato}>
                        <h2>Contato</h2>
                        <ul className={S.Info}>
                            <li>
                                <span> <img src='https://cdn-icons.flaticon.com/png/512/5611/premium/5611951.png?token=exp=1660016374~hmac=c68190b690ca3eb8d287bbde9b834ec3' /></span>
                                <span> linda Street<br></br>
                                    Phoenix, <br></br>USA </span>
                            </li>
                            <li>

                                <span> <img src='https://cdn-icons.flaticon.com/png/512/3625/premium/3625251.png?token=exp=1660016546~hmac=b582c50a7407f2203ffb44b23548eb80' /></span>
                                <p><a href='tel:99883335'>99883335</a></p>
                            </li>
                            <li>
                                <span> <img src='https://cdn-icons-png.flaticon.com/512/747/747314.png' /></span>
                                <p><a href='gmail.com'>contato@hotel.com.br</a></p>
                            </li>
                        </ul>
                    </div>
         
                </div>

            </footer>
            <div>  <p className={S.Article}>
                © Material criado para fins didáticos™.

            </p>
            </div>
        </div>

    )
}

export default Footer