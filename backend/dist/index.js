// import app from "./app.js"
// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import { connectToDatabase } from "./db/connection.js"
// config();
// const PORT = process.env.PORT || 3004;
// const exp = express();
// exp.use(cors({ origin: "*" })); 
// connectToDatabase().then(() => {
// app.listen(PORT, () => console.log("Server open and conected to database 👍"));
// }).catch(err => console.log(err));
// app.get('/', async (req, res) => {
//     res.status(200).json({
//       message: 'Hello from Dexter!',
//     });
//   });
//NEWwww
import app from "./app.js";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db/connection.js";
config();
const PORT = process.env.PORT || 3004;
const exp = express();
// CORS Configuration
exp.use(cors({ origin: "*" }));
// Connect to the database and start the server
connectToDatabase()
    .then(() => {
    exp.listen(PORT, () => console.log("Server open and connected to database 👍"));
})
    .catch(err => console.log(err));
// Root Route
app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from Dexter!',
    });
});
//# sourceMappingURL=index.js.map