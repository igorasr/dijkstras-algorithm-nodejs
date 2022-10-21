const Graph  = require('./main/grafo');
const data   = require('./exemple.json')

const start  = process.argv[2];
const finish = process.argv[3];

if(!start || !finish){
      console.log(`Parametros obrigatorios Falando: \n`);
      console.log(`node . <args>\nExemplo de Uso: node . A B\n`);
      console.log('O primeiro Parametro refere-se ao inicio da busca e o segundo ao fim da busca.')
      process.exit(1);
}

var grafo = new Graph();      
      // grafo.addVertex('A', {B: 7, C: 8});
      // grafo.addVertex('B', {A: 7, F: 2});
      // grafo.addVertex('C', {A: 8, F: 6, G: 4});
      // grafo.addVertex('D', {F: 8});
      // grafo.addVertex('E', {H: 1});
      // grafo.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
      // grafo.addVertex('G', {C: 4, F: 9});
      // grafo.addVertex('H', {E: 1, F: 3});
      grafo.addListVertices(data)

      grafo.displayDijkstras(start, finish)
