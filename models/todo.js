const db = require("../data/db.js");

function getAllTodos() {
  return db("todo");
}

function addTodo(task) {
  return db("todo")
    .insert(task)
    .then(item => {
      return item.rowCount;
    });
}

module.exports = {
  getAllTodos,
  addTodo
};
