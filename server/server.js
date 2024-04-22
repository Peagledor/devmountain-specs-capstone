// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { sequelize } = require("./db");
// const auth = require("./controllers/auth");
// // const recipes = require('./controllers/recipes');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(cors());


// app.use("/controllers/auth", auth);
// // app.use('/controllers/recipes', recipes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT} and database is synced.`);
//   });
// });
