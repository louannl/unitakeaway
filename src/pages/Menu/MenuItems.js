import React from 'react';
import { menuItems } from '../../uniMenuItems';
import { Header, SubHeader } from '../../components/UI/headers';
import { DealListType, DefaultListType } from './itemList';
import ItemCreate from './ItemCreate';
import MenuExtras from './MenuExtras';
import MenuImages from './MenuImages';
import CollapsableContainer from '../../components/UI/CollapsableContainer';

const MenuItems = () => {
  let menu = [];
  for (const [key, value] of Object.entries(menuItems)) {
    let items = [];
    let images = [];
    let extraItems = [];
    let create = [];

    if (!value.type && value.items.length > 0) {
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

    if (value.create) {
      create = <ItemCreate item={value.create} />;
    }

    menu.push(
      <CollapsableContainer name={value.label}>
        <SubHeader className="text-uni-black">{value.description}</SubHeader>
        {images}
        {extraItems}
        <div className="flex flex-wrap items-stretch content-start justify-between">
          {items}
        </div>
        <div className="flex flex-wrap items-stretch content-start justify-between">
          {create}
        </div>
      </CollapsableContainer>
    );
  }

  return (
    <div className="w-full">
      <Header className="text-uni-red">Menu</Header>
      {menu}
    </div>
  );
};

export default MenuItems;
