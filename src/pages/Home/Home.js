import { Element } from 'react-scroll';
import React from 'react';
import { Content } from '../../components/UI/Content';
import { Header, SubHeader } from '../../components/UI/headers';
import tw from '../../helpers/tailwind';
import burger from '../../images/burger.png';

const Home = () => {
  return (
    <Element name="home">
      <Content className="text-center">
        <Header className="text-uni-green">
          We are a family run business who take pride in serving you the best
          quality food.
        </Header>
        <SubHeader>
          With a range of foods including pizzas, burgers, kebabs and southern
          fried chicken, you're sure to find something to satisfy your appetite!
        </SubHeader>
      </Content>
      <img className={tw('object-cover w-full')} src={burger} alt="burgers" />
    </Element>
  );
};

export default Home;
