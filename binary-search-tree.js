function BinaryTree () {} (function () {
    BinaryTree.prototype = {

        // Container for the object's binary tree
        tree: null,

        count: 0,

        _isBalancing: false,

        // Temporary container when constructing a sorted array
        _temp: [],

        selfBalancingInsert: function (value) {
            this.tree = this._insertNode(this.tree, {value: value});
            this.count++;
            if(!this._isBalancing) {
                this._isBalancing = true;
                this.balance();
                this._isBalancing = false;
            }
        },

        // Insert a new node into the binary tree
        insert: function (value) {
            this.tree = this._insertNode(this.tree, {value: value});
            this.count++;
        },

        // Removes a node from the binary tree
        remove: function (node, cur) {

            var l, r;
            cur = cur || this.tree;

            if ((cur.left && cur.left.value === node) || (cur.right && cur.right.value === node)) {
                if (cur.left.value === node) {
                    // No Children
                    if (!cur.left.left && !cur.left.right) {
                        cur.left = null;
                    } else {
                        if (cur.left.left && !cur.left.right) {
                            // One child: left
                            cur.left = cur.left.left;
                            cur.left.left = null;
                        } else if (!cur.left.left && cur.left.right) {
                            // One child: right
                            cur.left = cur.left.right;
                            cur.left.right = null;
                        } else {
                            // Two children
                            l = cur.left.left;
                            r = cur.left.right;
                            cur.left = null;
                            this._insideOutInsertion(this.toSortedArray(1, l));
                            this._insideOutInsertion(this.toSortedArray(1, r));
                        }
                    }
                } else {
                    // cur.right.value === node
                    // No Children
                    if (!cur.right.left && !cur.right.right) {
                        cur.right = null;
                    } else {
                        if (cur.right.left && !cur.right.right) {
                            // One child: left
                            cur.right = cur.right.left;
                            cur.right.left = null;
                        } else if (!cur.right.left && cur.right.right) {
                            // One child: right
                            cur.right = cur.right.right;
                            cur.right.right = null;
                        } else {
                            // Two children
                            l = cur.right.left;
                            r = cur.right.right;
                            cur.right = null;
                            this._insideOutInsertion(this.toSortedArray(1, l));
                            this._insideOutInsertion(this.toSortedArray(1, r));
                        }
                    }
                }
            } else if (node < cur.value) {
                if (cur.left) {
                    return this.remove(node, cur.left);
                }
            } else {
                if (cur.right) {
                    return this.remove(node, cur.right);
                }
            }
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
            this._temp = [];
            this._runSequentially(direction, root, function(node, tree) {
                tree._temp.push(node.value);
            });
            return this._temp;
        },

        balance: function () {
            var a;

            a = this.toSortedArray(1, this.tree);
            this.tree = null;
            this._insideOutInsertion(a);
        },

        search: function (node, cur) {
            cur = cur || this.tree;

            if (cur.value === node) {
                return cur;
            } else if (node < cur.value) {
                if (cur.left) {
                    return this.search(node, cur.left);
                }
            } else {
                if (cur.right) {
                    return this.search(node, cur.right);
                }
            }
        },

        _insideOutInsertion: function(array) {

            var index, leftArray, value, rightArray;

            // Find middle value
            index = Math.floor(array.length / 2);
            // Split into leftArray, value, rightArray
            value = array[index];
            rightArray = array;
            leftArray = rightArray.splice(0, index);
            rightArray.splice(0,1);
            // Insert middle value into tree
            this.insert(value);
            // _insideOutInsertion for the two remaining arrays
            if(leftArray.length) {
                this._insideOutInsertion(leftArray);
            }
            if(rightArray.length) {
                this._insideOutInsertion(rightArray);
            }
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
bt.selfBalancingInsert(14);
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


bt.balance();

console.log("Height: " + bt.height());
console.log("All node values, Sorted ascending: " + bt.toSortedArray());
console.log("All node values, Sorted descending: " + bt.toSortedArray(-1));

console.log(bt.search(19));

bt.remove(19);
bt.remove(23);
bt.remove(5);

console.log("All node values, Sorted ascending: " + bt.toSortedArray());
console.log("Height: " + bt.height());

bt.balance();

console.log("All node values, Sorted descending: " + bt.toSortedArray(-1));
console.log("Height: " + bt.height());
