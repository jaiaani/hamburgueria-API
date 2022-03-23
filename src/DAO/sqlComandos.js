import conexaoMysql from "../infra/MysqlConexao.js"

class SQLcomandos{
    static selectAll(res){
        const sql = 'SELECT * FROM Hamburguers'
        conexaoMysql.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao realizar esta requisição': erro})
            }
            else {
                res.status(200).json({'Requisição realizada com sucesso' : resultado})
            }
        })
    }
    static selectNome(res, nome){
        const sql = `SELECT * FROM Hamburguers WHERE Nome = "${nome}"`
        conexaoMysql.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao realizar esta requisição': erro})
            }
            else {
                res.status(200).json({'Requisição realizada com sucesso' : resultado})
            }
        })
    }
    static selectId(res, id){
        const sql = `SELECT * FROM Hamburguers WHERE id = ${id}`
        conexaoMysql.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao realizar esta requisição': erro})
            }
            else {
                res.status(200).json({'Requisição realizada com sucesso' : resultado})
            }
        })
    }
    static insertHamburguer(res, hamburguerCriado){
        const sql = ' INSERT INTO Hamburguers SET ?'
        conexaoMysql.query(sql, hamburguerCriado, (erro, resultado) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao cadastrar o novo Hamburguer': erro})
            }
            else {
                res.status(200).json({'Hamburguer criado com sucesso :D' : resultado, hamburguerCriado})
            }
        })
    }
    static deleteNome(res, nome){ //deleta pelo nome
        const sql = `DELETE FROM Hamburguers WHERE nome = "${nome}"`
        conexaoMysql.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao deletar esse Hamburguer': erro})
            }
            else {
                res.status(200).json({'Hamburguer removido com sucesso :D' : resultado})
            }
        })
    }
    static atualizaHamburguerPorId(id, valores, res){
        const sql = `UPDATE Hamburguers SET ? WHERE id=${id}`
        conexaoMysql.query(sql, valores, (erro, result) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao atualizar as informações desse Hamburguer': erro})
            }
            else {
                res.status(200).json({
                    "As informações foram atualizadas com sucesso :D":
                    {resultado: result, "Valores inserido": valores}
                })
            }
        })
    }
    static atualizaHamburguerPorNome(nome, valores, res){
        const sql = `UPDATE Hamburguers SET ? WHERE Nome="${nome}"`
        conexaoMysql.query(sql, valores, (erro, result) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao atualizar as informações desse Hamburguer': erro})
            }
            else {
                res.status(200).json({
                    "As informações foram atualizadas com sucesso :D":
                    {resultado: result, "Valores inserido": valores}
                })
            }
        })
    }
    static atualizaTudoPorId(id, valores, res){
        const sql = `UPDATE Hamburguers SET ? WHERE id=${id}`
        conexaoMysql.query(sql, valores, (erro, result) => {
            if(erro){
                res.status(400).send({'Ocorreu um erro ao atualizar as informações desse Hamburguer': erro})
            }
            else {
                res.status(200).json({
                    "As informações foram atualizadas com sucesso :D":
                    {resultado: result, "Valores inserido": valores}
                })
            }
        })
    }
}

export default SQLcomandos
