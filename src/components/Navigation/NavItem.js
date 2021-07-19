import { Link } from 'react-scroll';
import tw from '../../helpers/tailwind';

const NavItem = (props) => {
  return (
    <Link
      className={tw(
        'block',
        'cursor-pointer',
        'px-4 py-1',
        'sm:ml-2',
        'border-b-2',
        'border-transparent',
        'transform duration-500',
        'hover:text-uni-red',
        'hover:border-uni-red'
      )}
      activeClass="text-uni-red border-uni-red"
      to={props.link}
      spy={true}
      smooth={true}
      offset={-100}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
