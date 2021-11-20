"use strict";
// basic type
let nama = "oja";
let umur = 20;
let menikah = false;
let jalan = "terserah";
// array
let nomor = [1, 2, 3, 4, 5];
let anything = ["halo", 1, true];
// array tuple || array yang sudah didefinisikan typenya
let person = ["oja", 20, false];
// array of array
let employee;
employee = [
    ["halo", 1],
    ["test", 2],
];
// union
let uid;
uid: "halo";
uid: 2;
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
// object option 1
const user = {
    id: 1,
    name: "oja",
};
const product = {
    id: 1,
    product: "buku",
};
// type assertion
let cid = 1;
let customerId = cid;
// function
function addNum(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const product1 = {
    id: 1,
    product: "buku",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
}
// Data Modifier
class Person1 {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Person2 {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const halo = new Person2(1, "halo");
// extends subclass
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const test = new Employee(1, "oja", "backend dev");
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["oja", "anang", "halo"]);
