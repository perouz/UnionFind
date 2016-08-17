'use strict';
'use restrict';

// This is an implementation of the union-find data structure for hashable object types
// Union-find is used to store sets of unrelated items
// It can find the set of an item, and merge two sets in O(log n) time.
// The following implementation uses the tree structure, 
// without path compression.


class UnionFind {
  constructor(...items) {
    this.sets = {};
    this.ranks = {};
    for (let item of items) {
      this.makeSet(item);
    }
  }


  makeSet(u) {
    // Make sure u is not null and hashable
    if ((u) && (!(u instanceof Object))) {
      this.sets[u] = null;
      this.ranks[u] = 0;
    }
    // Define a getter for each item we add
    // This will give us the dictionary-style functionality
    // Given an item x, UnionFind[x] will return the representative set of x
    // (UnionFind[x] is equivalent to UnionFind.findSet(x))
    this.__defineGetter__(u, function() {return this.findSet(u)});
  }

  // Find the representative of the set that item u is in 
  findSet(u) {
    var pu = this.sets[u]
    while (pu) {
      u = pu
      pu = this.sets[u]
    }
    return u;
  }

  // Merge the two sets that u and v are in 
  union(u, v) {
    var su = this.findSet(u);
    var sv = this.findSet(v); 

    // If items are in the same set, do nothing
    if (su === sv) {
      return;
    }

    // Make the new root the item with higher rank
    if (this.ranks[su] > this.ranks[sv]) {
      this.sets[sv] = su;
    } else if (this.ranks[su] < this.ranks[sv]) {
      this.sets[su] = sv;
    } else {
      // If both items have same rank, 
      // pick the new root arbitrarily
      // and increment its rank. 
      this.sets[sv] = su;
      ++this.ranks[su];
    }
  }
}

module.exports = UnionFind;
