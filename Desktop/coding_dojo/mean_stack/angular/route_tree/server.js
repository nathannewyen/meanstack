  const express = require("express");
  const app = express();

  // Setting
  app.use(express.static(__dirname + "/tree/dist/tree"));


  app.use(express.json());
  app.use(
      express.urlencoded({
          extended: true,
      })
  );


  require("./server/config/routes.js")(app);


  // Localhost
  app.listen(8000);