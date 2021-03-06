"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Pen",
          description: "old Pen",
          image: "image here",
          owner_id: 1,
          close_bid: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
