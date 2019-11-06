// importa o modulo do express
const express = require('express')

// cria uma instancia da aplicação do express - inicia
const app = express();
cons
// criando uma rota
app.get('/',(req,res)=>{
    console.log(req);
    console.log('req.host: ', req.host)
    console.log('req.method', req.method)
    console.log('req.url: ', req.url)
    res.send('<h1>funcionando que é uma beleza</h1>') 
});

app.get('/', (req,res)=>{
    res.send('app online')
});

const bancoDeDadosUsuarios =  [];
const mateus = {nome:'mateus', idade: 23}
bancoDeDadosUsuarios.push(mateus)
const paulo = {nome:'paulo', idade: 27}
bancoDeDadosUsuarios.push(paulo)

app.get('/usuarios',(req,res)=>{
    res.send(bancoDeDadosUsuarios)
});

app.post('/usuarios', (req,res)=>{
    const novoUsuario =  req.body;
    bancoDeDadosUsuarios.push(novoUsuario);
    res.send('adicionado co sucesso')
});
// app online(atendendo) na porta - escutando  a porta 
app.listen(3000)