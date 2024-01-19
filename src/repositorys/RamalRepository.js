const db = require('../db')



  async function buscarTodos() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM ramais';
        db.query(query, (error, results) => {
          if (error) {
            reject('Erro ao buscar todos os ramais: ' + error);
          } else {
            resolve(results);
          }
        });
      });
    }
    async function buscarPorId(id) {
        return new Promise((resolve, reject) => {
          const query = 'SELECT * FROM ramais WHERE id = ?';
          db.query(query, [id], (error, results) => {
            if (error) {
              reject('Erro ao buscar o ramal pelo ID: ' + error);
            } else {
              if (results.length > 0) {
                resolve(results[0]);
              } else {
                reject('Nenhum ramal encontrado com o ID fornecido');
              }
            }
          });
        });
      }

      async function criarRamal(novoRamal) {
        return new Promise((resolve, reject) => {
          const query = 'INSERT INTO ramais SET ?';
          db.query(query, novoRamal, (error, results) => {
            if (error) {
              reject('Erro ao criar um novo ramal: ' + error);
            } else {
              resolve(results.insertId);
            }
          });
        });
      }

      async function atualizarRamal(id, novosDetalhes) {
        return new Promise((resolve, reject) => {
          const query = 'UPDATE ramais SET ? WHERE id = ?';
          db.query(query, [novosDetalhes, id], (error, results) => {
            if (error) {
              reject('Erro ao atualizar o ramal: ' + error);
            } else {
              resolve(results.affectedRows > 0);
            }
          });
        });
      }
      
      async function apagarRamal(id) {
        return new Promise((resolve, reject) => {
          const query = 'DELETE FROM ramais WHERE id = ?';
          db.query(query, [id], (error, results) => {
            if (error) {
              reject('Erro ao apagar o ramal: ' + error);
            } else {
              resolve(results.affectedRows > 0);
            }
          });
        });
      }
  
  module.exports = {

    buscarTodos,
    buscarPorId,
    criarRamal,
    atualizarRamal,
    apagarRamal

  };


      