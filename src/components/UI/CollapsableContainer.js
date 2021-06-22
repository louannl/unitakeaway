import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Element } from 'react-scroll';

const CollapsableContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between"
        onClick={toggleCollapse}
      >
        <Element name={props.name} />
        <h1 className="text-2xl font-bold">{props.name}</h1>
        {isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <div className={`${isOpen ? 'hidden' : 'block'}`}>{props.children}</div>
    </div>
  );
};

export default CollapsableContainer;
