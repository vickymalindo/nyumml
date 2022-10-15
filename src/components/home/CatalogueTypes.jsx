import React from 'react'
import style from '../../styles/CatalogueTypes.module.css'
import Cookies from '../../images/Cookies.png'
import Crispy from '../../images/Crispy.png'
import Meringue from '../../images/Meringue.png'
import { useNavigate } from 'react-router-dom'

const CatalogueTypes = () => {
  const navigate = useNavigate()
  const handleCatalogue = () => {
    navigate('/catalogue')
  }

  return (
    <div className={style.catalogue_types}>
      <div className={style.card} onClick={handleCatalogue}>
        <img src={Cookies} alt="Cookies" className={style.cookies} />
        <div className={style.inner_card}>
          <h3>Cookies</h3>
          <div className={style.types}>
            <ul>
              <li>Classic</li>
              <li>Cinnamon</li>
              <li>Double Choco</li>
            </ul>
            <ul>
              <li>Brownie</li>
              <li>Matcha</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.card} onClick={handleCatalogue}>
        <img src={Crispy} alt="Crispy Almond" className={style.crispy} />
        <div className={style.inner_card}>
          <h3>Crispy Almond</h3>
          <div className={style.types}>
            <ul>
              <li>Milky</li>
              <li>Matcha</li>
              <li>Chocolate</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.card} onClick={handleCatalogue}>
        <img src={Meringue} alt="Meringue" className={style.meringue} />
        <div className={style.inner_card}>
          <h3>Meringue</h3>
          <div className={style.types}>
            <ul>
              <li>Classic</li>
              <li>Matcha</li>
              <li>Chocolate</li>
            </ul>
            <ul>
              <li>Strawberry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogueTypes