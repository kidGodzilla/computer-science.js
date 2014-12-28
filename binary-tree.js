function BinaryTree () {} (function () {
    BinaryTree.prototype = {

        // Container for the object's binary tree
        tree: null,

        // Temporary container when constructing a sorted array
        temp: [],

        // Insert a new node into the binary tree
        insert: function (value) {
            this.tree = this._insertNode(this.tree, {value: value});
        },

        // Return the height of a binary tree
        height: function (node) {
            node = node || this.tree;
            return this._treeHeight(node);
        },

        // Return a sorted binary tree
        toSortedArray: function (direction, root) {
            direction = direction === -1 ? 0 : direction;
            root = root || this.tree;
            this.temp = [];
            this._runSequentially(direction, root, function(node, self) {
                self.temp.push(node.value);
            });
            return this.temp;
        },

        // Private method: Inserts a new node into a binary tree & returns it
        _insertNode: function (tree, node) {

            if (!tree) return tree = node;

            if (tree.value < node.value) {
                tree.right ? this._insertNode(tree.right, node) : tree.right = node;
            } else {
                tree.left ? this._insertNode(tree.left, node) : tree.left = node;
            }

            return tree;
        },

        // Private method: Returns the height of a binary tree
        _treeHeight: function (node) {
            return node ? 1 + Math.max( this._treeHeight( node.left ), this._treeHeight( node.right ) ) : 0;
        },

        /*
         * Private method: _runSequentially
         * Executes a function on each element of the tree in a specific order.
         *
         * d: execute ascending, boolean
         * cur: current element or root of tree
         * f: function we wish to execute on each item, passing (currentNode, binary tree object)
         *
         */
        _runSequentially: function(d, cur, f) {

            var dir = ['right', 'left'];
            d = d===0 ? 0 : 1;
            cur = cur || this.tree;

            if(cur[dir[d]]) {
                this._runSequentially(d, cur[dir[d]], f);
            }

            f(cur, this);

            dir = ['left', 'right'];

            if(cur[dir[d]]) {
                this._runSequentially(d, cur[dir[d]], f);
            }
        }
    };
}());

// Construct a new binary tree object
var bt = new BinaryTree();

// Insert some demo data
bt.insert(5);
bt.insert(12);
bt.insert(10);
bt.insert(1);
bt.insert(14);
bt.insert(4);
bt.insert(20);
bt.insert(26);
bt.insert(8);
bt.insert(19);
bt.insert(23);
bt.insert(3);

// View the results
console.log("Height: " + bt.height());
console.log("All node values, Sorted ascending: " + bt.toSortedArray());
console.log("All node values, Sorted descending: " + bt.toSortedArray(-1));
