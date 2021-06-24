import React from 'react';
import { menuItems } from '../../uniMenuItems';
import { SubHeader } from '../../components/UI/headers';
import { DealListType, DefaultListType } from './itemList';
import MenuExtras from './MenuExtras';
import MenuImages from './MenuImages';
import CollapsableContainer from '../../components/UI/CollapsableContainer';

const MenuItems = () => {
  let menu = [];
  for (const [key, value] of Object.entries(menuItems)) {
    let items = [];
    let images = [];
    let extraItems = [];

    if (!value.type && value.items.length > 0) {
      items = <DefaultListType items={value.items} />;
    }

    if (value.type === 'column' && value.items.length > 0) {
      items = <DefaultListType items={value.items} />;
    }

    if (value.type === 'deals' && value.items !== null) {
      items = <DealListType items={value.items} />;
    }

    if (value.images) {
      images = <MenuImages images={value.images} />;
    }

    if (value.extras) {
      extraItems = <MenuExtras extras={value.extras} />;
    }

    menu.push(
      <CollapsableContainer name={value.label}>
        <SubHeader className="text-uni-black">{value.description}</SubHeader>
        {images}
        {extraItems}
        <div className="flex flex-wrap items-stretch content-start justify-between">
          {items}
        </div>
      </CollapsableContainer>
    );
  }

  return <div className="w-full">{menu}</div>;
};

export default MenuItems;
