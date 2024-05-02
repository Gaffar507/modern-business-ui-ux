import React from 'react'
import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'

const Billing = () => (
    <section className={`${layout.sectionReverse}`}>
      {/* left image part starts*/}
      <div className={`${layout.sectionImgReverse} `}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />

        {/* gradient starts */}
        <div className='absolute left-[-95px] top-0 opacity-[.7] w-[50%] h-[50%] img__gradient rounded'/>
        <div className='absolute left-[-95px] top-[200px] opacity-[.6] w-[50%] h-[50%] img__p-gradient rounded'/>
        {/* gradient ends */}
      </div>
      {/* left image part ends*/}


      {/* right content part starts*/}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden'/> billing &
          invoicing
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_play" className='w-[128.86px] h-[42.05] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_play" className='w-[128.86px] h-[42.05] object-contain cursor-pointer' />
        </div>
      </div>
      {/* right content part ends */}
    </section>
  )


export default Billing
