// pros: muy bueno para relaciones
// contras: dificil de escalar, no es para una sola persona.

// undirected: los nodos se comunican ida y vuelta. como facebook, si yo te tengo vos me tenes.
// directed: los nodos se comunican ida, o ida y vuelta, como twitter, yo te sigo, pero tal vez vos no.

// unweighted: los nodos tienen un valor, los edges (las lineas) 
// weighted: los nodos y las lineas tienen valores. para calcular caminos optimos.

// cyclic: cuando puedo dar toda la vuelta a traves de nodos
// acyclic: cuando es medio linear y voy de A a C pero no puedo dar la vuelta. 


// //edgelist
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]  // son las conexiones de un graph, por pares.

// //adjacent List (objeto de arrays)
// const graph = [[2], [2, 3], [0, 1, 3], [1, 2]] // el indice del array, es el valor del nodo y en ese indice pongo arrays con sus conexiones.

// // adjacent matrix
// const graph = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 0]
// ]

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
      0: [1, 2]
    }
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(`${node} ==> ${connections}`)
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

//Answer:
// 0 ==> 1 2
// 1 ==> 3 2 0
// 2 ==> 4 1 0
// 3 ==> 1 4
// 4 ==> 3 2 5
// 5 ==> 4 6
// 6 ==> 5