import React from 'react'
import style from '../../styles/Mini.module.css'
import mini from '../../images/Mini.png'
import { FaInstagram } from 'react-icons/fa'

const Mini = () => {
  return (
    <div className={style.mini}>
      <img src={mini} alt="testiMini" className={style.miniImg} />
      <div className={style.right}>
        <h2 className={style.title}>Mini</h2>
        <h2 className={style.title}>Cookies</h2>
        <p className={style.text}>
          Ukuran Cookies ada yang mini juga, lho! Go n get it dengan harga 20k tiap jar nya.
        </p>
        <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
      </div>
    </div>
  )
}

export default Mini