import React from 'react'
import style from '../../styles/Bottom.module.css'
import { BsArrowDownCircle, BsSuitHeart, BsArrowUpCircle } from 'react-icons/bs'

const Feedback = () => {
  const [openForm, setOpenForm] = React.useState(false)
  return (
    <div>
      <button className={openForm ? `${style.btn} ${style.true}` : `${style.btn} ${style.false}`} onClick={() => setOpenForm((state) => !state)}>
        Feedback
        {openForm ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
      </button>
      {/* TODO: buat bagian dropdown listnya */}
      {openForm &&
        <form className={style.form}>
          <div className={style.container_form}>
            <div className={style.form_control}>
              <label className={style.label}>Name</label>
              <input type="text" placeholder='Input your name' />
            </div>
            <div className={style.form_control}>
              <label className={style.label}>Phone</label>
              <input type="text" placeholder='08xxxxxxxxxx' />
            </div>
            <div className={style.form_control}>
              <label className={style.label}>What can i improve?</label>
              <textarea type="text" placeholder='Write down your experience :)' />
            </div>
            <div className={style.rate}>
              <span className={style.text_rate}>Give us rate !</span>
              <BsSuitHeart className={style.heart} />
              <BsSuitHeart className={style.heart} />
              <BsSuitHeart className={style.heart} />
              <BsSuitHeart className={style.heart} />
              <BsSuitHeart className={style.heart} />
            </div>
            <button className={style.submit}>Submit</button>
          </div>
        </form>
      }
    </div>
  )
}

export default Feedback