const product = require("./products.model");
module.exports = {
  Query: {
    products: () => {
      return product.getAllProducts();
    },
    productsByPrice: (_, args) => {
      console.log(args.min, args.max);
      return product.getProductByPrice(args.min, args.max);
    },
    productsById: (_, args) => {
      console.log(args.id);
      return product.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      console.log(args.id, args.price, args.description);
      return product.addANewProduct(args.id, args.price, args.description);
    },
    addReview: (_, args) => {
      return product.addAProductReview(args.id, args.rating,args.comment);
    },
  },
};
