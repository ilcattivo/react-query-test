const users = require("./db/users");
const todos = require("./db/todos");

module.exports = () => {
  const data = {
    users,
    todos,
  };

  return data;
};
