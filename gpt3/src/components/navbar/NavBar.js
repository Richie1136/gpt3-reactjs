import './NavBar.css'
import { RiMenu3LIne, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className='gpt3-navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default NavBar