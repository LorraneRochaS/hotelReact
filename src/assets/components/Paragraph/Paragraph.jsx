import React from 'react'
import S from './Paragraph.module.css'

const Paragraph = (props) => {
  return (    
    <p className={S.paragraph}>{props.paragraph}</p>
  )
}

export default Paragraph