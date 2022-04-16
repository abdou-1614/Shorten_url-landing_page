import React from 'react'
import Logo from '../images/logo-w.svg'
import facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
const Footer = () => {
  return (
    <>
    <footer className='bg-slate-900 py-10 lg:py-20 px-20 md:px-0 '>
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 '>
            <article>
                <img src={Logo} alt='logo' />
            </article>
            <article>
                <h3 className='text-bold text-lg text-white tracking-wide '>Features</h3>
                <ul className='mt-2'>
                    <li><button className='text-sm text-slate-500 mt-1'>Links Shortening</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Branded Links</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Analytics</button></li>
                </ul>
            </article>
            <article>
                <h3 className='text-bold text-lg text-white tracking-wide '>Resources</h3>
                <ul className='mt-2'>
                    <li><button className='text-sm text-slate-500 mt-1'>Blog</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Developers</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Support</button></li>
                </ul>
            </article>
            <article>
                <h3 className='text-bold text-lg text-white tracking-wide '>Company</h3>
                <ul className='mt-2'>
                    <li><button className='text-sm text-slate-500 mt-1'>About</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Our Team</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Careers</button></li>
                    <li><button className='text-sm text-slate-500 mt-1'>Contact</button></li>
                </ul>
            </article>
            <article>
                <ul className='flex items-center'>
                <li><img src={facebook} alt='fb' /></li>
                <li className='ml-4'><img src={Instagram} alt='instagram'/></li>
                <li className='mx-5'><img src={pinterest} alt='pin' /></li>
                <li><img src={twitter} alt='twit' /></li>
                </ul>
            </article>
        </div>
    </footer>
    </>
  )
}

export default Footer