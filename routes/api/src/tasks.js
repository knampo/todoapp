var express = require("express");
var router = express.Router();

const tasks = reqire("../../src/tasks.js");

/*タスクを登録するルーティング*/
router.post("/tasks", async function (req, res, next) {
  const postTasks = await tasks.postTasks(req.body);
  res.send(postTasks);
});
