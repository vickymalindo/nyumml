import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import style from '../../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.layer}></div>
      <div className={style.title}>
        <h3 className={style.our}>Our</h3>
        <h3 className={style.sig}>Signature</h3>
        <h3 className={style.cookie}>Cookie</h3>
      </div>
      <div className={style.wrapper}>
        <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
      </div>
    </div>
  )
}

export default Hero