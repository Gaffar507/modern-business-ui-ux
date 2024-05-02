import React from 'react'
import styles from '../style'
import Button from './Button'
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow ${styles.marginY}` }>

      <div className='flex-1 '>
        <h2 className='flex font-poppins font-semibold text-[40px] sm:text-[48px] text-white' >Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
