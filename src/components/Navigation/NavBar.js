import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import tw from '../../helpers/tailwind';
import NavItem from './NavItem';
import logo from '../../images/logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyle = 'text-2xl';

  return (
    <header
      className={tw(
        'sticky',
        'bg-uni-black',
        'text-white',
        'top-0',
        'inset-x-0',
        'z-50',
        'text-center'
      )}
    >
      <div
        className={tw(
          'flex flex-wrap',
          'justify-around',
          'items-center',
          'm-1',
          'max-w-screen-lg sm:mx-auto mx-0'
        )}
      >
        <div className="flex flex-wrap items-center justify-between">
          <img className="h-14 w-auto m-2" src={logo} alt="logo" />
          <div className="sm:hidden">
            <button type="button" className="text-white" onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className={iconStyle} />
              ) : (
                <AiOutlineMenu className={iconStyle} />
              )}
            </button>
          </div>
        </div>
        <div
          className={tw(
            'text-2xl',
            'sm:flex',
            'items-center',
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
