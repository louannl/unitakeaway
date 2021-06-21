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
        {menuItems[name].label}
      </li>
    );
  });

  return (
    <div className="w-1/3">
      <ul>{listItems}</ul>
    </div>
  );
};

export default MenuNav;
