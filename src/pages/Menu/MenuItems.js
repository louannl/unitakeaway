import React from 'react';
import { menuItems } from '../../uniMenuItems';
import { SubHeader } from '../../components/UI/headers';
import { ColumnListType, DealListType, DefaultListType } from './itemList';
import MenuImages from './MenuImages';
import CollapsableContainer from '../../components/UI/CollapsableContainer';

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

    if (value.type === 'deals' && value.items !== null) {
      items = <DealListType items={value.items} />;
    }

    if (value.images) {
      images = <MenuImages images={value.images} />;
    }

    menu.push(
      <React.Fragment>
        <CollapsableContainer name={value.label}>
          <SubHeader className="text-uni-black border-b-2 border-uni-green">
            {value.description}
          </SubHeader>
          {images}
          <div className="flex flex-wrap items-stretch content-start justify-between">
            {items}
          </div>
        </CollapsableContainer>
      </React.Fragment>
    );
  }

  return <div className="w-full">{menu}</div>;
};

export default MenuItems;
