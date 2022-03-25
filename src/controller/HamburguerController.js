import SQLcomandos from "../DAO/sqlComandos.js"
import HamburguerModel from "../model/HamburguerModel.js"

class HamburguerController {
    static Rotas(app){
        app.get('/hamburguer', (req, res)=>{
            SQLcomandos.selectAll(res)
        })
        app.get('/hamburguer/:idOuNome', (req,res) => {
            if(req.params.idOuNome.length > 2){ //considerando que não haverão mais de 99 hamburguers cadastrados
                const nome = req.params.idOuNome
                SQLcomandos.selectNome(res, nome)
            } else {
                const id = parseInt(req.params.idOuNome)
                SQLcomandos.selectId(res, id)
            } 
        })
        app.post('/hamburguer', (req, res) => {
            const burguer = req.body
            const hamburguer = new HamburguerModel(burguer.nome, burguer.preco, burguer.descricao)
            SQLcomandos.insertHamburguer(res, hamburguer)
        })
        app.delete('/hamburguer/:idOuNome', (req, res)=> {
            if(req.params.idOuNome.length > 2){
                const nome = req.params.idOuNome
                SQLcomandos.deleteNome(res, nome)  
            }else{
                const id = parseInt(req.params.idOuNome)
                SQLcomandos.deleteId(res, id)
            }
            
        })
        app.patch('/hamburguer/:idOuNome', (req, res)=> {
            const valores = req.body
            if(req.params.idOuNome.length > 2){ 
                const nome = req.params.idOuNome
                SQLcomandos.atualizaHamburguerPorNome(nome, valores, res)
            } else {
                const id = parseInt(req.params.idOuNome)
                SQLcomandos.atualizaHamburguerPorId(id, valores, res)
            }
            
        })
        app.put('/hamburguer/:id', (req,res)=>{
            const id = parseInt(req.params.id)
            const valores = req.body 
            SQLcomandos.atualizaHamburguerPorId(id, valores, res)
        })
    }
}

export default HamburguerController