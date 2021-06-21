import { Link } from 'react-scroll';
import { menuItems } from '../../uniMenuItems';
import tw from '../../helpers/tailwind';

const MenuNav = () => {
  const listItems = Object.keys(menuItems).map((name) => {
    return (
      <li
        className={tw(
          'cursor-pointer',
          'border-l-2 px-4 py-2',
          'font-thin',
          'hover:border-l-4',
          'hover:border-uni-black',
          'hover:font-black'
        )}
      >
        <Link to={menuItems[name].label} smooth={true} offset={-150}>
          {menuItems[name].label}
        </Link>
      </li>
    );
  });

  return (
    <div className="w-1/3 sticky top-24">
      <ul className="">{listItems}</ul>
    </div>
  );
};

export default MenuNav;
