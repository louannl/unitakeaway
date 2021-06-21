import tw from '../../helpers/tailwind';
import NavItem from './NavItem';
import logo from '../../images/logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

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
        <div className="sm:hidden">
          <button type="button" className="text-white" onClick={toggleMenu}>
            {isOpen ? <p>X</p> : <p>Open</p>}
          </button>
        </div>
        <div
          className={tw(
            'text-2xl',
            'sm:flex',
            `${isOpen ? 'block' : 'hidden'}`
          )}
        >
          <NavItem link="home">Home</NavItem>
          <NavItem link="menu">Menu</NavItem>
          <NavItem link="contact-us">Contact Us</NavItem>
        </div>
      </div>
      <div className="bg-uni-red w-full p-1 hidden md:block">
        Open from 4pm daily | Delivery till 2AM - 7 days a week
      </div>
    </header>
  );
};

export default NavBar;
