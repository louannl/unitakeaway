import burger from './images/menu/burger.jpg';
import donerburger from './images/menu/donerburger.jpg';
import chickenburger from './images/menu/chickenburger.jpg';
import pizza from './images/menu/pizza.jpg';
import garlicbread from './images/menu/garlicbread.jpg';
import friedchicken from './images/menu/friedchicken.jpg';
import donerkebab from './images/menu/donerkebab.jpg';
import onionrings from './images/menu/onionrings.jpg';
import chips from './images/menu/chips.jpg';

export const menuItems = {
  deals: {
    label: 'Deals',
    type: 'deals',
    items: {
      'Burger Deals': [
        {
          deal: '1',
          name: '1/4 Pounder Burger Meal',
          description: '1/4 Pounder, Chips and 330ml drink',
          price: '5.00',
        },
        {
          deal: '2',
          name: '1/2 Pounder Burger Meal',
          description: '1/2 Pounder, Chips and 330ml drink',
          price: '6.00',
        },
        {
          deal: '3',
          name: 'Hawaiian Burger Meal',
          description: 'Hawaiian Burger, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '4',
          name: 'Mexican Burger Meal',
          description: 'Mexican Burger, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '5',
          name: 'Danish Burger Meal',
          description: 'Danish Burger, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '6',
          name: 'Chicken Burger Meal',
          description: 'Chicken Burger, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '7',
          new: true,
          name: 'Double Chicken Burger Meal',
          description: 'Double Chicken Burger, Chips and 330ml drink',
          price: '7.00',
        },
        {
          deal: '8',
          name: 'Veggie Burger Meal',
          description: 'Veggie Burger, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '9',
          new: true,
          name: 'Special Burger Meal',
          description: 'Burger with kebab meat, Chips and 330ml drink',
          prices: {
            small: '7.50',
          },
        },
        {
          deal: '11',
          new: true,
          name: 'American Burger Meal',
          description: 'Burger with onion rings, Chips and 330ml drink',
          price: '5.50',
        },
        {
          deal: '12',
          new: true,
          name: 'MEGA Burger Meal',
          description: 'Triple burger, Chips and 330ml drink',
          price: '8.00',
        },
      ],
      'Kebab Deals': [
        {
          deal: '10',
          name: 'Doner Meal',
          description: 'Doner kebab, Chips and 330ml drink',
          prices: {
            small: '6.50',
            large: '7.50',
          },
        },
      ],
      'Pizza Deals': [
        {
          deal: '1',
          name: 'Pizza Deal 1',
          description: '9" Pizza + 2 toppings, 1 Side, 330ml drink',
          price: '8.00',
        },
        {
          deal: '2',
          name: 'Pizza Deal 2',
          description:
            '2 x 9" Pizza + 2 toppings, 1 Garlic bread cheese, 1 Dip, 2 x 330ml drinks',
          price: '15.00',
        },
        {
          deal: '3',
          name: 'Pizza Deal 3',
          description:
            '2 x 12" Pizza + 3 toppings each, 1 Garlic bread cheese, 1 Dip, 1.5lt Bottle',
          price: '19.90',
        },
      ],
    },
  },
  burgers: {
    label: 'Burgers',
    images: [burger, chickenburger, donerburger],
    description:
      'Served in a lightly toasted bun with your choice of salad and sauce.',
    items: [
      { name: '1/4 Pounder Beef Burger', price: '3.00' },
      { name: '1/2 Pounder Beef Burger', price: '4.50' },
      {
        name: 'Mega Burger',
        description: '3 x 1/4 Pounders',
        price: '6.30',
      },
      {
        name: 'Hawaiian Burger',
        description: 'with Pineapple',
        price: '3.50',
      },
      {
        name: 'Mexican Burger',
        description: 'with Jalapenos',
        price: '3.50',
      },
      {
        name: 'Danish Burger',
        description: 'with Bacon',
        price: '3.50',
      },
      {
        name: 'American Burger',
        description: 'with Onions',
        price: '3.50',
      },
      {
        name: 'Special Burger',
        description: 'with Doner Meat',
        price: '5.00',
      },
      { name: 'Chicken Burger', price: '3.50' },
      { name: 'Chicken Burger with Hash brown', price: '3.90' },
      { name: 'Double Chicken Burger', price: '5.00' },
      { name: 'Veggie Burger', price: '3.50' },
      { name: 'Veggie Burger with Hash brown', price: '3.60' },
    ],
    extras: [
      { name: 'Cheese', price: '0.20' },
      { name: 'Bacon', price: '0.60' },
      { name: 'Hash Brown', price: '0.60' },
    ],
  },
  pizzas: {
    label: 'Pizzas',
    images: [pizza],
    description:
      'Our pizzas are freshly baked while you wait. We use only the finest Italian ingredients, our specially prepared sauce and mozzarella cheese.',
    items: [
      {
        name: 'Margherita',
        prices: {
          '7"': '3.00',
          '9"': '5.00',
          '12"': '8.50',
        },
      },
      {
        name: 'Cheese & Onion',
        prices: {
          '7"': '3.50',
          '9"': '6.00',
          '12"': '9.00',
        },
      },
      {
        name: 'Ham & Pineapple',
        prices: {
          '7"': '4.00',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'Double Pepperoni',
        prices: {
          '7"': '4.00',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'Doner',
        prices: {
          '7"': '4.40',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'BBQ Chicken Tikka',
        prices: {
          '7"': '4.40',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'Bacon',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.50',
        },
      },
      {
        name: 'Chicken & Mushroom',
        prices: {
          '7"': '4.20',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'Ham & Sweetcorn',
        prices: {
          '7"': '4.30',
          '9"': '6.00',
          '12"': '9.50',
        },
      },
      {
        name: 'Veggie Feast',
        description: 'Mushrooms, Peppers, Onions & Sweetcorn',
        prices: {
          '7"': '4.40',
          '9"': '6.50',
          '12"': '9.80',
        },
      },
      {
        name: 'Chicken Feast',
        description: 'Chicken, Ham, Green peppers, Mushroom & Sweetcorn',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.90',
        },
      },
      {
        name: 'Pepperoni Feast',
        description: 'Pepperoni, Mushrooms, Peppers & Onions',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.90',
        },
      },
      {
        name: 'Spicy Tandoori',
        description:
          'Chilli Base, Tandoori Chicken, Peppers, Mushrooms & Jalapenos',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.90',
        },
      },
      {
        name: 'Mexican',
        description: 'Spicy Beef, Peppers, Onions & Jalapenos',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.90',
        },
      },
      {
        name: 'Mighty Meaty',
        description: 'Spicy Beef, Chicken, Ham & Pepperoni',
        prices: {
          '7"': '4.50',
          '9"': '6.50',
          '12"': '9.90',
        },
      },
    ],
    extras: [{ name: 'Garlic pizza bread FREE with ANY 12" Pizza' }],
    create: {
      base: ['Tomato', 'BBQ', 'Garlic', 'Currry', 'Chilli'],
      toppings: [
        'Spicy Beef',
        'Pepperoni',
        'Chicken',
        'Ham',
        'Bacon',
        'Doner',
        'Onion',
        'Peppers',
        'Mushrooms',
        'Pineapple',
        'Sweetcorn',
        'Tomato',
        'Jalapenos',
      ],
      items: [
        {
          name: 'Any 2 Toppings',
          prices: {
            '7"': '4.00',
            '9"': '6.00',
            '12"': '9.50',
          },
        },
        {
          name: 'Any 3 Toppings',
          prices: {
            '7"': '4.40',
            '9"': '6.50',
            '12"': '9.50',
          },
        },
        {
          name: 'Any 4 Toppings',
          prices: {
            '7"': '4.80',
            '9"': '6.90',
            '12"': '9.90',
          },
        },
      ],
    },
  },
  garlicPizzaBread: {
    label: 'Garlic Pizza Bread',
    images: [garlicbread],
    items: [
      {
        name: 'Plain',
        prices: {
          '9"': '2.50',
          '12"': '3.50',
        },
      },
      {
        name: 'With Cheese',
        prices: {
          '9"': '3.50',
          '12"': '5.00',
        },
      },
    ],
    create: {
      description: 'Our cheese pizza bread with fillings of your choice',
      fillings: [
        'Spicy Beef',
        'Pepperoni',
        'Chicken',
        'Ham',
        'Bacon',
        'Doner',
        'Onion',
        'Peppers',
        'Mushrooms',
        'Pineapple',
        'Sweetcorn',
        'Tomato',
        'Jalapenos',
      ],
      items: [
        {
          name: 'Any 1 Filling',
          prices: {
            '9"': '4.00',
            '12"': '6.00',
          },
        },
        {
          name: 'Any 2 Fillings',
          prices: {
            '9"': '4.50',
            '12"': '7.50',
          },
        },
      ],
    },
  },
  spicyWings: {
    label: 'Spicy Wings',
    images: [friedchicken],
    description:
      'Chicken portions covered in our secret recipe coating and pressure cooked until tender.',
    items: [
      { name: '5 Piece Chicken Wings', price: '2.50' },
      { name: '10 Piece Chicken Wings', price: '5.00' },
      { name: '15 Piece Chicken Wings', price: '7.50' },
      { name: '20 Piece Chicken Wings', price: '10.00' },
    ],
  },
  kebabs: {
    label: 'Kebabs',
    images: [donerkebab],
    description: 'Served in pitta or wrap with your choice of salad and sauce.',
    items: [
      {
        name: 'Lamb Doner',
        description:
          'Cooked on a vertical spit, sliced into thin crisp shavings',
        prices: {
          Small: '4.50',
          Large: '5.50',
        },
      },
      {
        name: 'Chicken Shish',
        description:
          'Pieces of Chicken breast marinated and cooked on our open grill',
        prices: {
          Small: '5.50',
          Large: '7.50',
        },
      },
      {
        name: 'Lamb Shish',
        description: 'Pieces of Lamb marinated and cooked on our open grill',
        prices: {
          Small: '5.50',
          Large: '7.50',
        },
      },
      {
        name: 'Kofte',
        description:
          'Lamb mince infused with herbs & spices cooked on our open grill',
        prices: {
          Small: '5.50',
          Large: '7.50',
        },
      },
      {
        name: 'Doner Meat & Chips',
        prices: {
          Small: '4.50',
          Large: '5.50',
        },
      },
      {
        name: 'Mixed: Doner & Shish',
        prices: {
          Large: '7.50',
          'X-Large': '9.00',
        },
      },
      {
        name: 'Mixed: Shish & Kofte',
        prices: {
          Large: '7.50',
          'X-Large': '9.00',
        },
      },
      {
        name: 'Mixed: Chicken Shish & Lamb Shish',
        prices: {
          Large: '7.50',
          'X-Large': '9.00',
        },
      },
    ],
  },
  sides: {
    label: 'Sides',
    images: [onionrings],
    items: [
      { name: '5 Chicken sticks', price: '2.50' },
      { name: '9 Onion Rings', price: '2.00' },
      { name: '5 Mozzarella Cheese Sticks', price: '2.50' },
      { name: '10 Garlic Mushrooms', price: '2.00' },
      { name: 'Potato Wedges', price: '2.50' },
      { name: 'Coleslaw', price: '1.00' },
      {
        name: 'Gravy / Beans / Chilli / Curry Sauce',
        description: 'Served in a pot',
        price: '1.00',
      },
      {
        name: 'Garlic / Mint / Chilli / BBQ / Mayo / Ketchup / Burger Sauce / Relish',
        description: 'Any one Dip',
        price: '0.50',
      },
    ],
  },
  chips: {
    label: 'Chips',
    images: [chips],
    items: [
      {
        name: 'Chips',
        prices: {
          Small: '1.50',
          Large: '2.00',
        },
      },
      {
        name: 'Chips & Cheese',
        prices: {
          Small: '2.50',
          Large: '3.20',
        },
      },
      {
        name: 'Chips with a choice of Beans, Gravy or Curry Sauce',
        prices: {
          Small: '2.00',
          Large: '2.50',
        },
      },
      {
        name: 'Chips & Cheese with a choice of Beans, Gravy or Curry Sauce',
        prices: {
          Large: '3.50',
        },
      },
      {
        name: 'Sausage & Chips',
        prices: {
          Large: '3.00',
        },
      },
      {
        name: 'Chicken Nuggets (8) & Chips',
        prices: {
          Large: '3.50',
        },
      },
      {
        name: 'Cod & Chips',
        prices: {
          Large: '4.50',
        },
      },
      {
        name: 'Scampi & Chips',
        prices: {
          Large: '4.50',
        },
      },
    ],
  },
  drinks: {
    label: 'Drinks',
    items: [
      {
        name: 'Coca-Cola',
        prices: {
          Can: '1.00',
          '1.5lt': '2.50',
        },
      },
      {
        name: 'Diet Coca-Cola',
        prices: {
          Can: '1.00',
          '1.5lt': '2.50',
        },
      },
      {
        name: 'Coca-Cola Zero',
        prices: {
          Can: '1.00',
          '1.5lt': '2.50',
        },
      },
      {
        name: '7up',
        prices: {
          Can: '1.00',
          '1.5lt': '2.50',
        },
      },
      {
        name: 'Yazoo Milkshake',
        prices: {
          '400ml Bottle': '1.50',
        },
      },
    ],
  },
};
