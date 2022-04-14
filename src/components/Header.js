import React from 'react'
import Logo from '../images/logo.svg'
const Header = () => {
  return (
    <>
    <header className='header max-width'>
        <div>
            <img src={Logo} alt='logo' />
            <nav>
            <ul>
                <li><button>Features</button></li>
                <li><button>Pricing</button></li>
                <li><button>Resources</button></li>
            </ul>
            </nav>
        </div>
        <ul>
        <li><button>Login</button></li>
        <li><button className='btn-cta rounded-full'>Sign Up</button></li>
        </ul>
    </header>
    </>
  )
}

export default Header