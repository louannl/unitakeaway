import tw from '../../helpers/tailwind';

const MinOrder = (props) => {
  return (
    <div
      className={tw(
        'border-2',
        'border-uni-green',
        'shadow-md',
        'rounded-lg',
        'text-center',
        'm-2'
      )}
    >
      <p>{props.counties}</p>
      <p className="text-uni-red">MINIMUM ORDER £{props.minimum}</p>
      <p className="font-semibold">+ £{props.charge} Delivery charge</p>
    </div>
  );
};

export default MinOrder;
