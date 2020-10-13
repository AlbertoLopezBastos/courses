class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    }
    else {

      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          else {
            currentNode = currentNode.left;
          }
        }
        else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          else {
            currentNode = currentNode.right;
          }
        }
      }
    }

    return this;
  }


  lookup(value) {

    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return true;
      }
      else if (value < currentNode.value && currentNode.left !== null) {
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value && currentNode.right !== null) {
        currentNode = currentNode.right
      }
      else {
        return false;
      }
    }

  }

  remove(value) {

    // esta vacio el arbol
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    let nodeSide = '';
    let newNode = null;
    // posibles removidas:
    // remover el root 

    while (true) {

      if (this.root.value === value) {
        console.log('soy root')


        if (!currentNode.right) {
          currentNode = currentNode.left;
          return true;
        }
        else {
          // tengo algo a la derecha y lo quiero hacer root pero me tengo que fijar si tiene algo a la izquierda, y si eso tiene algo a la izquierda tambien.y asi hasta encotnrar el ultimo izquierda y ese se hace root.
          console.log('falta hacer es bardo')
          return false
        }
      }

      else if (value === currentNode.value) {
        // si no tengo derecha ni izquierda , parent right o left sera null.
        if (!currentNode.right) {
          if (!currentNode.left) {
            if (nodeSide === 'right') {
              parentNode.right = null;
            }
            else {
              parentNode.left = null;
            }
            return true;
          }
          //si tengo izquierda, me fijo cuantas, y parent right o left sera esa izquierda/
          // por cada iteracion a la izquierda tengo que hacer que su parent sea si right
          else {

            newNode = currentNode.left;
            while (newNode.left) {
              newNode.left.right = newNode;
              newNode = newNode.left;
            }

            if (nodeSide === 'right') {
              parentNode.right = newNode;
            }
            else {
              parentNode.left = newNode;
            }
            return true;
          }

        }

        // si tengo derecha me fijo si tiene  izquierda, pero tengo que hacerlo todas las izquierdas posibles.
        else {
          newNode = currentNode.right;

          while (newNode.left) {
            newNode = newNode.left;
          }

        }

      }

      else if (value < currentNode.value && currentNode.left !== null) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        nodeSide = 'left';
      }
      else if (value > currentNode.value && currentNode.right !== null) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        nodeSide = 'right';
      }
      else {
        return false;
      }
    }

  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list)
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
//console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.lookup(6))
console.log(tree.breadthFirstSearchRecursive([tree.root], [], []))

