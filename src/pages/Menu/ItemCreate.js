import { SubHeader } from '../../components/UI/headers';
import tw from '../../helpers/tailwind';
import { DefaultListType } from './itemList';

const ItemCreate = (props) => {
  const item = props.item;
  let itemOptions = [];
  let description = [];
  let deals = '';

  for (const [key, value] of Object.entries(item)) {
    console.log('key:', key, 'value:', value);
    if (key === 'items') {
      deals = <DefaultListType items={value} />;
    } else if (key === 'description') {
      description = value;
    } else {
      let list = value.join(', ');

      itemOptions.push(
        <div
          className={tw(
            'rounded-md',
            'bg-uni-green',
            'm-2',
            'text-center',
            'shadow-md'
          )}
        >
          <p className="capitalize italic font-semibold text-white">
            Pick your {key}!
          </p>
          <div className="text-white italic">{list}</div>
        </div>
      );
    }
  }

  return (
    <div
      className={tw(
        'w-full',
        'flex flex-wrap',
        'items-stretch',
        'content-start',
        'justify-around',
        'rounded-md',
        'shadow-lg',
        'bg-white',
        'border-2',
        'm-2 p-2'
      )}
    >
      <SubHeader className="text-uni-red text-center underline w-full">
        Create your own!
      </SubHeader>
      <p
        className={tw(
          'font-Courgette',
          'mt-2',
          'mx-4',
          'w-full',
          'text-center'
        )}
      >
        {description}
      </p>
      <div className={tw('w-full', 'justify-around')}>{itemOptions}</div>
      {deals}
    </div>
  );
};

export default ItemCreate;
