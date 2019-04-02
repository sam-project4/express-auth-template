"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bidding = sequelize.define(
    "Bidding",
    {
      bid_number: DataTypes.INTEGER
    },
    { tableName: "biddings" }
  );
  Bidding.associate = function(models) {
    // associations can be defined here
    Bidding.belongsTo(models.Product);
    Bidding.belongsTo(models.User);
  };
  return Bidding;
};
