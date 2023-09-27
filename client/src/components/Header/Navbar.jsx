import './navbar.css'
import Logon from '../Logon/Logon';
import Searchbar from '../SearchBar/Searchbar';
import Logo from "./Logo"

const Navbar = () => {
  return (
   <>
   <div className='navbar'>
  <Logo />
  <Searchbar />
  <Logon />
   </div>
   </>
  )
}

export default Navbar