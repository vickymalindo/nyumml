import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../images/logo.png'
import style from '../../styles/Nav.module.css'

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {console.log(isOpen)}
      <header className={style.header}>
        <Link to='/'>
          <img src={logo} alt="logo" className={style.logo} />
        </Link>
        <button className={style.hamburger} onClick={() => setIsOpen((prev) => !prev)}>
          <GiHamburgerMenu />
        </button>
        <nav className={isOpen ? `${style.nav_menu} ${style.open}` : `${style.nav_menu}`}>
          <ul>
            <li className={style.nav_item}><Link className={style.link} to='/'>Home</Link></li>
            <li className={style.nav_item}><Link className={style.link} to='/aboutus'>About Us</Link></li>
            <li className={style.nav_item}><Link className={style.link} to='/catalogue'>Catalogue</Link></li>
            <li className={style.nav_item}><a href="https://wa.me/089607123166?text=Saya%20ingin%20memesan%20produk%20yang%20Anda%20jual" target="_blank" rel='noreferrer'>Order Now</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav