const db = require('../db')




module.exports = {
    
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
          try {
            db.query('SELECT * FROM CARROS', (error, results) => {
              if (error) {
                reject('Erro ao buscar todos os carros: ' + error); // Rejeita a Promise com uma mensagem de erro
              } else {
                resolve(results); // Resolve a Promise com os resultados da consulta
              }
            });
          } catch (error) {
            console.error('Ocorreu um erro inesperado ao buscar todos os carros: ' + error);
          }
        });
      },
     
      
      buscarPorId: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM CARROS WHERE id = ?';
            db.query(query, [id], (error, results) => {
                if (error) {
                    reject('Erro ao buscar o carro pelo ID: ' + error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        reject('Nenhum carro encontrado com o ID fornecido');
                    }
                }
            });
        });
    },

    inserirRegistro: (modelo,placa) =>{
  
      return new Promise((resolve, reject) => {
          const sql = 'INSERT INTO carros (modelo,placa) VALUES (?, ?)';
          db.query(sql, [modelo,placa], (error, results) => {
              if (error) {
                  reject(error);
                  
              } else {
                  resolve(results.insertId);
              }
          });
      });
    },
    
    atualizarRegistro: (id, novoModelo, novaPlaca) => {
      return new Promise((resolve, reject) => {
          const sql = 'UPDATE carros SET modelo = ?, placa = ? WHERE id = ?';
          db.query(sql, [novoModelo, novaPlaca, id], (error, results) => {
              if (error) {
                  reject(error);
              } else {
                  resolve(results.affectedRows > 0);
              }
          });
      });
  }
};
      