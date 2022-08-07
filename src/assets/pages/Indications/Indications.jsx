import React, { useState, useEffect} from 'react'
import RoomCard from '../../components/RoomCard/RoomCard'
import Title from '../../components/Title/Title'
import axios from 'axios'

//A pagina indicaçoes é uma pagina que sugere quartos aleatorios ao usuário, voltada para users que estao em estagio inicial de pesquisa de acomodaçoes

/*
PROPS
src = imagem
title = titulo
date = data
descr = descriçao
price = preço */

const Indications = () => {
  const [ quartos, setQuartos] = useState([])

  async function request() {
    axios.get('https://api-site-hotel.herokuapp.com/quarto')
    .then((response) => { setQuartos(response.data); })
    .catch((error) => { console.log(error); })
    

  }


  useEffect(() => {
    request()
    

  }, [])

  console.log(quartos.quarto);
  


  return (
    <div>
      
      {!!quartos && quartos.quarto.map((quarto, key) => {
        return (
          <RoomCard key={key} title={quarto.NUMERO_DO_QUARTO} />
        )
      })}
    </div>
    
  )
}

export default Indications