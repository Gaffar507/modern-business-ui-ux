import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* gradient */}
      <div className='absolute z-[0] testimonials__gradient w-[20%] h-[80%] right-[-110px]'/> 

      {/* title */}
      <div className='w-full flex items-center justify-between flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='hidden md:block' /> saying about us</h2>
        <p className={`${styles.paragraph} w-full mt-6 sm:mt-0`}>Everything you need to accept card payments <br className='hidden sm:block'/> and grow your business anywhere on the planet.</p>
      </div>

      {/* testimonials */}
      <div className='flex flex-wrap justify-center md:justify-around w-full feedback-container relative z-[1]'>
        {feedback.map((card, index)=> <FeedbackCard key={index} {...card} index={index}/>)}
      </div>
    </section>
  )
}

export default Testimonials
 