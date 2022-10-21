class PriorityQueue{
  
    constructor(){
      this._nodes = [];
    }

    /**
     * Enfileira
     * @param {number} priority Prioridade no caso dos grafos os pesos
     * @param {String} key Label do vertice
     */
    enqueue(priority, key) {
      this._nodes.push({key: key, priority: priority });
      this.sort();
    }

    /**
     * Desenfileira
     * @returns {String} Primeiro item da fila
     */
    dequeue() {
      return this._nodes.shift().key;
    }

    /**
     * Ordena a fila com base na prioridade (peso)
     */
    sort() {
      this._nodes.sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
    /**
     * Verifica se a Fila está vazia
     * @returns {Bolean}
     */
    isEmpty() {
      return !this._nodes.length;
    }
  }

  module.exports = PriorityQueue;