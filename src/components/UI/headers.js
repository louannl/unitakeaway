import tw from '../../helpers/tailwind';

export const Header = (props) => {
  return (
    <h1
      className={tw(
        'font-Courgette',
        'text-4xl',
        'text-center',
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};
