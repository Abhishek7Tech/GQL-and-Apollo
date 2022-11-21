const order = require("./orders.model");
module.exports = {
    Query: {
        orders: () => {
            return order.getAllOrders();
        }
    }
}