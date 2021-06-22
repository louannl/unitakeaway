import { Element } from 'react-scroll';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import tw from '../../helpers/tailwind';
import { menuItems } from '../../uniMenuItems';
import { SubHeader } from '../../components/UI/headers';
import { ColumnListType, DefaultListType } from './itemList';
import MenuImages from './MenuImages';

const MenuItemHeader = (props) => {
  return (
    <div className="flex items-center justify-between">
      <Element name={props.name} />
      <h1 className="text-2xl font-bold">{props.children}</h1>
      <AiFillCaretDown />
    </div>
  );
};

const MenuItems = () => {
  let menu = [];
  for (const [key, value] of Object.entries(menuItems)) {
    let items = [];
    let images = [];

    if (!value.type) {
      items = value.items.map((item) => {
        return (
          <DefaultListType
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      });
    }

    if (value.type === 'column' && value.items.length > 0) {
      items = <ColumnListType label={value.label} items={value.items} />;
    }

    if (value.images) {
      images = <MenuImages images={value.images} />;
    }

    menu.push(
      <React.Fragment>
        <MenuItemHeader name={value.label}>{value.label}</MenuItemHeader>
        <SubHeader className="text-uni-black border-b-2 border-uni-green">
          {value.description}
        </SubHeader>
        {images}
        <div className="flex flex-wrap items-stretch content-start">
          {items}
        </div>
      </React.Fragment>
    );
  }

  return <div className="w-full">{menu}</div>;
};

export default MenuItems;
