  /**
   * **************************************************************************************
   * dll: A Concise Doubly-Linked List Object
   *
   * Author: James Futhey <futhey@gmail.com>, 2015
   * 277 characters
   *
   * Each node contains a value and up to two objects, representing the previous (p) and
   * next (n) object in the list, if applicable.
   *
   * @namespace
   * @property {object}  d [data]    represents the doubly-linked list
   * @property {number}  l [length]  represents the total length of the list
   * @method             a [append]  appends a new node to the list, e.g. d.a('first')
   * @method             c [clone]   clones a node at a specific position and appends it to
   *                                 the list, e.g. d.c(3)
   *
   * @method             e [erase]   erases the entire list
   * @method             r [remove]  removes a specific node from the list, e.g. d.r(3)
   * @method             A [toArray] returns the list as an array of values
   * **************************************************************************************
   */

  /**
   * Human-readable code
   */
  var dll = (function () {
    return {
      length: 0,
      data: {},
      append: function (value) {
        var pointer = this.length ? this.length - 1 : 0;

        var node = {
          value: value,
          prev: this.data[pointer]
        };

        this.last = node;

        if (this.length) {
          this.data[this.length - 1].next = node;
        } else {
          this.first = node;
        }

        return this.data[this.length++] = node;
      },
      remove: function (n) {
        this.data[n - 1].n = this.data[n + 1];
        this.data[n + 1].p = this.data[n - 1];
      },
      clone: function (n) {
        this.append(this.data[n].value)
      },
      erase: function () {
        this.length = 0;
        this.data = {};
      },
      toArray: function () {
        arr = [];
        for(var i = 0; i < this.length; i++) a.push(this.data[i].value);
        return arr;
      }
    };
  })();


  /**
   * Replaces human-readable variable names
   */
  d = {
    a: function (v) {
      n = {
        v: v,
        p: d.d[d.l ? d.l-1 : 0]
      };
      d.z=n;
      d.l ? d.d[d.l-1].n = n : d.f=n;
      return d.d[d.l++] = n;
    },
    c: function (n) {
      d.a(d.d[n].v)
    },
    d: {},
    e: function () {
      d.l = 0;
      d.d = {};
    },
    l: 0,
    r: function (n) {
      d.d[n-1].n = d.d[n+1];
      d.d[n+1].p = d.d[n-1];
    },
    A: function () {
      a = [];
      for(i=0;i<d.l;i++) a.push(d.d[i].v);
      return a;
    }
  };


  /**
   * Minified to 277 characters
   */
  d={a:function(v){n={v:v,p:d.d[d.l?d.l-1:0]};d.z=n;d.l?d.d[d.l-1].n=n:d.f=n;return d.d[d.l++]=n},c:function(n){d.a(d.d[n].v)},d:{},e:function(){d.l=0;d.d={}},l:0,r:function(n){d.d[n-1].n=d.d[n+1];d.d[n+1].p=d.d[n-1]},A:function(){a=[];for(i=0;i<d.l;i++)a.push(d.d[i].v);return a}}


  /**
   * Returns a string representing an integer in words
   */
  function integerToString (integer) {
    var output = "";
    var word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    integer = ("" + integer).split('');
    for (var j = 0; j < integer.length; j++) output += word[integer[j]] + " ";
    return output.trim();
  }
  

  /**
   * Populate our DLL with dummy data
   */
  for (var i = 0; i < 25; i++) d.a(integerToString(i));
