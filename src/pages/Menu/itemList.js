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
      £{props.children}
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
      <ItemPrice>{props.price}</ItemPrice>
    </div>
  );
};

export const ColumnListType = (props) => {
  const items = props.items;

  const headers = Object.keys(items[0].prices).map((head) => {
    return <th>{head}</th>;
  });

  const tableContent = items.map((item) => {
    const prices = Object.values(item.prices);
    let priceContent = prices.map((price) => {
      return (
        <td>
          <ItemPrice>{price}</ItemPrice>
        </td>
      );
    });

    return (
      <tr className="border-b-2">
        <td>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
        </td>
        {priceContent}
      </tr>
    );
  });

  return (
    <table className="table-auto">
      <tr>
        <th>{props.label}</th>
        {headers}
      </tr>
      {tableContent}
    </table>
  );
};
