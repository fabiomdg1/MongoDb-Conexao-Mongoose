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

### Tratamento de erro
```
main().catch(err => console.log(err));
```
***

### Criando a função Assíncrona onde conectamos no banco
```
async function main(){
    //Conectando.....
    await mongoose.connect(url)

    mongoose? console.log('Conexão efetuada com sucesso!'):console.log('Falha na comunicação com o banco!')

    //Construindo o schema
    const filmesSchema = mongoose.Schema({
        titulo: String,
        genero: String
    })

    //Compilando o Schema em modelos e nomeando uma Collection
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
