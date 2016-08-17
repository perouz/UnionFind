"use strict"

var test = require("tape")
var UnionFind = require("../index.js")

test('Union Find Test', function (t) {
    t.plan(7);

    var uf = new UnionFind('u', 'v', 'w');

    uf.makeSet('x');
    uf.makeSet('y');
    uf.makeSet('z');

    uf.union('u', 'v');
    uf.union('v', 'w');
    uf.union('x', 'y');
    uf.union('y', 'w');

    t.equal(Object.keys(uf.sets).length, 6);

    t.equal(uf['z'], 'z');
    t.equal(uf['w'], uf['v']);
    t.equal(uf['x'], uf['u']);
    t.notEqual(uf['z'], uf['y']);

    t.equal(uf['u'], uf.findSet('u'));
    t.equal(uf.ranks['x'], 2);
});
