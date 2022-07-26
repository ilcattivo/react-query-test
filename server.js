const faker = require("@faker-js/faker").faker;

module.exports = () => {
  const data = {
    users: [],
  };

  for (let i = 0; i < 10; i++) {
    data.users.push({ id: i, name: faker.name.findName() });
  }

  return data;
};
