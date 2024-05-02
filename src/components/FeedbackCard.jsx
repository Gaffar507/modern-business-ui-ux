import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({index, content, title, name, img}) => (
    <div className={`flex justify-start flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 my-5 ${index===1? 'bg__featured': ''} feedback-card`}>
      <img src={quotes} alt="double_quote" className='object-contain w-[42.6px] h-[27.6px] ' />
      <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite w-full my-10'>{content}</p>

      <div className='flex flex-row justify-start w-full'>
        <img src={img} alt="client" className='object-contain w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )

export default FeedbackCard
