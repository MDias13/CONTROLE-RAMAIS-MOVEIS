const CarroService = require('../services/CarroService');


module.exports = {
   
    buscarTodos: async (req,res)=> {
        let json = {error:'',result:[]};

        let carros = await CarroService.buscarTodos();
        console.log(carros);
        for(let i in carros){
            json.result.push({
                id: carros[i].id,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            })
        }
        res.json(json)
    },

    buscarPorId: async (req, res) => {
        let json = { error: '', result: {} };
    
        try {
            // Obtém o ID a partir dos parâmetros da requisição
            const id = req.params.id;
    
            // Verifica se o ID foi fornecido
            if (!id) {
                json.error = 'ID não informado';
                return res.status(400).json(json);
            }
    
            // Chama o serviço para buscar o carro pelo ID
            let carro = await CarroService.buscarPorId(id);
    
            // Verifica se o carro foi encontrado
            if (carro) {
                json.result = {
                    id: carro.id,
                    modelo: carro.modelo,
                    placa: carro.placa
                };
            } else {
                json.error = 'Carro não encontrado';
            }
    
        } catch (error) {
            json.error = 'Erro ao buscar carro';
            console.error(error);
        }
    
        res.json(json);
    },

    inserir: async (req, res) => {
        try {
            let modelo = req.body.modelo;
            let placa = req.body.placa
    
            if (!modelo || !placa) {
                return res.status(400).json({ error: 'Modelo e placa são obrigatórios.' });
            }
    
            const novoId = await CarroService.inserirRegistro( modelo, placa );
            res.json({ id: novoId, modelo, placa });
        } catch (error) {
            console.error('Erro ao inserir registro:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
        }


    },
    atualizar: async (req, res) => {
        try {
            let  id  = req.params.id;
            let  novoModelo = req.body.modelo;
            let  novaPlaca  = req.body.placa;

    
            if (!novoModelo || !novaPlaca) {
                return res.status(400).json({ error: 'Novo modelo e nova placa são obrigatórios.' });
            }
    
            const sucesso = await CarroService.atualizarRegistro(id, novoModelo, novaPlaca);
    
            if (sucesso) {
                res.json({ mensagem: 'Registro atualizado com sucesso.' });
            } else {
                res.status(404).json({ error: 'Registro não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao atualizar registro:', error);
            res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    }
}