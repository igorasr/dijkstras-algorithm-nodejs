# Teoria de Grafos
### Implementação do algoritmo de menor caminho (dijkstra)
---
#### [Funcionamento]
O arquio de Execução do programa se localiza em ```./src/application.js```.
Para rodar o código basta rodar ```node .``` no terminal dentro do diretorio do programa.
Será exibido no console o resultado do menor caminho.

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



