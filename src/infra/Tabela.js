class Tabela {
    init(conexao){
        this.conexao = conexao
        this.criarTabelaHamburguer()
        
    }

    criarTabelaHamburguer(){
        const sql = 'CREATE TABLE IF NOT EXISTS `Hamburguers` (`id` int PRIMARY KEY AUTO_INCREMENT, `Nome` varchar(50) NOT NULL, `Preco` decimal NOT NULL, `Descricao` text NOT NULL, CONSTRAINT UQ_Hamburguers_Nome UNIQUE (Nome));'
        
        this.conexao.query(sql,(erro) => {
            if(erro){
                console.log({"Erro em criar tabela Hamburguer": erro})
            }
            else {
                console.log("Tabela de Hamburguer criada com sucesso")
            }
        })
    }
}
export default new Tabela