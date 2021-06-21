import { Content } from '../../components/UI/Content';
import MenuNav from './MenuNav';
import MenuItems from './MenuItems';
import { Header } from '../../components/UI/headers';
// import tw from '../../helpers/tailwind';

const Menu = () => {
  return (
    <Content>
      <Header className="text-uni-red">Menu</Header>
      <div className="flex">
        <MenuNav />
        <MenuItems />
      </div>
    </Content>
  );
};

export default Menu;
