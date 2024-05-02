import React from 'react'
import styles from '../style'
import { stats} from '../constants'

const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
      {stats.map((stat, index)=>
        (<div key={stat.id} className='flex-1 flex flex-row items-center justify-start sm:justify-center m-[5px] sm:m-0'>
          <h1 className='font-poppins font-semibold xs:text-[30.89px] sm:text-[40.89px] text-[30.89px] xs:leading-[53.53px] leading-[43.16px] text-white'>{stat.value}</h1>
          <p className='font-poppins font-normal text-gradient xs:text-[15.5px] sm:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] ml-3'>{stat.title}</p>
          {index === stats.length -1 ? '' : <span className='text-dimWhite ml-10 hidden sm:flex'>|</span>}
        </div> 
      ))}
    </section>
  )


export default Stats
