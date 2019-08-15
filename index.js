const express = require("express");

const { getAllTodos, addTodo } = require("./models/todo");
const app = express();

app.use(express.json());

app.get("/todo", async (req, res) => {
  const todos = await getAllTodos();
  console.log(todos);
  res.json({ todos });
});

app.post("/todo", async (req, res) => {
  const { task } = req.body;
  const newTodo = await addTodo({ task });
  if (newTodo === 1) {
    return res.status(201).json({ message: "Todo created successfully" });
  }
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
