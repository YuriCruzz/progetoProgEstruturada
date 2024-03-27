/* ************* VARIÁVEIS GLOBAIS ********* */

// Variável de controle do estoque a partir de vendas e compras
let estoque = []; // Este array deve possuir objetos
let usuarios = []; // Este array deve possuir objetos
let fornecedor = [];


/* ************* OBJETOS ********* */

let user1 = {
    nomeDoUsuario: 'Felipe',
    cpf: '123.000.321-12',
    email: 'felopin123@gmail.com',
    senha: '@fe131214',
    cargo: 'Gerente'
}
usuarios.push(user1)

let user2 = {
    nomeDoUsuario: 'Marcos',
    cpf: '957.448.475-02',
    email: 'marquinmf@gmail.com',
    senha: 'mardoscria',
    cargo: 'Servidor'
}
usuarios.push(user2)

let user3 = {
    nomeDoUsuario: 'Anny',
    cpf: '753.053.728-87',
    email: 'Annynha@gmail.com',
    senha: 'tibesourso',
    cargo: 'Gerente'
}
usuarios.push(user3)

let user4 = {
    nomeDoUsuario: 'Leila',
    cpf: '535.554.663-30',
    email: 'lili13@gmail.com',
    senha: '@lili13',
    cargo: 'Servidor'
}
usuarios.push(user4)

let user5 = {
    nomeDoUsuario: 'Lucius',
    cpf: '279.486.340-10',
    email: 'lucidobem@gmail.com',
    senha: '#luluefada',
    cargo: 'Gerente'
}
usuarios.push(user5)

let  empresa1 = {
     nomeDaEmpresa: 'pichau',
     cnpj: '123456',
     email: '@pichau.gmail.com.br',
     telefone: '(84) 9876-5432',
     produtos: ['Microfone Pichau Izar, RGB, Preto Microfone Pichau Polaris, Usb, Preto Cadeira Game Pichau Omega S Assasins Creed Legacy, Preto E Vermelho Monitor Profissional Pichau Perseus Pro, 27 POL. IPS, QHD, 4MS, 75HZ, BASE AJUSTAVEL, HDMI/DP MONITOR GAMER PICHAU CEPHEUS FUSE 28, 28 POL, IPS, 4K, 1MS, 144HZ, FREESYNC E G-SYNC, HDMI/DP']


}
fornecedor.push(empresa1)

let empresa2 = {
    nomeDaEmpresa: 'terabyte',
    cnpj: '1234567',
    email: '@terabyte.gmail.com.br',
    telefone: '(84) 1098-7654',
    produtos: ['xbox series s 512gb nintendo switch oled 64gb, um joycon Gabinete Gamer Montech King 95 PRO ARGB, Mid Tower, Vidro Temperado, ATX, White, Sem Fonte, Com 6 Fans + Suporte Montech VH2 Monitor Gamer Duex, 27 Pol, Full HD, IPS, 240Hz, 1ms, HDMI/DP, DX270GHQ 240HZ Monitor Gamer SuperFrame Precision, 27 Pol Curvo, Quad HD, 124.4% sRGB, FreeSync/G-Sync, 1ms, 165Hz, HDMI/DP, SFV2701G']

}
fornecedor.push(empresa2)

let empresa3 = {
    nomeDaEmpresa: 'Tecnologia XYZ',
    cnpj: '12.345.678/0001-91',
    email: 'contato@tecnologiaxyz.com.br',
    telefone: '(84) 1234-5678',
    produtos: ['Notebook XYZ, Mouse XYZ, Teclado XYZ, Monitor XYZ, Impressora XYZ']
}
fornecedor.push(empresa3)

let empresa4 = {
    nomeDaEmpresa: 'tecnologia ABC',
    cnpj: '98.765.432/0001-10',
    email: 'atendimento@alimentosabc.com.br',
    telefone: '(84) 9876-5432',
    produtos: ['ps5, placa de vídeo ABC processador ABC gabinete ABC teclado ABC']

}
fornecedor.push(empresa4)

let empresa5 = {
    nomeDaEmpresa: 'tecnologia LMN',
    cnpj: '5478-3475',
    email: 'lmn@gmail.com.br',
    telefone: '(84) 6578-4576',
    produtos: ['notebook carregador xbox one x cadeira gamer luminária gamer']

    
}
fornecedor.push(empresa5)
console.log(empresa5[4].nomeDaEmpresa)


/* ************* FUNÇÕES ********* */

function cadastrarUsuarios() {
    let nomeDoUsuario = prompt('Informe o Nome do Usuario a ser Cadastrado:');
    let cpf = prompt('Informe o CPF do Usuario a ser Cadastrado:');
    let email = prompt('Informe o Emeil do Usuario a ser Cadastrado:');
    let senha = prompt('Informe uma Senha para o Cadastrado do Usuario:');
    let cargo = prompt('Informe o Cargo do Usuario a ser Cadastrado:');
    
}

function listarUsuarios() {
    
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function removerUsuario() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function alterarDadoUsuario() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */ 
}


function logarUsuarioR(nome, senha) {
    
    if (nome == 'usuario' && senha =='senha') {
        
    console.log('Login bem-sucedido! Bem-vindo, ' + nome + '.');
        return true; 
    } else {
        
    console.log('Nome de usuário ou senha incorretos. Tente novamente.');
        return false; 
    }
}

var nome = ('Digite seu nome de usuário:');
var senha = ('Digite sua senha:');


if (login(nome, senha)) {
    
    console.log('Ações após o login...');
} else {
   
    console.log('Ações em caso de falha no login...');
}



function adicionarProduto() {

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}


function adicionarProduto(nome, preco) {

 const novoProduto = new Produto(nome, preco);
     
console.log('Produto adicionado:', novoProduto);
  return novoProduto;
}

const produtoAdicionado = adicionarProduto('Camiseta', 25.99);

}

function validadeIndividual() {
    let nome = prompt("Digite o nome do produto para consultar sua validade:");  
}



function imprimirRelatorioValidades() {
    /* 
       Aqui vocês implementam o código referente a função 
    */
}

function removerProduto() {
    let nome = prompt("Digite o nome do produto que deseja remover:");

    /* 
       Aqui vocês implementam o código referente a função 
    */
}

function atualizarQuantidade() {
    let nome = prompt("Digite o nome do produto para atualizar sua quantidade:");
    let quantidade = parseInt(prompt("Digite a nova quantidade do produto:"));
    /* 
       Aqui vocês implementam o código referente a função 
    */
}

function cadastrarFornecedor() {
    let nomeDaEmpresa;
    let cnpj;
    let email;
    let telefone;
    let produtos = [];

}

function listarFornecedores() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function removerFornecedor() {
    let remover = prompt('informe qual o fornecedor que deseja remover(nome e telefone)')
    if (fornecedor(nome.dofornecedor, cnpj.dofornecedor, telefone.dofornecedor, email.dofornecedor, produtos.dofornecedor == nomeDaEmpresa.fornecedor, cnpj.fornecedor, telefone.fornecedor, email.fornecedor, produtos.fornecedor)){
    console.log(`o fornecedor ${nomeDaEmpresa} cujo número de telefone é ${telefone.dofornecedor} está removido`)
    }else{
        console.log('remoção inválida')
    }
    
    

       
}


/*  --------- SEQUÊNCIA DE VALIDAÇÃO E TESTE DO CÓDIGO --------- */


console.log('******+++*******');
console.log('Sistema de controle de estoque');
console.log('******+++*******');

/* 01 - Processo de cadastro de 6 usuários */
for (let i = 0; i < 6; i++) {
    cadastrarUsuarios();
}

/* 02 - Listar todos usuários cadastrados, com todas informações */
listarUsuarios();

/* 03 - Remover 1 dos usuários, qualquer um deles e depois listar novamente eles
        para ver se o usuário foi removido. */
removerUsuario();
listarUsuarios();

/* 04 - Alterar algum dado do usuário */
alterarDadoUsuario();

/* 05 - Fazer login com um dos usuários cadastrados */
logarUsuario();

/* 06 - Cadastrar pelo menos 15 produtos */
adicionarProduto();

/* 07 - Consultar validade individualmente de um produto */
validadeIndividual();

/* 08 - Consultar validade de todos os produtos em formato relatório */
imprimirRelatorioValidades();

/* 09 - Remover pelo menos 5 produtos */
removerProduto();

/* 10 - Atualizar a quantidade de pelo menos 5 produtos */
atualizarQuantidade();

/* 11 - Cadastrar fornecedor, no minimo 3 */
cadastrarFornecedor();

/* 12 - Listar fornecedores */
listarFornecedores();

/* 13 - Remover 1 fornecedor e depois imprimir a lista completa */
removerFornecedor();
listarFornecedores();
//,,,
