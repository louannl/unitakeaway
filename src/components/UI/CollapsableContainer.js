import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';

const CollapsableContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyle = 'text-uni-green text-2xl';

  return (
    <div>
      <Element name={props.name}>
        <div
          className={tw(
            'flex',
            'items-center',
            'justify-between',
            'sticky top-16 md:static',
            'bg-white',
            'border-b-2',
            'border-uni-green'
          )}
          onClick={toggleCollapse}
        >
          <h1 className="font-Courgette text-2xl font-bold mt-4 text-center w-full">
            {props.name}
          </h1>
          {isOpen ? (
            <AiFillCaretDown className={iconStyle} />
          ) : (
            <AiFillCaretUp className={iconStyle} />
          )}
        </div>
        <div className={`${isOpen ? 'hidden' : 'block'}`}>{props.children}</div>
      </Element>
    </div>
  );
};

export default CollapsableContainer;
