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
  mealDeals: {
    label: 'Meal Deals',
    items: [
      {
        deal: 'No. 1',
        name: '1/4 Pounder Burger Meal',
        description: '1/4 Pounder, Chips and 330ml drink',
        price: '7.00',
      },
      {
        deal: 'No. 2',
        name: '1/2 Pounder Burger Meal',
        description: '1/2 Pounder, Chips and 330ml drink',
        price: '9.00',
      },
      {
        deal: 'No. 3',
        name: 'Hawaiian Burger Meal',
        description: 'Hawaiian Burger, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 4',
        name: 'Mexican Burger Meal',
        description: 'Mexican Burger, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 5',
        name: 'Danish Burger Meal',
        description: 'Danish Burger, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 6',
        name: 'Chicken Burger Meal',
        description: 'Chicken Burger, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 7',
        name: 'Double Chicken Burger Meal',
        description: 'Double Chicken Burger, Chips and 330ml drink',
        price: '10.50',
      },
      {
        deal: 'No. 8',
        name: 'Veggie Burger Meal',
        description: 'Veggie Burger, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 9',
        name: 'Special Burger Meal',
        description: 'Burger with kebab meat, Chips and 330ml drink',
        prices: {
          small: '10.00',
        },
      },
      {
        deal: 'No. 10',
        name: 'Doner Meal',
        description: 'Doner kebab, Chips and 330ml drink',
        prices: {
          small: '9.50',
          large: '11.00',
        },
      },
      {
        deal: 'No. 11',
        name: 'American Burger Meal',
        description: 'Burger with onion rings, Chips and 330ml drink',
        price: '8.00',
      },
      {
        deal: 'No. 12',
        name: 'MEGA Burger Meal',
        description: 'Triple burger, Chips and 330ml drink',
        price: '11.00',
      },
      {
        name: '5 Piece Share Box',
        description: '5 Wings/Strips, 5 Onion Rings, 5 Mozzarella Sticks, Chips & 2 Dips',
        price: '13.50',
      },
      {
        name: '10 Piece Share Box',
        description: '10 Wings/Strips, 10 Onion Rings, 10 Mozzarella Sticks, Chips & 4 Dips',
        price: '24.00',
      },
    ],
  },
  pizzaDeals: {
    label: 'Pizza Deals',
    items: [
      {
        deal: 'No. 1',
        description: '1x 9" Pizza + 2 toppings, 1x Side, 1x Can',
        price: '10.50',
      },
      {
        deal: 'No. 2',
        description:
            '2x 9" Pizza + 2 toppings, 1x Garlic Bread Cheese, 1x Dip, 2x Can',
        price: '20.50',
      },
      {
        deal: 'No. 3',
        description:
            '2x 12" Pizza + 3 toppings each, 1x Garlic Bread Cheese, 1x Dip, 1x Bottle',
        price: '27.50',
      },
    ],
  },
  burgers: {
    label: 'Burgers',
    images: [burger, chickenburger, donerburger],
    description:
      'Served in a lightly toasted bun with your choice of salad and sauce.',
    items: [
      { name: '1/4 Pounder Beef Burger', price: '4.00' },
      { name: '1/2 Pounder Beef Burger', price: '6.00' },
      {
        name: 'Mega Burger',
        description: '3 x 1/4 Pounders',
        price: '8.00',
      },
      {
        name: 'Hawaiian Burger',
        description: 'with Pineapple',
        price: '5.00',
      },
      {
        name: 'Mexican Burger',
        description: 'with Jalapenos',
        price: '5.00',
      },
      {
        name: 'Danish Burger',
        description: 'with Bacon',
        price: '5.00',
      },
      {
        name: 'American Burger',
        description: 'with Onions',
        price: '5.00',
      },
      {
        name: 'Special Burger',
        description: 'with Doner Meat',
        price: '7.00',
      },
      { name: 'Chicken Burger', price: '5.00' },
      { name: 'Chicken Burger with Hash brown', price: '6.00' },
      { name: 'Double Chicken Burger', price: '7.50' },
      { name: 'Veggie Burger', price: '5.00' },
      { name: 'Veggie Burger with Hash brown', price: '6.00' },
    ],
    extras: [
      { name: 'Cheese', price: '0.40' },
      { name: 'Bacon', price: '1.00' },
      { name: 'Hash Brown', price: '1.00' },
    ],
  },
  pizzas: {
    label: 'Pizzas',
    images: [pizza],
    description:
      'Our pizzas are freshly baked while you wait. We use only the finest Italian ingredients, our specially prepared sauce and mozzarella cheese.',
    extras: [{ name: 'Garlic pizza bread FREE with ANY 12" Pizza' }],
    items: [
      {
        name: 'Margherita',
        prices: {
          '7"': '4.00',
          '9"': '7.00',
          '12"': '10.00',
        },
      },
      {
        name: 'Cheese & Onion',
        prices: {
          '7"': '4.50',
          '9"': '7.50',
          '12"': '11.00',
        },
      },
      {
        name: 'Ham & Pineapple',
        prices: {
          '7"': '5.50',
          '9"': '8.00',
          '12"': '12.00',
        },
      },
      {
        name: 'Double Pepperoni',
        prices: {
          '7"': '5.50',
          '9"': '8.00',
          '12"': '12.00',
        },
      },
      {
        name: 'Chicken & Mushroom',
        prices: {
          '7"': '5.50',
          '9"': '8.00',
          '12"': '12.00',
        },
      },
      {
        name: 'Ham & Sweetcorn',
        prices: {
          '7"': '5.50',
          '9"': '8.00',
          '12"': '12.00',
        },
      },
      {
        name: 'Doner',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'BBQ Chicken Tikka',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Bacon',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Veggie Feast',
        description: 'Mushrooms, Peppers, Onions & Sweetcorn',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Chicken Feast',
        description: 'Chicken, Ham, Green peppers, Mushroom & Sweetcorn',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Pepperoni Feast',
        description: 'Pepperoni, Mushrooms, Peppers & Onions',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Spicy Tandoori',
        description:
          'Chilli Base, Tandoori Chicken, Peppers, Mushrooms & Jalapenos',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Mexican',
        description: 'Spicy Beef, Peppers, Onions & Jalapenos',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
      {
        name: 'Mighty Meaty',
        description: 'Spicy Beef, Chicken, Ham & Pepperoni',
        prices: {
          '7"': '6.00',
          '9"': '8.50',
          '12"': '12.50',
        },
      },
    ],
  },
  garlicPizzaBread: {
    label: 'Garlic Pizza Bread',
    images: [garlicbread],
    items: [
      {
        name: 'Plain',
        prices: {
          '9"': '3.00',
          '12"': '4.50',
        },
      },
      {
        name: 'With Cheese',
        prices: {
          '9"': '4.50',
          '12"': '6.50',
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
          name: 'Add 1 Filling',
          prices: {
            '9"': '5.50',
            '12"': '7.50',
          },
        },
        {
          name: 'Add 2 Fillings',
          prices: {
            '9"': '6.00',
            '12"': '8.00',
          },
        },
      ],
    },
  },
  spicyWings: {
    label: 'Spicy Wings/Strips',
    images: [friedchicken],
    description:
      'Chicken portions covered in our secret recipe coating and pressure cooked until tender.',
    items: [
      { name: '5 Piece Chicken Wings/Strips', price: '4.00' },
      { name: '10 Piece Chicken Wings/Strips', price: '8.00' },
      { name: '15 Piece Chicken Wings/Strips', price: '12.00' },
      { name: '20 Piece Chicken Wings/Strips', price: '16.00' },
    ],
  },
  kebabs: {
    label: 'Kebabs',
    images: [donerkebab],
    description: 'Served in pitta or wrap with your choice of salad and sauce.',
    items: [
      {
        name: 'Doner',
        description:
          'Cooked on a vertical spit, sliced into thin crisp strips',
        prices: {
          Small: '6.50',
          Large: '7.50',
        },
      },
      {
        name: 'Chicken Shish',
        description:
          'Pieces of Chicken breast marinated and cooked on our open grill',
        prices: {
          Small: '7.50',
          Large: '11.00',
        },
      },
      {
        name: 'Lamb Shish',
        description: 'Pieces of Lamb marinated and cooked on our open grill',
        prices: {
          Small: '7.50',
          Large: '11.00',
        },
      },
      {
        name: 'Kofte',
        description:
          'Lamb mince infused with herbs & spices cooked on our open grill',
        prices: {
          Small: '7.50',
          Large: '11.00',
        },
      },
      {
        name: 'Doner Meat & Chips',
        prices: {
          Small: '6.50',
          Large: '7.50',
        },
      },
    ],
  },
  MixedKebabs: {
    label: 'Mixed Kebabs',
    items: [
      {
        name: 'Doner/Shish',
        prices: {
          Large: '11.00',
          'X-Large': '14.00',
        },
      },
      {
        name: 'Kofte',
        prices: {
          Large: '11.00',
          'X-Large': '14.00',
        },
      },
      {
        name: 'Chicken Shish & Lamb Shish',
        prices: {
          Large: '11.00',
          'X-Large': '14.00',
        },
      },
    ],
  },
  sides: {
    label: 'Side Orders',
    images: [onionrings],
    items: [
      { name: '5 Mozzarella Cheese Sticks', price: '4.50' },
      { name: '9 Onion Rings', price: '3.00' },
      { name: '10 Garlic Mushrooms', price: '3.50' },
      { name: 'Potato Wedges', price: '3.50' },
      { name: 'Coleslaw', price: '2.00' },
      {
        name: 'Gravy / Beans / Chilli / Curry Sauce',
        description: 'Served in a pot',
        price: '1.50',
      },
      {
        name: 'Garlic / Mint / Chilli / BBQ / Mayo / Ketchup / Burger Sauce / Relish',
        description: 'Any one Dip',
        price: '1.00',
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
          Small: '2.50',
          Large: '3.00',
        },
      },
      {
        name: 'Chips & Cheese',
        prices: {
          Small: '3.50',
          Large: '4.50',
        },
      },
      {
        name: 'Chips & Beans/Gravy/Curry Sauce',
        prices: {
          Small: '3.50',
          Large: '4.50',
        },
      },
      {
        name: 'Chips & Cheese with Beans/Gravy/Curry Sauce',
        prices: {
          Large: '5.50',
        },
      },
      {
        name: 'Sausage & Chips',
        prices: {
          Large: '4.00',
        },
      },
      {
        name: 'Chicken Nuggets (8) & Chips',
        prices: {
          Large: '5.00',
        },
      },
      {
        name: 'Cod & Chips',
        prices: {
          Large: '6.00',
        },
      },
      {
        name: 'Scampi & Chips',
        prices: {
          Large: '6.00',
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
          Can: '1.50',
          '1.5lt': '3.50',
        },
      },
      {
        name: 'Diet Coca-Cola',
        prices: {
          Can: '1.50',
          '1.5lt': '3.50',
        },
      },
      {
        name: 'Coca-Cola Zero',
        prices: {
          Can: '1.50',
          '1.5lt': '3.50',
        },
      },
      {
        name: '7up',
        prices: {
          Can: '1.50',
          '1.5lt': '3.50',
        },
      },
      {
        name: 'Yazoo Milkshake 400ml',
        prices: {
          '400ml Bottle': '2.00',
        },
      },
    ],
  },
};
