import React from 'react'
import showcase from '../images/illustration-working.svg'
const Showcase = () => {
  return (
    <>
    <section className='py-10 lg:py-20' >
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center '>
            <article className='text-center lg:text-left'>
                <h1 className='text-slate-800 text-5xl lg:text-6xl mb-5 font-bold' >More than just shorter links</h1>
                <p className='text-slate-400 mb-5 leading-6 lg:text-lg text-center md:text-center xl:text-left'>Build your brand’s recognition and get detailed  insights on how your links are performing.</p>
                <button className='btn-cta rounded-full'>Get Started</button>
            </article>
            <article className='ml-7'>
                <img src={showcase} alt='logo' />
            </article>
        </div>
    </section>
    </>
  )
}

export default Showcase