import React, { useEffect, useState } from 'react'
import BgMobile1 from '../images/bg-boost-mobile.svg'
import BgDesktop from '../images/bg-boost-desktop.svg'

const getlocalStorage = () => {
  let link = localStorage.getItem('links')

  if (link) {
    return JSON.parse(localStorage.getItem('links'))
  }else {
    return []
  }
}

const Shortner = () => {

  const [text, setText] = useState('')
  const [link, setLink] = useState(getlocalStorage())
  const [buttonText, setButtonText] = useState('Copy')
  const handelClick = (e) => {
    e.preventDefault()
    if(!text) {
      alert('Enter Link Please !')
    }else {
      const ShortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data =  await res.json()
        console.log(data.result)
        setLink(data.result)
        setText('')
      }
      ShortenLink()
    }
  }
  const handelCopier = () => {
    navigator.clipboard.writeText(link.short_link)
        setButtonText('Copied !')
  }
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(link))
  }, [link])

  return (
    <>
    <section className='max-width short relative'>
        <picture>
            <source media='(min-width: 768px)' srcSet={BgDesktop} />
            <img src={BgMobile1} alt='mobile' />
        </picture>
        <form className='form' onSubmit={handelClick} >
            <div className='flex flex-col md:flex-row'>
                <input
                 type='url'
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder='Shorten A Link Here' className='w-full py-2 px-5 outline-none rounded-lg mb-2 md:mb-0 md:w-2/3 md:ml-7 ' />
                <button onClick={handelClick} type='submit' className='btn-cta rounded-lg w-full md:w-40 md:ml-8 ' >Shorten It</button>
            </div>
        </form>
        <div className='flex flex-col items-center justify-center text-center bg-white md:flex-row md:justify-between
        md:px-3 md:py-2 mt-3 shadow-sm rounded-lg' >
          <article>
            <h6 className='mb-2 md:mb-0'>{link.original_link}</h6>
          </article>
          <article>
            <ul className='md:flex md:items-center '>
              <li className='md:mr-5'><button className='text-cyan-500 mb-2 md:mb-0' >{link.short_link}</button></li>
              <li><button onClick={handelCopier} className='btn-cta rounded text-sm mb-2 focus:bg-slate-800 ' >{buttonText}</button></li>
            </ul>
          </article>
        </div>
    </section>
    </>
  )
}

export default Shortner