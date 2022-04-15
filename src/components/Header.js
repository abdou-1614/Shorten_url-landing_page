import React, {useState} from 'react'
import Logo from '../images/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className='header max-width py-5 '>
        <div className='flex items-center justify-between'>
            <article className='flex items-center justify-between '>
            <img src={Logo} alt='logo' />
            <nav className='hidden md:block md:ml-5'>
            <ul className='flex items-start justify-start text-slate-400'>
                <li className='mt-6 md:mt-0'><button>Features</button></li>
                <li className='my-6 md:my-0 md:mx-5' ><button>Pricing</button></li>
                <li><button>Resources</button></li>
            </ul>
            </nav>
            </article>
            {isOpen && (
              <div className='absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 
              text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center'>
              <nav className='md:hidden'>
            <ul className='md:flex md:items-start md:justify-start'>
                <li className='mt-6 md:mt-0'><button>Features</button></li>
                <li className='my-6 md:my-0 md:mx-5' ><button>Pricing</button></li>
                <li><button>Resources</button></li>
            </ul>
            </nav>
            <ul className='md:flex md:items-center md:ml-5' >
              <div className='border-b mt-5 md:mt-0 border-gray-500 mx-5 md:mx-0 md:hidden'/>
              <li className='my-6 md:my-0 md:mr-7 text-slate-400 '>
                <button>Login</button>
                </li>
              <li>
                <button className=' btn-cta rounded-full mb-8 md:mb-0 w-[80%] md:w-[100%] md:px-4'>Sign Up</button>
                </li>
              </ul>
              </div>
            )}
            <button className='md:hidden' onClick={() => setIsOpen(!isOpen) } >{isOpen ? <VscChromeClose className='text-slate-400 text-2xl md:text-0'/> : <GiHamburgerMenu className='text-slate-400 text-2xl' />}</button>
        </div>
    </header>
    </>
  )
}

export default Header