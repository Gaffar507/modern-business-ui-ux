import React from 'react';
import styles from '../style'
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section id='contact' className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-10`}>
      {/* upper links start */}
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>

        <div className='flex-1 flex justify-center items-center ss:items-start flex-col md:mb-0 mb-10'>
              <img src={logo} alt="logo" className='object-contain w-[266px] mb-8' />
              <p className='font-poppins text-dimWhite text-[15px] px-8'>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[2] flex sm:justify-around flex-wrap w-full'>

            {footerLinks.map((links, index)=>(
              <div key={index} className='flex-col mx-5 mb-10 sm:mb-0' >
                <h4 className='text-white font-poppins font-semibold mb-5 text-[20px]'>{links.title}</h4>
                <ul>
                  {links.links.map((link, index)=>(
                    <li key={index} className='leading-[33px]'
                    ><a className='cursor-pointer font-normal text-dimWhite'
                    href={link.link}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
            ))}

        </div>
      </div>
      {/* upper links end */}

      {/* social link starts */}
      <div className='w-full flex items-center flex-col'>
          <hr className='w-[100%] h-[100%] opacity-[.2] p-[.1px] mx-10 bg-dimWhite'/>

          <div className='flex w-full flex-col md:flex-row justify-between items-center mt-8 sm:mt-10'>

              <cite className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite'>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</cite>

              <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index)=>
                  <img 
                  key={index}
                  src={social.icon} alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={()=>window.open(social.link)}
                  />
              )}
              </div>
          </div>
      </div>
      {/* social link end */}

    </section>
  )
}

export default Footer
