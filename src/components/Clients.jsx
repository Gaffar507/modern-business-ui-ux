import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 mb-[80px]`}>
      <div className='flex flex-wrap justify-around items-center w-full px-0 sm:px-10'>
        {clients.map((client, index)=>
        <div key={client.id} className={`flex items-center ${ index === 1 ? 'w-[220.25px]  h-[60px]' : 'w-[192.25px]  h-[60px]' } brand-hover mx-2`} >
          <img src={client.logo} alt="client" className={`${ index === 1 ? 'w-[95%] sm:w-[100%]' :'w-[80%] sm:w-[100%]'} object-contain`} />
        </div>
          )}
      </div>
    </section>
  )
}

export default Clients
