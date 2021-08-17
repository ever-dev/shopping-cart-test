export const Products = {
  Apple: {
    name: "Apple",
    price: 0.6,
  },
  Orange: {
    name: "Orange",
    price: 0.25,
  },
};

export const Offers = [
  {
    name: '"Buy one, get one free" on Apples',
    productType: Products.Apple,
    totalCount: 2,
    priceCount: 1,
  },
  {
    name: '"3 for the price of 2" on Oranges',
    productType: Products.Orange,
    totalCount: 3,
    priceCount: 2,
  },
];
