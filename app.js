const express = require('express');
const mysql = require('mysql');
const app = express();

// Configurações do banco de dados
const db = mysql.createConnection({
  host: '3306',
  user: 'emiliaLima',
  password: 'milajack',
  database: 'emilialima',
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados bem-sucedida!');
  }
});

// Rota para verificar a conexão
app.get('/', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      res.send('Erro ao consultar o banco de dados');
    } else {
      res.send('Conexão bem-sucedida! Resultado da consulta: ' + results[0].solution);
    }
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
