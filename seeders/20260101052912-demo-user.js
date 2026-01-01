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

  await queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Admin1!',
      role_id: 1,
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'Admin1!',
      role_id: 2,
      status: false,
      created_at: new Date(),
      updated_at: new Date()
    }
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

