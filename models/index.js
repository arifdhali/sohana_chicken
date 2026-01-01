import User from "./user.model.js";
import Role from "./role.model.js";
import PasswordReset from "./password_reset.model.js";
// import Feed from "./feed.model.js";
// import FeedDeliveries from "./feed_deliveries.model.js";
// import Farms from "./farm.mode.js";
// import FarmLifting from "./farm_lifting.model.js";
// import Chicks_delivered from "./chicks_delivered.model.js";

// Associations
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

User.hasMany(PasswordReset, { foreignKey: "user_id" });
PasswordReset.belongsTo(User, { foreignKey: "user_id" });

// Feed, FeedDeliveries, Farms, FarmLifting, Chicks_delivered
export { User, Role, PasswordReset };