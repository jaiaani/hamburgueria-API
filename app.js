import express from 'express'
import dotenv from 'dotenv'
import HamburguerController from './src/controller/HamburguerController.js'
import conexaoMysql from './src/infra/MysqlConexao.js'
import Tabela from './src/infra/Tabela.js'
import Resposta from './src/utils/Resposta.js'

dotenv.config()
const app = express()
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))

app.get('/', (req, res) => res.send(new Resposta(200, 'OK','Resilia - Projeto: API REST', {Tema: 'Hamburgueria', Entidade: 'Hamburguer', Database: 'Mysql'})))

conexaoMysql.connect((erro => {
    if(erro){
        console.log({'Houve um erro ao se conectar com o banco de dados': erro}) 
    }
    else {
        
        console.log('Banco de dados conectado com sucesso :D')
        Tabela.init(conexaoMysql)
        
    }
}))


HamburguerController.Rotas(app)