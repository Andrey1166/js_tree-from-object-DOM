'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;

    if (Object.keys(data[item]).length > 0) {
      const nextUl = document.createElement('ul');

      createTree(nextUl, data[item]);
      li.append(nextUl);
    }
    ul.append(li);
  }
  element.append(ul);
}

createTree(tree, food);
