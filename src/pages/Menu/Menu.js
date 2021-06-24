import { Element } from 'react-scroll';
import { Content } from '../../components/UI/Content';
import MenuNav from './MenuNav';
import MenuItems from './MenuItems';
import { Header } from '../../components/UI/headers';
// import tw from '../../helpers/tailwind';

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
