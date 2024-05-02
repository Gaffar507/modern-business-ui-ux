import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>

        <div className={`${styles.flexCenter} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>Get</p>
            <img src={arrowUp} alt="arrow-up" className='w-[23px] h-[23] object-contain ml-2'/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>Started</p>
      </div>
    </div>
  )


export default GetStarted
