'use strict';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  await queryInterface.bulkInsert('customers', [
    { shopname: 'Shop A', email: 'alice@example.com', phone: '1234567890', status: true, created_at: new Date(), updated_at: new Date() },
    { shopname: 'Shop B', email: 'bob@example.com', phone: '0987654321', status: false, created_at: new Date(), updated_at: new Date() }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}

