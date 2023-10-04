import recipe from '../img/recipe.png';
import wallet from '../img/wallet.png';
import futebol from '../img/futebol.png';
import tunes from '../img/tunes.png';

export const projects = [
{
  id: 1,
  name: 'Recipe Apps',
  link: 'https://github.com/gabgaleski/recipes-app',
  image: recipe,
  tools: ['React', 'Context API', 'RTL', 'Tailwind'],
  module: 'Front-End',
  description: 'Projeto Desenvolvido durante o curso da Trybe na formação do modulo de Front-End. Foi realizado em grupo, utilizando metodologias ageis, comunicação e outras soft skills. O Aplicativo de Receita conta com diversas funcionalidades de uma aplicação real sendo dividido principalmente em drink e comidas, podendo realizar receitas, salva-las, ter seu proprio perfil, salvar receitas realizadas, etc.'
},
{
  id: 2,
  name: 'Futebol Clube',
  link: 'https://github.com/gabgaleski/futebol-clube',
  image: futebol,
  tools: ['Typescript', 'Express', 'React', 'MySQL'],
  module: 'Full-Stack',
  description: 'O Projeto se trata de uma aplicação full stack onde foi incrementado a construção da API para o front-end, utilizando Typescript, node e sequelize, juntamente das metodologias da Programação Orientada a Objetos, e SOLID. Na aplicação, é possivel ver os resultados das partidas, filtralos, logar em sua conta, mudar o status da partida, adicionar uma partida entre outras funções. Toda a aplicação é testada com Mocha, Jest, chai e sinon e utiliza de validações e criptografias junto do banco de dados MySQL'
},
{
  id: 3,
  name: 'Trybe Wallet',
  link: 'https://github.com/gabgaleski/trybe-wallet',
  image: wallet,
  tools: ['React', 'Redux', 'RTL', 'Redux Thunk'],
  module: 'Front-End',
  description: 'Projeto Desenvolvido durante o curso da Trybe com foco na utilização do Redux e do Redux thank. Nele Foi criado Uma aplicação com react para registro de gastos estrangeiros, fazendo a conversao para o Real no momento do cambio atual, utilizando API, que muda conforme o cambio muda, e gerando uma tabela de gastos onde é possivel editar, excluir e adicionar mais gastos.'
},
{
  id: 4,
  name: 'Trybe Smith',
  link: 'https://github.com/gabgaleski/trybesmith',
  image: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png',
  tools: ['Node', 'Express', 'Sequelize', 'MySQL', 'Typescript'],
  module: 'Back-End',
  description: 'O Projeto tem como objetivo as construção de uma API Restful de uma loja de armas medievais utilizando principalmente Typescript, sequelize, express e node. Nele é possivel fazer login, criar ordens de compra e registrar produtos, alem de listar os mesmos.'
},
{
  id: 5,
  name: 'Store Manager',
  link: 'https://github.com/gabgaleski/store-manager',
  image: 'https://blog.geekhunter.com.br/wp-content/uploads/2019/11/Sua-API-n%C3%A3o-%C3%A9-RESTful-Entenda-por-qu%C3%AA..jpg.webp',
  tools: ['Node', 'Express', 'Docker', 'MySQL'],
  module: 'Back-End',
  description: 'O Projeto tem como objetivo as construção de uma API Restful, utilizando arquitetura MSC. A API trata de um sistema de vendas de produtos, registrando vendas, alterando, deletando e implementando, tudo conectado com o banco de dados relacional MySQL. Nele tambem existem as validações para garantir o bom funcionamento, e os testes com mocha, chai, e sinon, mantendo a estrutura confiavel.'
},
{
  id: 6,
  name: 'Trybe Tunes',
  link: 'https://github.com/gabgaleski/trybe-tunes',
  image: tunes,
  tools: ['React', 'Javascript', 'API', 'CSS3'],
  module: 'Front-End',
  description: 'Projeto Desenvolvido durante o curso da Trybe com foco na manipulação do React, com react rooters e outras ferramentas. A aplicação exige um login, onde apos ser concluido, vai para a pagina principal que contem as buscas por musica, as musicas favoritas e o perfil do usuario. È possivel adicionar musicas as favoritas, procurar por musicas ou artistas e modificar seu perfil.'
}
]
