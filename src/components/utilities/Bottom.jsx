import React from 'react'
import style from '../../styles/Bottom.module.css'
import Feedback from './Feedback'
import Footer from './Footer'

const Bottom = () => {
  return (
    <div className={style.bottom}>
      <Feedback />
      <Footer />
    </div>
  )
}

export default Bottom