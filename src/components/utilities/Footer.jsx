import React from 'react'
import style from '../../styles/Bottom.module.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MC from '../../images/milkcookies.png'
import Nyumml from '../../images/nyummyl.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <h3 className={style.find}>find us on</h3>
        <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.socmed}><FaInstagram /></a>
        <a href="https://wa.me/089607123166?text=Saya%20ingin%20memesan%20produk%20yang%20Anda%20jual" target="_blank" rel='noreferrer' className={style.socmed}><FaWhatsapp /></a>
      </div>
      <div className={style.middle}>
        <Link className={style.link}>Home</Link>
        <Link className={style.link}>About Us</Link>
        <Link className={style.link}>Catalogue</Link>
        <a className={style.link} target='_blank' href='href="https://wa.me/089607123166'>Contact</a>
      </div>
      <div className={style.right}>
        <img src={MC} alt="MC" />
        <img src={Nyumml} alt="Nyumml" />
      </div>
    </footer>
  )
}

export default Footer