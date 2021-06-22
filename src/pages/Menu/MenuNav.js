import { Link } from 'react-scroll';
import { menuItems } from '../../uniMenuItems';
import tw from '../../helpers/tailwind';

const MenuNav = () => {
  const listItems = Object.keys(menuItems).map((name) => {
    return (
      <Link
        className={tw(
          'block',
          'cursor-pointer',
          'border-l-2 px-4 py-2',
          'font-thin',
          'ml-2',
          'hover:border-uni-black',
          'hover:font-black'
        )}
        activeClass="border-uni-black font-black"
        spy={true}
        to={menuItems[name].label}
        smooth={true}
        offset={-150}
      >
        {menuItems[name].label}
      </Link>
    );
  });

  return <div className="w-1/3 sticky top-24 hidden sm:block">{listItems}</div>;
};

export default MenuNav;
