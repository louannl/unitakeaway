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
import { Content } from '../UI/Content';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyle = 'text-3xl';

  return (
    <header
      className={tw(
        'sticky',
        'bg-uni-black',
        'text-white',
        'top-0',
        'inset-x-0',
        'z-50'
      )}
    >
      <div
        className={tw(
          'max-w-screen-lg',
          'xl:max-w-screen-xl',
          'mx-auto',
          'sm:flex',
          'sm:justify-around',
          'items-center',
          'text-center',
          'text-2xl'
        )}
      >
        <div className="flex items-center justify-around">
          <img className="h-14 m-2 w-auto" src={logo} alt="logo" />
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose className={iconStyle} />
              ) : (
                <AiOutlineMenu className={iconStyle} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`px-2 pt-2 pb-4 ${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:p-0`}
        >
          <NavItem link="home">Home</NavItem>
          <NavItem link="menu">Menu</NavItem>
          <NavItem link="contact-us">Contact Us</NavItem>
        </div>
      </div>
      <div className="bg-uni-red w-full p-1 hidden md:flex items-center justify-center">
        <p>Open from 4pm daily | Delivery till 2AM - 7 days a week |</p>
        <div className="flex hover:text-gray-300">
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
