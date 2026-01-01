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

  await queryInterface.bulkInsert('Roles', [
    {
      name: 'admin',
      permissions: 'all',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'manager',
      permissions: 'read',
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

