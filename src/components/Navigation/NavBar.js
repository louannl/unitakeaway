import tw from '../../helpers/tailwind';
import NavItem from './NavItem';
import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <header
      className={tw(
        'fixed',
        'bg-uni-black',
        'text-white',
        'top-0',
        'inset-x-0',
        'z-50'
      )}
    >
      <div className="flex justify-between items-center m-1">
        <img className="h-14 w-auto" src={logo} alt="logo" />
        <div className={tw('text-2xl')}>
          <NavItem link="home">Home</NavItem>
          <NavItem link="menu">Menu</NavItem>
          <NavItem link="contact-us">Contact Us</NavItem>
        </div>
      </div>
      <div className="bg-uni-red w-full p-1">
        Open from 4pm daily | Delivery till 2AM - 7 days a week
      </div>
    </header>
  );
};

export default NavBar;
