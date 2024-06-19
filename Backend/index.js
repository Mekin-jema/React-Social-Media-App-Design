import express from "express"; // Correct import statement
import users from "./routes/users.js"; // Ensure the path is correct

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/users", users); // Use the users route module

const port = 8800;
app.listen(port, () => {
  console.log(`API is working on port ${port}!`);
});
