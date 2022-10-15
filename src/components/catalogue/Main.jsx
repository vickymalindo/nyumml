import React from 'react'
import Hero from './Hero'
import Nav from '../utilities/Nav'
import Bottom from '../utilities/Bottom'
import style from '../../styles/Main.module.css'
import Types from './Types'
import matchaCookie from '../../images/matchaCookie.png'
import doubleChoco from '../../images/doubleChoco.png'
import brownie from '../../images/brownie.png'
import cinamon from '../../images/cinamon.png'
import classic from '../../images/classic.png'
import chocoCrispy from '../../images/chocoCrispy.png'
import milky from '../../images/milky.png'
import matchaCrispy from '../../images/matchaCrispy.png'
import classicMer from '../../images/classicMer.png'
import matchaMer from '../../images/matchaMer.png'
import stroberiMer from '../../images/stroberiMer.png'
import chocoMer from '../../images/chocoMer.png'


const Main = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className={style.divider}></div>
      <div className={style.cookie_bg}>
        <h3 className={style.cookie_title}>Cookies</h3>
        <div className={style.card}>
          <Types title='Double Choco' desc='Kue kering dengan tekstur crunchy di luar dan fudgy di dalam dengan rasa coklat yang bombastis!' pcs='6' jar='20' image={doubleChoco} />
        </div>
        <div className={style.card}>
          <Types title='Cinnamon' desc='Kue kering dengan tekstur crunchy di luar dan fudgy di dalam dengan rasa kayu manis yang lembut....' pcs='6' jar='20' image={cinamon} reverse={true} />
        </div>
        <div className={style.card}>
          <Types title='Classic' desc='Kue kering dengan tekstur crunchy di luar dan fudgy di dalam dengan rasa original.' pcs='6' jar='20' image={classic} />
        </div>
        <div className={style.card}>
          <Types title='Matcha' desc='Kue kering dengan tekstur crunchy di luar dan fudgy di dalam dengan rasa otentik matcha.....' pcs='6' jar='20' image={matchaCookie} reverse={true} />
        </div>
        <div className={style.card}>
          <Types title='Brownie' desc='Kue kering dengan tekstur cracking di luar dan fudgy di dalam dengan rasa brownies yang lezat!' pcs='6' jar='20' image={brownie} best='Best Seller' />
        </div>
      </div>
      <div className={style.crispy_bg}>
        <h3 className={style.crispy_title}>Crispy Almond</h3>
        <div className={style.card_crispy}>
          <Types title='Milky' desc='Cemilan garing dan tipis rasa vanilla yang siap menemani harimu!' jar='20' image={milky} />
        </div>
        <div className={style.card_crispy}>
          <Types title='Matcha' desc='Cemilan garing dan tipis rasa matcha yang siap menemani harimu!' jar='20' image={matchaCrispy} reverse={true} />
        </div>
        <div className={style.card_crispy}>
          <Types title='Chocolate' desc='Cemilan garing dan tipis rasa vanilla yang siap menemani harimu!' jar='20' image={chocoCrispy} />
        </div>
      </div>
      <div className={style.meringue_bg}>
        <h3 className={style.meringue_title}>Meringue</h3>
        <div className={style.card_mer}>
          <Types title='Strawberry' desc='Cemilan manis dan lumer di setiap gigitannya dengan rasa strawberry.' jar='20' image={stroberiMer} />
        </div>
        <div className={style.card_mer}>
          <Types title='Classic' desc='Cemilan manis dan lumer di setiap gigitannya dengan rasa original.' jar='20' image={classicMer} reverse={true} />
        </div>
        <div className={style.card_mer}>
          <Types title='Matcha' desc='Cemilan manis dan lumer di setiap gigitannya dengan rasa matcha.' jar='20' image={matchaMer} />
        </div>
        <div className={style.card_mer}>
          <Types title='Chocolate' desc='Cemilan manis dan lumer di setiap gigitannya dengan rasa coklat.!' jar='20' image={chocoMer} reverse={true} />
        </div>
      </div>
      <Bottom />
    </div>
  )
}

export default Main