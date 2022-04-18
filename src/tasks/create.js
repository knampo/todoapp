// 新規登録処理

const mysql = require("mysql2/promise");
const config = require("../config.js");

/**
 *
 *
 *
 */
postTasks = async function (body) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    // ここにSQLを記述する
    const sql =
      "INSERT INTO todoapp.task (task_name, deadline, category_id) VALUES (?,?,?);";
    let d = [body.taskname, body.deadline, body.category];
    const [rows, fields] = await connection.query(sql, d);

    // console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};
