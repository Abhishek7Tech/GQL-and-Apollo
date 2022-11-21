const orders = [
  {
    date: "11/20/2022",
    subtotal: 100.99,
    items: [
      {
        product: {
          id: 1,
        },
        quantity: 2,
      },
    ],
  },
];


function getAllOrders(){
  return orders;
}

module.exports = {
  getAllOrders
}