import React from 'react'

const Button = ({styles}) => {
  return (
<button type='button' className={`py-4 h-[51px] flex justify-center items-center px-6 rounded-lg bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} >
    Get Started
</button>
  )
}

export default Button
