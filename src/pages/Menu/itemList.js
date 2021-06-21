import tw from '../../helpers/tailwind';

export const ItemName = (props) => {
  return <h2 className={tw('pb-0.5', props.className)}>{props.children}</h2>;
};

export const ItemDescription = (props) => {
  return (
    <p
      className={tw(
        'text-uni-green',
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
        'bg-gray-200',
        'rounded-full',
        'px-3 py-1',
        'text-sm',
        'font-semibold',
        'text-gray-700',
        'mr-2 mb-2',
        props.className
      )}
    >
      {props.children}
    </span>
  );
};

export const DefaultListType = (props) => {
  return (
    <div
      className={tw(
        'flex flex-col',
        'border-2',
        'rounded-lg',
        'shadow-md',
        'px-4 py-2',
        'm-2',
        'w-full sm:w-1/3 md:w-1/4'
      )}
    >
      <ItemName>{props.name}</ItemName>
      <ItemDescription>{props.description}</ItemDescription>
      <div>
        <ItemPrice>£{props.price}</ItemPrice>
      </div>
    </div>
  );
};

export const ColumnListType = (props) => {
  const items = props.items;

  let list = items.map((item) => {
    let itemPrices = [];
    for (const [key, value] of Object.entries(item.prices)) {
      itemPrices.push(
        <ItemPrice>
          {key} : £{value}
        </ItemPrice>
      );
    }

    return (
      <div
        className={tw(
          'flex flex-col',
          'border-2',
          'rounded-lg',
          'shadow-md',
          'px-4 py-2',
          'm-2',
          'w-full sm:w-1/3 md:w-1/4'
        )}
      >
        <ItemName>{item.name}</ItemName>
        <ItemDescription>{item.description}</ItemDescription>
        <div>{itemPrices}</div>
      </div>
    );
  });

  return [list];
};
