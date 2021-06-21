import { menuItems } from '../../uniMenuItems';
import tw from '../../helpers/tailwind';

const MenuList = () => {
  const listItemNames = Object.keys(menuItems);
  const listItems = listItemNames.map((name) => {
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
        {name}
      </li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default MenuList;
