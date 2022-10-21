const PriorityQueue = require('../utils/priorityQueue')

class Grafo {

  constructor() {
    this.INFINITY = 1 / 0; // Pseudo infinito
    this.vertices = {};    // Lista de Vertices
  }

  /**
   * Adiciona vertices no grafo
   * @param {String} name Label do vertice
   * @param {String} edges Incidencias
   */
  addVertex(name, edges) {
    this.vertices[name] = edges;
  }

  addListVertices(vertices){
    for(const vertice in vertices){
      this.vertices[vertice] = vertices[vertice];
    }
  }

  /**
   * Busca o menor caminho entre dois vértices
   * @param {String} start Inicio do Caminho
   * @param {String} finish Final do Caminho
   * @returns {Array} Path = Menor caminho entre start e finish
   */

  dijkstras(start, finish) {
    var nodes = new PriorityQueue(),
      distancias = {},
      anterior = {},
      path = [],
      menor, alt;

    /**
     * Enfileira e ordena por distancia os vertices  
     */

    for (const vertex in this.vertices) {
      if (vertex === start) {
        distancias[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distancias[vertex] = this.INFINITY;
        nodes.enqueue(this.INFINITY, vertex);
      }

      anterior[vertex] = null;
    }

    
    while (!nodes.isEmpty()) {
      menor = nodes.dequeue(); // Menor item da Fila (1º)

      if (menor === finish) {
        path = [];

        while (anterior[menor]) {
          path.unshift(menor);
          menor = anterior[menor];
        }

        path.unshift(start)
        break;
      }

      if (!menor || distancias[menor] === this.INFINITY) {
        continue;
      }

      for (const vizinho in this.vertices[menor]) {
        alt = distancias[menor] + this.vertices[menor][vizinho];

        if (alt < distancias[vizinho]) {
          distancias[vizinho] = alt;
          anterior[vizinho] = menor;
          nodes.enqueue(alt, vizinho);
        }
      }
    }

    return { path };
  }
  /**
   * Formata e exibe o caminho no console
   * @param {String} start Inicio
   * @param {String} finish Fim
   * @return {void}
   */
  displayDijkstras(start, finish) {
    var { path } = this.dijkstras(start, finish);
    var s = '';
    path.forEach((node, index) => {
      s += `${node}`;
      if (!(path.length == (index + 1))) {
        s += ` -> `;
      }
    })
    console.log(s);
  }
}

module.exports = Grafo;