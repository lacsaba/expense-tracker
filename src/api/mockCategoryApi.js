import {delay} from './delay';

const categories = [{
    id: 'expense',
    name: 'Expense',
    subCategories: [{
        id: 'food',
        name: "Food",
        subCategories: [{
            id: 'meat',
            name: 'Meat',
            subCategories: []
          }, {
            id: 'milk-products',
            name: 'Milk Products',
            subCategories: []
          }, {
            id: 'fruits-&-vegetables',
            name: 'Fruits & Vegetables',
            subCategories: []
          }
        ]
      }, {
        id: 'health',
        name: 'Health',
        subCategories: [{
          id: 'dental-care',
          name: 'Dental Care',
          subCategories: [],
        }, {
          id: 'medical-treatments',
          name: 'Medical treatments',
          subCategories: []
        }, {
          id: 'medications',
          name: 'Medications',
          subCategories: []
        }]
    }]
  }, {
    id: 'income',
    name: 'Income',
    subCategories: []
}
];

const generateId = category => category.name.toLowerCase().replace(' ', '-');

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }
}

export default CategoryApi;
