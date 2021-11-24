//String de conexao - Informar sua senha do banco na string abaixo
const url = 'mongodb+srv://fabiomdg:"digite sua senha do db aqui sem aspas"@cluster0.f09zy.mongodb.net/udemy?retryWrites=true&w=majority';
//Definindo a porta para conexão com servidor
const port = 3000

//Importação do módulo
const mongoose = require('mongoose')


main().catch(err => console.log(err));

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

    //Salva no banco de dados
    await novoFilme.save()

    console.log(`Efetuado um registro no banco...`)
}