import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import tw from '../../helpers/tailwind';
import { menuItems } from '../../uniMenuItems';

const MenuItemHeader = (props) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{props.children}</h1>
      <AiFillCaretDown />
    </div>
  );
};

const MenuItemList = (props) => {
  return (
    <div className={tw('border-2', 'rounded-lg', 'shadow-md', 'px-4 py-2')}>
      <h2 className="">{props.name}</h2>
      <p className="text-uni-green italic text-sm">{props.description}</p>
      <span
        className={tw(
          'inline-block',
          'bg-gray-200',
          'rounded-full',
          'px-3 py-1',
          'text-sm',
          'font-semibold',
          'text-gray-700',
          'mr-2 mb-2'
        )}
      >
        £{props.price}
      </span>
    </div>
  );
};

const MenuItems = () => {
  let menu = [];
  for (const [key, value] of Object.entries(menuItems)) {
    let items = [];
    if (value.items) {
      items = value.items.map((item) => {
        return (
          <MenuItemList
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      });
    }

    menu.push(
      <React.Fragment>
        <MenuItemHeader>{value.label}</MenuItemHeader>
        {items}
      </React.Fragment>
    );
  }

  return <div className="w-full">{menu}</div>;
};

export default MenuItems;
