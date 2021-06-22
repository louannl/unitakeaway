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
    'Burger Deals': [
      {
        deal: '1',
        name: '1/4 Pounder Burger Meal',
        description: '1/4 Pounder, Chips and 330ml drink',
        price: '4.80',
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
        price: '5.20',
      },
      {
        deal: '4',
        name: 'Mexican Burger Meal',
        description: 'Mexican Burger, Chips and 330ml drink',
        price: '5.20',
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
        deal: '8',
        name: 'Veggie Burger Meal',
        description: 'Veggie Burger, Chips and 330ml drink',
        price: '5.20',
      },
    ],
    'Kebab Deals': [
      {
        deal: '10',
        name: 'Doner Meal',
        description: 'Doner kebab, Chips and 330ml drink',
        prices: {
          small: '6.30',
          large: '7.30',
        },
      },
    ],
    'Pizza Deals': [
      {
        deal: '1',
        name: '9" Pizza + 2 toppings, 1 Side, 330ml drink',
        price: '8.00',
      },
      {
        deal: '2',
        name: '2 x 9" Pizza + 2 toppings, 1 Garlic bread cheese, 1 Dip, 2 x 330ml drinks',
        price: '15.00',
      },
      {
        deal: '3',
        name: '2 x 12" Pizza + 3 toppings each, 1 Garlic bread cheese, 1 Dip, 1.5lt Bottle',
        price: '19.90',
      },
    ],
  },
  burgers: {
    label: 'Burgers',
    images: [burger, chickenburger, donerburger],
    description:
      'Served in a lightly toasted bun with your choice of salad and sauce.',
    items: [
      { name: '1/4 Pounder Beef Burger', price: '2.80' },
      { name: '1/2 Pounder Beef Burger', price: '4.30' },
      {
        name: '1/2 Pounder Beef Burger',
        description: '3 x 1/4 Pounders',
        price: '4.30',
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
        price: '4.50',
      },
      { name: 'Chicken Burger', price: '3.50' },
      { name: 'Chicken Burger with Hash brown', price: '3.90' },
      { name: 'Double Chicken Burger', price: '5.00' },
      { name: 'Veggie Burger', price: '3.20' },
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
    type: 'column',
    images: [pizza],
    description:
      'Our pizzas are freshly baked while you wait. We use only the finest Italian ingredients, our specially prepared sauce and mozzarella cheese. *All 12" pizzas come with FREE garlic pizza bread',
    items: [
      {
        name: 'Margherita',
        prices: {
          '7"': '3.00',
          '9"': '5.00',
          '12"': '8.00',
        },
      },
      {
        name: 'Cheese & Onion',
        prices: {
          '7"': '3.50',
          '9"': '6.00',
          '12"': '8.50',
        },
      },
      {
        name: 'Ham & Pineapple',
        prices: {
          '7"': '4.00',
          '9"': '6.00',
          '12"': '9.30',
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
          '12"': '9.30',
        },
      },
      {
        name: 'Ham & Sweetcorn',
        prices: {
          '7"': '4.30',
          '9"': '6.00',
          '12"': '9.30',
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
          'Chili Base, Tandoori Chicken, Peppers, Mushrooms & Jalapenos',
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
      prices: [
        {
          name: 'Any 2 Toppings',
          '7"': '4.00',
          '9"': '6.00',
          '12"': '9.00',
        },
        {
          name: 'Any 3 Toppings',
          '7"': '4.40',
          '9"': '6.50',
          '12"': '9.50',
        },
        {
          name: 'Any 4 Toppings',
          '7"': '4.80',
          '9"': '6.90',
          '12"': '9.80',
        },
      ],
    },
  },
  garlicPizzaBread: {
    label: 'Garlic Pizza Bread',
    type: 'column',
    images: [garlicbread],
    description: 'Choices of filling include: ...',
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
      {
        name: 'Add 1 Filling',
        description: 'Our cheese pizza bread with a filling of your choice',
        prices: {
          '9"': '4.00',
          '12"': '6.00',
        },
      },
      {
        name: 'Add 2 Fillings',
        description: 'Our cheese pizza bread with fillings of your choice',
        prices: {
          '9"': '4.50',
          '12"': '7.00',
        },
      },
    ],
  },
  southernFriedChicken: {
    label: 'Southern Fried Chicken',
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
    type: 'column',
    images: [donerkebab],
    description: 'Served in pitta or wrap with your choice of salad and sauce.',
    items: [
      {
        name: 'Lamb Doner',
        description:
          'Cooked on a vertical spit, sliced into thin crisp shavings',
        prices: {
          Small: '4.30',
          Large: '5.30',
        },
      },
      {
        name: 'Chicken Shish',
        description:
          'Pieces of Chicken breast marinated and cooked on our open grill',
        prices: {
          Small: '5.00',
          Large: '7.00',
        },
      },
      {
        name: 'Lamb Shish',
        description: 'Pieces of Lamb marinated and cooked on our open grill',
        prices: {
          Small: '5.00',
          Large: '7.00',
        },
      },
      {
        name: 'Kofte',
        description:
          'Lamb mince infused with herbs & spices cooked on our open grill',
        prices: {
          Small: '5.00',
          Large: '7.00',
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
          Large: '7.00',
          'X-Large': '8.50',
        },
      },
      {
        name: 'Mixed: Shish & Kofte',
        prices: {
          Large: '7.00',
          'X-Large': '8.50',
        },
      },
      {
        name: 'Mixed: Chicken Shish & Lamb Shish',
        prices: {
          Large: '7.00',
          'X-Large': '8.50',
        },
      },
    ],
  },
  sides: {
    label: 'Sides',
    images: [onionrings],
    items: [
      { name: '5 Spicy Chicken Wings', price: '2.50' },
      { name: '9 Onion Rings', price: '2.00' },
      { name: '10 Garlic Mushrooms', price: '2.00' },
      { name: 'Potato Wedges', price: '1.00' },
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
    type: 'column',
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
    type: 'column',
    items: [
      {
        name: 'Coca-Cola',
        prices: {
          Can: '0.90',
          '1.5lt': '2.50',
        },
      },
      {
        name: 'Diet Coca-Cola',
        prices: {
          Can: '0.90',
          '1.5lt': '2.50',
        },
      },
      {
        name: 'Coca-Cola Zero',
        prices: {
          Can: '0.90',
          '1.5lt': '2.50',
        },
      },
      {
        name: '7up',
        prices: {
          Can: '0.90',
          '1.5lt': '2.50',
        },
      },
    ],
    extras: [],
  },
};
