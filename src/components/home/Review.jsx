import React from 'react'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import nancy from '../../images/nancy.png'
import nancyReview from '../../images/nancyReview.png'
import anis from '../../images/anis.png'
import anisReview from '../../images/anisReview.png'
import miftah from '../../images/miftah.png'
import miftahReview from '../../images/miftahReview.png'
import fakhira from '../../images/fakhira.png'
import fakhiraReview from '../../images/fakhiraReview.png'
import style from '../../styles/Review.module.css'

const Review = () => {
  let slideIndex = 1

  const handleSlide = (n) => {
    console.log(n)
    const carousels = document.querySelectorAll('.carousel')
    carousels.forEach((item) => {
      item.style.display = 'none'
    })
    if (n < 1) {
      slideIndex = carousels.length
    }
    if (n > carousels.length) {
      slideIndex = 1
    }
    carousels[slideIndex - 1].style.display = 'block'
    console.log(carousels)
  }

  const handleArrow = (n) => {
    handleSlide(slideIndex += n)
  }

  React.useEffect(() => {
    handleSlide(1)
  }, [])

  return (
    <div className={style.review}>
      <div className={style.slide}>
        <div className={`${style.carousell} ${style.fade} carousel`}>
          <div className={style.item}>
            <div className={style.profile}>
              <img src={nancy} alt="nancy" />
              <h3>Nancy</h3>
              <p>Mahasiswa PNJ,</p>
              <p>Administrasi Bisnis</p>
            </div>
            <img src={nancyReview} alt="nancyReview" className={style.cust_review} />
          </div>
          <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
        </div>
        <div className={`${style.carousell} ${style.fade} carousel`}>
          <div className={style.item}>
            <div className={style.profile}>
              <img src={anis} alt="nancy" />
              <h3>Anis</h3>
              <p>Mahasiswa PNJ,</p>
              <p>Administrasi Bisnis</p>
            </div>
            <img src={anisReview} alt="nancyReview" className={style.cust_review} />
          </div>
          <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
        </div>
        <div className={`${style.carousell} ${style.fade} carousel`}>
          <div className={style.item}>
            <div className={style.profile}>
              <img src={miftah} alt="nancy" />
              <h3>Miftah</h3>
              <p>Mahasiswa PNJ,</p>
              <p>Administrasi Bisnis</p>
            </div>
            <img src={miftahReview} alt="nancyReview" className={style.cust_review} />
          </div>
          <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
        </div>
        <div className={`${style.carousell} ${style.fade} carousel`}>
          <div className={style.item}>
            <div className={style.profile}>
              <img src={fakhira} alt="nancy" />
              <h3>Fakhira</h3>
              <p>Mahasiswa PNJ,</p>
              <p>Administrasi Bisnis</p>
            </div>
            <img src={fakhiraReview} alt="nancyReview" className={style.cust_review} />
          </div>
          <a href='https://www.instagram.com/nyummyl/' target='_blank' rel='noreferrer' className={style.btn}><FaInstagram /> See More</a>
        </div>
        <BsChevronDoubleLeft className={style.prev} onClick={() => handleArrow(-1)} />
        <BsChevronDoubleRight className={style.next} onClick={() => handleArrow(1)} />
      </div>
    </div>
  )
}

export default Review