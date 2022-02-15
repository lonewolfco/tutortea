const sequelize = require("../config/connection");
//needs additional code, await the tutor, review, users seeds files under line 4.
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await await process.exit(0);
};

seedAll();
