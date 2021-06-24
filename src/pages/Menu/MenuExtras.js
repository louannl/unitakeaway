import tw from '../../helpers/tailwind';
import { ItemPrice } from './itemList';

const MenuExtras = (props) => {
  const extras = props.extras;

  let extraItems = extras.map((extra) => {
    return (
      <div className="flex flex-wrap italic justify-between items-center">
        <p className="text-uni-green">ADD: </p>
        <p className="mx-1">{extra.name}</p>
        <ItemPrice>+£{extra.price}</ItemPrice>
      </div>
    );
  });

  return (
    <div
      className={tw(
        'flex flex-wrap',
        'justify-around',
        'm-4',
        'border-2',
        'rounded-lg',
        'border-uni-green'
      )}
    >
      {extraItems}
    </div>
  );
};

export default MenuExtras;
