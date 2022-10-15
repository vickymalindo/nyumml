import React from 'react'
import promo from '../../images/Promo.png'
import { FaInstagram } from 'react-icons/fa'
import style from '../../styles/Promo.module.css'

const Promo = () => {
  return (
    <div className={style.promo}>
      <div className={style.left}>
        <h2 className={style.title}>Big Promos on</h2>
        <h2 className={style.title}>Big Event</h2>
        <p className={style.text}>
          Nantikan setiap hari raya! Nyummyl akan mengeluarkan promo besar dan cookie bundles.
        </p>
        <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
      </div>
      <img src={promo} alt="testiPromo" className={style.promoImg} />
    </div>
  )
}

export default Promo