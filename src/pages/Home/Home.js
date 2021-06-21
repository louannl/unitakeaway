import React from 'react';
import { Content } from '../../components/UI/Content';
import tw from '../../helpers/tailwind';
import burger from '../../images/burger.png';

const Home = () => {
  return (
    <React.Fragment>
      <Content className="text-center">
        <h1 className={tw('text-uni-green', 'text-4xl', 'font-Courgette')}>
          We are a family run business who take pride in serving you the best
          quality food.
        </h1>
        <p className={tw('text-xl', 'font-Courgette')}>
          With a range of foods including pizzas, burgers, kebabs and southern
          fried chicken, you're sure to find something to satisfy your appetite
        </p>
      </Content>
      <img className={tw('object-cover w-full')} src={burger} alt="burgers" />
    </React.Fragment>
  );
};

export default Home;
