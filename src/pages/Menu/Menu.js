import { Element } from 'react-scroll';
import { Content } from '../../components/UI/Content';
import MenuNav from './MenuNav';
import MenuItems from './MenuItems';

const Menu = () => {
  return (
    <Content>
      <Element name="menu">
        <div className="flex items-start">
          <MenuNav />
          <MenuItems />
        </div>
      </Element>
    </Content>
  );
};

export default Menu;
