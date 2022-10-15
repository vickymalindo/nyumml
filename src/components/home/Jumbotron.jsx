import React from 'react'
import Image1 from '../../images/image1.png'
import style from '../../styles/Jumbotron.module.css'

const Jumbotron = () => {
  return (
    <div className={style.jumbotron}>
      <div className={style.container}>
        <div className={style.left}>
          <h2 className={style.tagline}>Premium with</h2>
          <h2 className={style.tagline}>LOW PRICE !</h2>
          <p className={style.service}>Nyummyl menyediakan banyak macam jenis dan varian cookies yang cocok untuk seleramu!</p>
          <a href='#cat' className={style.btn}>Let's start</a>
        </div>
        <img src={Image1} alt="cookieschoco" className={style.img_jumb} />
      </div>
    </div>
  )
}

export default Jumbotron