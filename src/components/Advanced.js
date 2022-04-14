import React from 'react'
import brand from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'
const Advanced = () => {
  return (
    <>
    <div className='bg-slate-100 py-10 lg:py-20 lg:pb-40 lg:pt-20'>
        <div className='max-width'>
            <h2 className='text-center font-semibold text-lg md:text-3xl text-slate-800'>Advanced Statistics</h2>
            <p className='text-center text-sm leading-6 text-slate-400 mt-3'>Track how your links are performing across the web with <br/> our 
            advanced statistics dashboard.</p>
            <div className=' card grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-20 px-7 md:px-0'>
                <div className='line'></div>
                <article className='bg-white p-4 rounded shadow-sm relative mb-7 lg:mb-0'>
                    <img className='-mt-12 p-3 bg-slate-700 rounded-full' src={brand} alt=''/>
                    <h3 className=' mt-6 text-bold font-bold mb-2.5 text-lg text-slate-800'>Brand Recognition</h3>
                    <p className=' text-sm leading-6 text-slate-400 mt-3'>Boost your brand recognition with <br/>each click. Generic links don’t mean a<br/> thing. Branded links help instil<br/>confidence in your content.</p>
                </article>
                <article className='bg-white p-4 rounded shadow-sm relative my-7 md:my-0'>
                    <img className='-mt-12 p-3 bg-slate-700 rounded-full' src={records} alt=''/>
                    <h3 className=' mt-6 text-bold font-bold mb-2 text-lg text-slate-800'>Detailed Records</h3>
                    <p className=' text-sm leading-6 text-slate-400 mt-3'>Gain insights into who is clicking your <br/>links. Knowing when and where <br/> people engage with your content<br/>helps inform better decisions.</p>
                </article>
                <article className='bg-white p-4 rounded shadow-sm my-7 md:my-0'>
                    <img className='-mt-12 p-3 bg-slate-700 rounded-full' src={fully} alt=''/>
                    <h3 className=' mt-6 text-bold font-bold mb-2 text-lg text-slate-800'>Fully Customizable</h3>
                    <p className=' text-sm leading-6 text-slate-400 mt-3'>Improve brand awareness and <br/>content discoverability through<br/> customizable links, supercharging<br/>audience engagement.</p>
                </article>
            </div>
        </div>
    </div>
    </>
  )
}

export default Advanced