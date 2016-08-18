# UnionFind
An implementation of the [union-find data structure](http://en.wikipedia.org/wiki/Disjoint-set_data_structure) for hashable data types.

Union-find is good for maintaining unrelated sets of items, for datasets that require frequent merging of two sets and/or verifying whether two items belong to the same set.

The three main operations allowed on the union-find data structure are `createSet(...u)`, `findSet(u)`, and `union(u,v)`.
The following is a "forest of balanced trees" implementation without path compression.  It achieves a `findSet(u)` and `union(u, v)` in `O(log n)` theoretic worst-case running time.

# Usage

Assume you have a list of items `L = [a, b, c, d, e] that you would like to initially store with the following structure.

```
Set 1 = {a, b, c}
Set 2 = {d}
Set 3 = {e}
```

Note that the items in your list must be of hashable type (Number, String, Symbol).

```
// Import union-find
var UnionFind = require("../index.js")


var L = ['a', 'b', 'c', 'd', 'e', 'f']
// Create a set out of each of the items in the list 
var uf = new UnionFind(...L);

// Merge the sets pairwise
uf.union('a', 'b'); 
// Merging 'a' and 'c' would also work
uf.union('b', 'c');  

// The following two commands will print 'a' 
// because the root of the tree of both 'b' and 'c' is 'a'
console.log(uf['b']);   
console.log(uf['c']);   

// To merge the set for 'b' (Set 1) and the set for 'd' (Set 2)
uf.union('b', 'd');

// Note that uf['b'] is equivalent to uf.findSet('b')
if (uf['b'] === uf['d']) {
  console.log("b and d are in the same set!!");
}

```


# Installation

```
npm install Union-Find-Hashable
```


# API

```
var uf = new UnionFind(...L);
```

Returns a new union-find data structure with `L.length` number of sets, each containing one item of `L`.

```
uf.makeSet(u)
```

Creates a new set containing item `u`.


```
uf.findSet(u)
```
OR
```
uf[u]
```


Returns the representative (the root of the tree) of the set that item `u` is in.


```
uf.union(u,v)
```

Merges the two sets that containing each of `u` and `v` (if they are in different sets). 
