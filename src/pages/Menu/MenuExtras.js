import tw from '../../helpers/tailwind';
import { ItemPrice } from './itemList';

const MenuExtras = (props) => {
  const extras = props.extras;

  let extraItems = extras.map((extra) => {
    return (
      <div className="flex flex-wrap italic justify-around items-center">
        <p className="text-uni-green">ADD: </p>
        <p className="mx-1">{extra.name}</p>
        {extra.price ? <ItemPrice>+£{extra.price}</ItemPrice> : null}
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
        'rounded-sm',
        'border-uni-green',
        'bg-white'
      )}
    >
      {extraItems}
    </div>
  );
};

export default MenuExtras;
