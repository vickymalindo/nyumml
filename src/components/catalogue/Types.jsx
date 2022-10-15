import React from 'react'
import style from '../../styles/Types.module.css'

// TODO: pikirkan supaya background bisa dynamic
const Types = ({ title, desc, pcs, jar, image, reverse, best }) => {
  return (
    <div className={reverse ? `${style.reverse}` : `${style.type}`}>
      <div className={style.wrapper_img}>
        <img src={image} alt='gambarKue' className={style.image} />
        <div className={style.layer}></div>
      </div>
      <div className={style.content}>
        {best && <span className={style.best}>{best}</span>}
        <h2 className={style.title}>{title}</h2>
        <p className={style.desc}>{desc}</p>
        <div className={style.price}>
          {pcs && <span className={style.pcs}>{pcs}/pcs</span>}
          <span className={style.jar}>{jar}/jar</span>
        </div>
      </div>
    </div>
  )
}

export default Types