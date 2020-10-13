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
}

const tree = new BinarySearchTree();
tree.insert(100);
tree.insert(80);
tree.insert(120);
tree.insert(75);
tree.insert(85);
tree.insert(60);
tree.insert(78);
tree.insert(82);
tree.insert(90);
tree.insert(50);
tree.insert(65);
tree.insert(76);
tree.insert(79);
tree.insert(81);
tree.insert(83);
tree.insert(89);
tree.insert(95);
tree.remove(80);
console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.lookup(6))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}