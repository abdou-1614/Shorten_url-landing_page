import React from 'react'
import BgMobile from '../images/bg-boost-mobile.svg'
import BgDesktop from '../images/bg-boost-desktop.svg'
const Boost = () => {
  return (
    <>
    <section className='boost relative'>
        <picture>
            <source media='(min-width: 768px)' srcSet={BgDesktop} />
            <img src={BgMobile} alt='mobile' />
        </picture>
        <div className='flex items-center justify-center flex-col'>
            <h2 className='mb-5 text-3xl md:text-4xl text-center text-white font-bold'>Boost Your Link Today</h2>
            <button className='btn-cta rounded-full'> Get Started </button>
        </div>
    </section>
    </>
  )
}

export default Boost