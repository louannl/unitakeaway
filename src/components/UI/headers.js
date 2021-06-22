import tw from '../../helpers/tailwind';

export const Header = (props) => {
  return (
    <h1
      className={tw(
        'font-Courgette',
        'text-4xl',
        'text-center',
        'mt-8',
        'mx-2',
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

export const SubHeader = (props) => {
  return (
    <h1
      className={tw(
        'font-Courgette',
        'text-xl',
        'mt-2',
        'mx-4',
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};
