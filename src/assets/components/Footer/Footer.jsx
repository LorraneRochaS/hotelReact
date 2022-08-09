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
                        <li><img src= 'https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1659996868~hmac=1b12aec98934be70a841b2fa3c9af266' /></li>
                        <li><img src='https://cdn-icons-png.flaticon.com/512/1051/1051360.png' /></li>
                        <li><img src='https://cdn-icons-png.flaticon.com/512/104/104069.png' /></li>
                        <li><img src='https://cdn-icons-png.flaticon.com/512/2111/2111774.png' /></li>
                    </ul>
                </div>
                <div className={S.links}>
                    <h2>Links</h2>
                    <ul>
                    <li><a href='#'/>Sobre</li>
                    <li><a href='#'/>FAQ</li>
                    <li><a href='#'/>Politicas de Privacidade</li>
                    <li><a href='#'/>Help</li>
                    <li><a href='#'/>Termos & Condiçoes</li>
                    </ul>
                </div>

                <div className={S.links2}>
                    <h2>Links</h2>
                    <li><a href='#'/>Sobre</li>
                    <li><a href='#'/>FAQ</li>
                    <li><a href='#'/>Politicas de Privacidade</li>
                    <li><a href='#'/>Help</li>
                    <li><a href='#'/>Termos & Condiçoes</li>

                </div>

                <div className={S.Contato}>
                    <h2>Contato</h2>
                    <ul className={S.Info}>
                    <li>
                        <span></span>
                        <span> linda Street<br></br>
                        Phoenix, <br></br>USA </span>
                    </li>
                    <li>
                        <span></span>
                        <p><a href='tel:99883335'>99883335</a></p>
                    </li>
                    </ul>
                </div>




                {/* <div className={S.Div}>
            <h2>Nos acompanhe nas redes</h2>
        </div>

        <ul className={S.Hotel}>
            <h2>Hotel</h2>
            <p>Ajuda</p>
            <p>Informações Legais</p>
            <p>Dados Pessoais</p>
            <p>Reservas</p>
        </ul>

        <ul className={S.Servicos}>
            <h2> Serviços</h2>
            <p>Localidades</p>
            <p>Transfer</p>
        </ul>

        <article className={S.Article}>
         © Material criado para fins didáticos™.
 
        </article> */}
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