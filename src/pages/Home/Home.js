import tw from '../../helpers/tailwind';
import burger from '../../images/burger.png';

const Home = () => {
  return (
    <section className="text-center">
      <h1 className={tw('text-uni-green', 'text-4xl')}>
        We are a family run business who take pride in serving you the best
        quality food.
      </h1>
      <p className={tw('text-xl')}>
        With a range of foods including pizzas, burgers, kebabs and southern
        fried chicken, you're sure to find something to satisfy your appetite
      </p>
      <img className={tw('object-cover w-full')} src={burger} alt="burgers" />
    </section>
  );
};

export default Home;
