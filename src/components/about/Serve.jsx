import React from 'react'
import style from '../../styles/Serve.module.css'
import bean from '../../images/bean.png'
import cheese from '../../images/cheese.png'
import egg from '../../images/egg.png'
import flour from '../../images/flour.png'
import matcha from '../../images/matcha.png'
import spoon from '../../images/spoon.png'
import sugar from '../../images/sugar.png'
import wood from '../../images/wood.png'
import choco from '../../images/choco.png'

const Serve = () => {
  return (
    <div className={style.serve}>
      <div className={style.tagline}>
        <h3>We Served You with</h3>
        <h2>PREMIUM</h2>
        <h4>Ingredients.</h4>
      </div>
      <div className={style.container}>
        <div className={style.item1}>
          <img src={spoon} alt="spoon" />
        </div>
        <div className={style.item2}>
          <img src={sugar} alt="sugar" />
        </div>
        <div className={style.item3}>
          <img src={choco} alt="choco" />
        </div>
        <div className={style.item4}>
          <img src={egg} alt="egg" />
        </div>
        <div className={style.item5}>
          <img src={flour} alt="flour" />
        </div>
        <div className={style.item6}>
          <img src={bean} alt="bean" />
        </div>
        <div className={style.item7}>
          <img src={wood} alt="wood" />
        </div>
        <div className={style.item8}>
          <img src={matcha} alt="matcha" />
        </div>
        <div className={style.item9}>
          <img src={cheese} alt="cheese" />
        </div>
      </div>
    </div>
  )
}

export default Serve