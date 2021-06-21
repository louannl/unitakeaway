import tw from '../../helpers/tailwind';

export const ItemDescription = (props) => {
  return (
    <p className={tw('text-uni-green', 'italic', 'text-sm', props.className)}>
      {props.children}
    </p>
  );
};

export const ItemName = (props) => {
  return <h2 className={tw(props.className)}>{props.children}</h2>;
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
      <ItemPrice>£{props.price}</ItemPrice>
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
          {key}: £{value}
        </ItemPrice>
      );
    }

    return (
      <div
        className={tw(
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
        {itemPrices}
      </div>
    );
  });

  return [list];
};
