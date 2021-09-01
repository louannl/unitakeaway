import React from 'react';
import { SubHeader } from '../../components/UI/headers';
import tw from '../../helpers/tailwind';

export const ItemName = (props) => {
  return (
    <h2 className={tw('pb-0.5', 'font-semibold', props.className)}>
      {props.children}
    </h2>
  );
};

export const ItemDescription = (props) => {
  return (
    <p
      className={tw(
        'text-gray-700',
        'italic',
        'text-sm',
        'pb-0.5',
        'flex-grow',
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export const ItemPrice = (props) => {
  return (
    <span
      className={tw(
        'inline-block',
        'border-2',
        'bg-green-100',
        'border-green-200',
        'rounded-md',
        'px-3 py-1',
        'text-sm',
        'mx-1 my-1',
        'capitalize',
        props.className
      )}
    >
      {props.children}
    </span>
  );
};

export const DefaultListType = (props) => {
  const items = props.items;

  let list = items.map((item) => {
    let itemPrices = [];

    if (item.prices) {
      for (const [key, value] of Object.entries(item.prices)) {
        itemPrices.push(
          <ItemPrice key={key}>
            {key} : £{value}
          </ItemPrice>
        );
      }
    }

    return (
      <div
        className={tw(
          'flex flex-col',
          'border-2',
          'rounded-sm',
          'shadow-md',
          'px-4 py-2',
          'm-2',
          'text-center',
          'w-full sm:w-3/7 md:w-2/7',
          'bg-white',
          props.className
        )}
        key={item.name}
      >
        {item.deal ? (
          <p className="text-center underline font-Courgette font-semibold text-uni-red">
            {item.deal}
          </p>
        ) : null}
        <ItemName>{item.name}</ItemName>
        <ItemDescription>{item.description}</ItemDescription>
        <div>
          {itemPrices.length > 0 ? (
            itemPrices
          ) : (
            <ItemPrice>£{item.price}</ItemPrice>
          )}
        </div>
      </div>
    );
  });

  return [list];
};

export const DealListType = (props) => {
  const items = props.items;
  let menuDeals = [];

  for (const [key, value] of Object.entries(items)) {
    let deals = <DefaultListType items={value} className="border-uni-green" />;

    menuDeals.push(
      <div
        className={tw(
          'w-full flex flex-wrap',
          'items-stretch content-start justify-around'
        )}
        key={key}
      >
        <SubHeader className="text-center underline w-full">{key}</SubHeader>
        {deals}
      </div>
    );
  }

  return [menuDeals];
};
