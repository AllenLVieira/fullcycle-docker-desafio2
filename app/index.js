const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);
const sql = 'CREATE TABLE IF NOT EXISTS pessoas (id int not null auto_increment, nome varchar(255), primary key(id));';
connection.query(sql, (err) => {
  if (err) throw err;
  console.log('Tabela criada ou já existe');
});

app.get('/', (req, res) => {
  const sqlInsercao = 'INSERT INTO pessoas (nome) values ("Allen Vieira");';
  connection.query(sqlInsercao);

  const sqlSelect = 'SELECT nome FROM pessoas ORDER BY id;';
  connection.query(sqlSelect, (err, result) => {
    if (err) throw err;

    const nomes = result
      .map((row) => `<strong>${row.nome}</strong>`)
      .join(', ');

    const html = `
            <div align=center>
                <h1>Full Cycle Rocks!</h1>
            </div><br><br>
            <div align=center>
                <h3>${nomes}</h3>
            </div>
        `;
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Servidor está escutando a porta http://localhost:${port}`);
});
