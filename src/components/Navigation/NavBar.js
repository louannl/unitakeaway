import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <header>
      <div>Logo goes here</div>
      <div>
        <Link to="home" smooth={true}>
          Home
        </Link>
        <Link to="menu" smooth={true}>
          Menu
        </Link>
        <Link to="contact-us" smooth={true}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
