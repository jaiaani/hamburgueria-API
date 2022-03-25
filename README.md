# API REST - Hamburgueria 

Projeto de final de módulo - Módulo 4: 
Api Rest com nodejs.

<div align="center"/>

## 				Sumário
[Tecnologias Utilizadas](#tecnologias) | [Sobre](#sobre)|  [Rotas da API](#rotas)|  [Como usar?](howTo)| [Portas em uso](#portas)

<img src='./imgReadme/burguers.gif' width=450px/>

</div>

<div id='tecnologias'/>

## Tecnologias Utilizadas: 

* Nodejs 
* Express
* MySql
* Docker

<div id='sobre'/>

## Sobre 

Projeto do fim do 4º módulo: Criar uma API REST com NodeJS.
O tema trabalhado é Hamburgueria, essa API contém somente o CRUD da entidade Hambúrguer.

A entidade Hambúrguer possui os seguintes atributos:

```javascript
{
“id”: “int PK AUTO_INCREMENT”,
“nome”: “varchar(50) NOT NULL - UNIQUE”
“preco”: “decimal(10,2) NOT NULL”
“descrição”: “text NOT NULL”
}
```


<div id='rotas'/>

## Rotas da API

**[GET]** /hamburguer - A rota exibirá todos os hambúrgueres cadastrados.
- - - -
**[GET]**_hamburguer_:idOuNome - A rota exibirá o hambúrguer pelo Id ou pelo nome. 
- - - -
**[POST]**/hamburguer - A rota criará um nov hamburguer com as informações enviadas pela requisição. 
Para poder cadastrar novos hamburguers utilize o modelo abaixo: 
```javascript
{
“nome”: “X Egg Bacon”
“preco”: 11.99
“descrição”: “Pão, carne, queijo, ovo e bacon”
}

```
- - - -
**[PUT]** _hamburguer_:id- A rota irá atualizar todas as informações do hambúrguer selecionado pelo Id.
- - - -
**[PATCH]**_hamburguer_:idOuNome - A rota atualiza a informação passada pelo corpo da requisição do hambúrguer selecionado pelo nome ou pelo id. 
- - - -
**[DELETE]** _hamburguer_:idOuNome - A rota deleta os registros do hambúrguer selecionado pelo id ou nome.
- - - -

<div id='howTo'>
  
## Como Usar?  
  
Para utilizar a API é necessário o download de apenas duas ferramentas: **Docker e Git**

No terminal do seu computador faça: 

**1. Certifique-se que o Docker está funcionando certinho com o comando:** 
```bash
docker run hello-world

```
**2. Copie e cole o comando abaixo no seu terminal.**
```bash
git clone git clone https://github.com/jaiaani/hamburgueria-API.git && cd "hamburgueria-API" && docker-compose up --build
```
 ------- OU ------------
  
**2. Clone o repositório dentro de uma pasta da sua preferência:**
```git
git clone git clone https://github.com/jaiaani/hamburgueria-API.git 
```

**3. Entre na pasta do projeto:**
```bash
cd "hamburgueria-API"
```

**4. Inicialize o arquivo docker-compose:**
```docker
docker-compose up --build
```

Prontinho. O docker-compose irá iniciar um contêiner mysql e nodejs para rodar a aplicação.
- - - -
  <div id='portas'/>
  
### Portas utilizadas:
  
Para levantar o servidor o docker está utilizando a porta 3000 do seu computador e a porta 3000 do container também.

Para se conectar com o MySQL, o docker está utilizando a porta 3008 de seu computador e utilizando a porta 3006 do container.

*Se caso a porta 3000 de seu computador já estiver em uso* 

> Na linha 36 do arquivo docker-compose.yml troque o 3000 do lado esquerdo por uma porta disponível:  
```docker
ports:
      - /3000/:3000
    expose:
      - 3000
```

*Se caso a porta 3008 de seu computador já estiver em uso:*
  
> Na linha 13 do arquivo docker-compose.yml troque 3008 por uma porta que esteja disponível:   
```docker 
ports:
      - 3308:3306
    expose:
      - 3306
```
<div align="center"/>
  
<img src="./imgReadme/burger-dance.gif" width=450px>
  
 </div>

