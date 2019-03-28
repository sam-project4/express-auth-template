"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      owner_id: DataTypes.INTEGER,
      close_bid: DataTypes.INTEGER
    },
    { tableName: "products" }
  );
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
