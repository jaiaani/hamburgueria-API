import { resolve } from "dns"
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
            console.log(req.params.idOuNome)
            
        })
       
        app.post('/hamburguer', (req, res) => {
            const burguer = req.body
            const hamburguer = new HamburguerModel(burguer.nome, burguer.preco, burguer.descricao)
            SQLcomandos.insertHamburguer(res, hamburguer)
        })
        app.delete('/hamburguer/:nome', (req, res)=> {
            const nome = req.params.nome
            SQLcomandos.deleteNome(res, nome)
        })
        
    }
}

export default HamburguerController