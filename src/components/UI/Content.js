import tw from '../../helpers/tailwind';

export const Content = (props) => {
  return (
    <div
      className={tw(
        props.className,
        'max-w-screen-lg',
        'xl:max-w-screen-xl',
        'mx-auto',
        'pb-8'
      )}
    >
      {props.children}
    </div>
  );
};
