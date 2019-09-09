const express = require("express");

const { getAllTodos, addTodo } = require("./models/todo"); // import helper functions from Todo model
const app = express();

app.use(express.json());

/**
 * METHOD: GET
 * ROUTE: /todo
 * PURPOSE: Get all tasks
 */
app.get("/todo", async (req, res) => {
  const todos = await getAllTodos();
  res.json({ todos });
});

/**
 * METHOD: POST
 * ROUTE: /todo
 * PURPOSE: Create new task
 */
app.post("/todo", async (req, res) => {
  const { task } = req.body;
  const newTodo = await addTodo({ task });
  if (newTodo === 1) {
    return res.status(201).json({ message: "Todo created successfully" });
  }
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
