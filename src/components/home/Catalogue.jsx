import React from 'react'
import style from '../../styles/Catalogue.module.css'
import CatalogueTypes from './CatalogueTypes'
import Mini from './Mini'
import Promo from './Promo'
const Catalogue = () => {
  return (
    <div className={style.catalogue} id='cat'>
      <h2 className={style.title}>Catalogue</h2>
      <CatalogueTypes />
      <Mini />
      <Promo />
    </div>
  )
}

export default Catalogue