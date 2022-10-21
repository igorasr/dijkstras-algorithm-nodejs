# Teoria de Grafos
### Implementação do algoritmo de menor caminho (dijkstra)
---
#### [Funcionamento]
O arquio de Execução do programa se localiza em ```./src/application.js```.
Para rodar o código basta rodar ```node .``` no terminal dentro do diretorio do programa.
Será exibido no console o resultado do menor caminho.
##### Existem duas maneira de inserir dados ao grafo:
* **Manualmente**: Utilizando a função ```grafo.addVertex```, que recebem dois parâmetros, a label do vertice e suas adjacencias com os pesos
    >   grafo.addVertex('A', {B: 7, C: 8})

* **Lista**: Utilizando a função ```grafo.addListVertices(data)``` que recebe um objeto json que pode ser importado ou inserido diretamente na função, dentro do código ja existe um exemplo de importação;
    > const data  = require('./exemple.json')
    > grafo.addListVertices(data)

##### Para alterar os vértices de inicio e fim 
#### [Exemplos]
Dentro de ```./src``` existe um arquivo nomeado de ```exemple.json```, dentro desse arquivo é onde está a estrutura inical do grafo, onde as chaves são os vertices e os valores são as incidencias com seus respectivos pesos.
```
"Chave":{
    "Incidencia": "Peso"
}
// Exemplo
{
     "A": {
        "B": 7,
        "C": 8
    },
    "B": {
        "A": 7,
        "F": 2
    }
}
```



