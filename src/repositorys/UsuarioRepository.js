const db = require('../db');

async function buscarTodos() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (error, results) => {
      if (error) {
        reject('Erro ao buscar todos os usuários: ' + error);
      } else {
        resolve(results);
      }
    });
  });
}

async function buscarPorId(id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        reject('Erro ao buscar o usuário pelo ID: ' + error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          reject('Nenhum usuário encontrado com o ID fornecido');
        }
      }
    });
  });
}

async function criarUsuario(novoUsuario) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO usuarios SET ?';
    db.query(query, novoUsuario, (error, results) => {
      if (error) {
        reject('Erro ao criar um novo usuário: ' + error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

async function atualizarUsuario(id, novosDetalhes) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE usuarios SET ? WHERE id = ?';
    db.query(query, [novosDetalhes, id], (error, results) => {
      if (error) {
        reject('Erro ao atualizar o usuário: ' + error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
}

async function apagarUsuario(id) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        reject('Erro ao apagar o usuário: ' + error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
}

module.exports = {
  buscarTodos,
  buscarPorId,
  criarUsuario,
  atualizarUsuario,
  apagarUsuario
};