# Conectando com o MongoDB Atlas usando Mongoose e Node.js
### Definindo a string de conexão com o banco
```
//Informe seu usuário e senha na string abaixo, retirando os sinais de <  >
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority';
```
***

### Importando o Módulo Mongoose
Podemos informar diretamente o número da porta, mas para facilitar iremos definir uma variável para armazenar este número.
```
const mongoose = require('mongoose')
```
***

### Caso houver algum erro, será exibido no console
```
main().catch(err => console.log(err));
```
***

### Criando a função Assíncrona onde conectamos no banco
```
async function main(){
    //Conectando.....
    await mongoose.connect(url)

    //Apenas mostra no console que efetuamos a conexão no banco
    mongoose? console.log('Conexão efetuada com sucesso!'):console.log('Falha na comunicação com o banco!')

//////////////////////////////////////////A conexão com o banco termina aqui////////////////////////////////////////
//Mas vamos dar continuidade e fazer uma inserção no banco para testar se ocorreu tudo conforme o esperado

    //Construindo o schema
    const filmesSchema = mongoose.Schema({
        titulo: String,
        genero: String
    })

    //Compilando o Schema em modelos e nomeando uma Collection - Neste caso nomeamos como filmes
    const filme = mongoose.model('filmes',filmesSchema)
    
    //Criando um novo documento
    const novoFilme = new filme({
        titulo: 'Jurassic Park',
        genero: 'Aventura'
    })    

    //Salvando no banco de dados
    await novoFilme.save()

    console.log(`Efetuado um registro no banco...`)
}
```
Agora precisamos ir até o banco criado no atlas e verificar se o novoFilme foi inserido com sucesso!
