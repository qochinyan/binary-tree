interface nodeType {
  value: number;
  left: null | nodeType;
  right: null | nodeType;
}
class Node {
  left: null | nodeType = null;
  right: null | nodeType = null;
  constructor(public value: number) {}
}
class Tree {
  root: null | nodeType = null;

  add(value:number) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currNode = this.root;
    while (currNode) {
      if (newNode.value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else if (newNode.value > currNode.value) {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }
}
const myTree = new Tree();
export default myTree;
