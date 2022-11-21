const products = [
  {
    id: 1,
    description: "ADIDAS SHOE",
    price: 199.99,
    reviews: [
      {
        rating: 4,
        comment: "Nice Shoes!",
      },
    ],
  },
  {
    id: 2,
    description: "Nike SHOE",
    price: 199.99,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price > min && product.price < max;
  });
}

function getProductById(id) {
  return products.filter((product) => {
    console.log(typeof id, typeof product.id);
    return product.id === +id;
  });
}

function addANewProduct(id, price, description, reviews) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addAProductReview(id, rating, comment) {
  return products.filter((product) => {
    if (product.id === +id) {
     return product.reviews.push({
        rating,
        comment,
      });
    }
  });
  
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addANewProduct,
  addAProductReview,
};
