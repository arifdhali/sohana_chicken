const path = require("path");

module.exports = {
    config: path.resolve("server/config/config.cjs"),
    migrationsPath: path.resolve("server/migrations"),
    seedersPath: path.resolve("server/seeders"),
    modelsPath: path.resolve("server/models")
};
