const keys = require("../config/keys");

module.exports = app => {
  app.get("/api/flowers", async (req, res) => {
    const flowers = [
      { id: 1, title: "Dahlias", price: 6, inventory: 10 },
      { id: 2, title: "Sweet peas", price: 5, inventory: 10 },
      { id: 3, title: "Sunflowers", price: 2, inventory: 20 }
    ];

    res.send(flowers);
  });
};
