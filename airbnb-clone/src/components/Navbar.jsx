import logo from '../../public/imgs/airbnb-logo.png'

export default function Navbar() {
    return (
      <nav className='w-full bg-white px-8 py-8 drop-shadow-md'>
        <img src={logo} alt="airbnb logo" className='w-20'/>
      </nav>
    )
  }
  