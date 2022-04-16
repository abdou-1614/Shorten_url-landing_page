import React from 'react'
import BgMobile1 from '../images/bg-boost-mobile.svg'
import BgDesktop from '../images/bg-boost-desktop.svg'
const Shortner = () => {
  return (
    <>
    <section className='max-width short relative'>
        <picture>
            <source media='(min-width: 768px)' srcSet={BgDesktop} />
            <img src={BgMobile1} alt='mobile' />
        </picture>
        <form className='form'>
            <div className='flex flex-col md:flex-row'>
                <input type='url' placeholder='Shorten A Link Here' className='w-full py-2 px-5 outline-none rounded-lg mb-2 md:mb-0 md:w-2/3 md:ml-7 ' />
                <button type='submit' className='btn-cta rounded-lg w-full md:w-40 md:ml-8 ' >Shorten It</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Shortner