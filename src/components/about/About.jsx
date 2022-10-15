import React from 'react'
import style from '../../styles/About.module.css'
import nyummlEst from '../../images/nyummlEst.png'

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.upper}>
          <div className={style.upper_title}>
            <img src={nyummlEst} alt="nyumml" className={style.nyumml} />
          </div>
        </div>
        <div className={style.down}>
          <h3 className={style.text_title}>Have NYEMIL with COOKIES</h3>
          <p className={style.text}>
            Pada zaman milenial ini, kue kering merupakan salah satu cemilan yang digemari. Kala di saat kerja kita butuh cemilan manis untuk menghilangkan penat. Hal ini bisa kita lihat dari antusiasme pasar dengan produk-produk berbasis manis yang mencoklat dengan nilai jual yang cukup mahal dan tidak cocok dengan dompet para anak muda di zaman milenial ini. Maka dari itu kami hendak membuat produk ini dengan kreatif dan inovatif namun tetap murah sehingga memiliki nilai jual dan cita rasa yang bersaing. Disini kami berencana membuat cemilan kue kering dengan branding “Nyummyl” dan dengan slogan nya “Have NYEMIL with COOKIES” yang menggambarkan Nyummyl itu sendiri dengan keberagaman kue yang dijual serta variasi rasa yang tak kalah saing dari pesaingnya.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About