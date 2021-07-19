import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiOutlinePhone,
} from 'react-icons/ai';
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
          'm-2',
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
      <div className="bg-uni-red w-full p-1 hidden md:flex items-center justify-center">
        <p>Open from 4pm daily | Delivery till 2AM - 7 days a week |</p>
        <div className="flex hover:text-gray-500">
          <AiOutlinePhone className="text-2xl mx-1" />
          <a href="tel:+44-1443-40559">01443 405599 |</a>
        </div>
        <div
          className="flex cursor-pointer hover:text-blue-800"
          onClick={() =>
            window.open('https://www.facebook.com/UniTakeaway102/')
          }
        >
          <AiFillFacebook className="text-2xl mx-1" />
          Like us!
        </div>
      </div>
    </header>
  );
};

export default NavBar;
