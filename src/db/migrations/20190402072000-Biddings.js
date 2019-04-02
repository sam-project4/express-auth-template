"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("biddings", "user_id",     
      { 
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "users"
      } 
    })
      
      ,
      queryInterface.addColumn("biddings", "product_id",      { 
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "products"
        } 
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
