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
        <div className='gpt3-navbar-links-container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default NavBar