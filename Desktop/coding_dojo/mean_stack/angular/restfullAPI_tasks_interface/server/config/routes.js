const users = require("../controllers/users.js");

module.exports = (app) => {
  app.get("/tasks", users.index);

  app.post("/tasks", users.create);

  app.get("/tasks/:id", users.details);

  app.delete("/tasks/:id", users.delete);
};
