// linear search  
// O(1) best case 
// O(n) worst case

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla'); // devuelve 1

beasts.findIndex(function (item) { // devuelve 1
  return item === 'Godzilla';
})

beasts.find(function (item) { // devuelve 'Godzilla'
  return item === 'Godzilla'
})

beasts.includes('GodZilla') // devuelve true

// binary search
  // sirve si la lista esta ordenada
  // me paro en la mitad y pregunto si lo que busco es mayor o menor y me quedo con la mitad que importa, y me paro en la mitad de esa mitad e itero 
  // O(log n) 


// traverse === visit every node O(n)
// lo mismo para trees y graphs


// breadth first search/ traversal
  // voy de izquierda a derecha nivel por nivel
  // speed: O(n) space: O()
  // pros: camino mas corto (gps)
  // cons: mas memoria


// depth first search / traversal
  // voy hasta el fondo por la izquierda, luego subo y busco por otra rama.
  // speed:  O(n), space :
  // pros: usa menos memoria, bueno para la pregunta (existe camino? entre root y nodo)
  // cons: puede ponerse lento, si es muy profundo



// 1: la solucion no esta lejjos del root? breadth
// 2: el arbol es muy profundo y hay pocas soluciones? breadth
// 3: el arbol es muy ancho? depth (bfs necesitaria mucha memoria)
// 4: muchas soluciones pero en el fondo del arbol? depth
// 5: existe camino entre dos nodos? depth
// 6: encontrar el camino mas corto? breadth