const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values("ALUNOFULLCYCLE")`;
  connection.query(sql);
  const consulta = `SELECT * FROM people`;
  connection.query(consulta, (err, result) => {
    res.send(`<h1>Full Cycle ROCKS!!!</h1>
    ${result.map((re) => `<h3>${re.name}"</h3>`)}
    `);
  });
  connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
