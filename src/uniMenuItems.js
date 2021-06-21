export const menuItems = {
  Deals: {
    'Burger Deals': [
      {
        name: '1/4 Pounder Burger Meal',
        description: '1/4 Pounder, Chips and 330ml drink',
        price: '4.80',
      },
      {
        name: '1/2 Pounder Burger Meal',
        description: '1/2 Pounder, Chips and 330ml drink',
        price: '6.00',
      },
      {
        name: 'Hawaiian Burger Meal',
        description: 'Hawaiian Burger, Chips and 330ml drink',
        price: '5.20',
      },
      {
        name: 'Mexican Burger Meal',
        description: 'Mexican Burger, Chips and 330ml drink',
        price: '5.20',
      },
      {
        name: 'Danish Burger Meal',
        description: 'Danish Burger, Chips and 330ml drink',
        price: '5.50',
      },
      {
        name: 'Chicken Burger Meal',
        description: 'Chicken Burger, Chips and 330ml drink',
        price: '5.50',
      },
      {
        name: 'Veggie Burger Meal',
        description: 'Veggie Burger, Chips and 330ml drink',
        price: '5.20',
      },
    ],
    'Kebab Deals': [
      {
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
        name: '9" Pizza + 2 toppings, 1 Side, 330ml drink',
        price: '8.00',
      },
      {
        name: '2 x 9" Pizza + 2 toppings, 1 Garlic bread cheese, 1 Dip, 2 x 330ml drinks',
        price: '15.00',
      },
      {
        name: '2 x 12" Pizza + 3 toppings each, 1 Garlic bread cheese, 1 Dip, 1.5lt Bottle',
        price: '19.90',
      },
    ],
  },
  Burgers: {
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
  Pizzas: {
    items: [
      {
        name: 'Margherita',
        '7"': '3.00',
        '9"': '5.00',
        '12"': '8.00',
      },
      {
        name: 'Cheese & Onion',
        '7"': '3.50',
        '9"': '6.00',
        '12"': '8.50',
      },
      {
        name: 'Ham & Pineapple',
        '7"': '4.00',
        '9"': '6.00',
        '12"': '9.30',
      },
      {
        name: 'Double Pepperoni',
        '7"': '4.00',
        '9"': '6.00',
        '12"': '9.50',
      },
      {
        name: 'Doner',
        '7"': '4.40',
        '9"': '6.00',
        '12"': '9.50',
      },
      {
        name: 'BBQ Chicken Tikka',
        '7"': '4.40',
        '9"': '6.00',
        '12"': '9.50',
      },
      {
        name: 'Bacon',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.50',
      },
      {
        name: 'Chicken & Mushroom',
        '7"': '4.20',
        '9"': '6.00',
        '12"': '9.30',
      },
      {
        name: 'Ham & Sweetcorn',
        '7"': '4.30',
        '9"': '6.00',
        '12"': '9.30',
      },
      {
        name: 'Veggie Feast',
        description: 'Mushrooms, Peppers, Onions & Sweetcorn',
        '7"': '4.40',
        '9"': '6.50',
        '12"': '9.80',
      },
      {
        name: 'Chicken Feast',
        description: 'Chicken, Ham, Green peppers, Mushroom & Sweetcorn',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.90',
      },
      {
        name: 'Pepperoni Feast',
        description: 'Pepperoni, Mushrooms, Peppers & Onions',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.90',
      },
      {
        name: 'Spicy Tandoori',
        description:
          'Chili Base, Tandoori Chicken, Peppers, Mushrooms & Jalapenos',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.90',
      },
      {
        name: 'Mexican',
        description: 'Spicy Beef, Peppers, Onions & Jalapenos',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.90',
      },
      {
        name: 'Mighty Meaty',
        description: 'Spicy Beef, Chicken, Ham & Pepperoni',
        '7"': '4.50',
        '9"': '6.50',
        '12"': '9.90',
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
  'Garlic Pizza Bread': {
    items: [],
    extras: [],
  },
  'Southern Fried Chicken': {
    items: [
      { name: '5 Piece Chicken Wings', price: '2.50' },
      { name: '10 Piece Chicken Wings', price: '5.00' },
      { name: '15 Piece Chicken Wings', price: '7.50' },
      { name: '20 Piece Chicken Wings', price: '10.00' },
    ],
    extras: [],
  },
  Kebabs: {
    items: [],
    extras: [],
  },
  Sides: {
    items: [],
    extras: [],
  },
  Drinks: {
    items: [],
    extras: [],
  },
};
