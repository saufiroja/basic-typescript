// basic type
let nama: string = "oja";
let umur: number = 20;
let menikah: boolean = false;
let jalan: any = "terserah";

// array
let nomor: number[] = [1, 2, 3, 4, 5];
let anything: any[] = ["halo", 1, true];

// array tuple || array yang sudah didefinisikan typenya
let person: [string, number, boolean] = ["oja", 20, false];

// array of array
let employee: [string, number][];
employee = [
  ["halo", 1],
  ["test", 2],
];

// union
let uid: string | number;
uid: "halo";
uid: 2;

// enum
enum Direction1 {
  up,
  down,
  left,
  right,
}

enum Direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

// object option 1
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "oja",
};

// object option 2
type Product = {
  id: number;
  product: string;
};

const product: Product = {
  id: 1,
  product: "buku",
};

// type assertion
let cid: any = 1;
let customerId = cid as number;

// function
function addNum(x: number, y: number): number {
  return x + y;
}

function log(msg: string | number): void {
  console.log(msg);
}

// interfaces
interface ProductInterfaces {
  id: number;
  product: string;
  name?: string; //--> optional
}

const product1: ProductInterfaces = {
  id: 1,
  product: "buku",
};

// function interfaces
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
class Person {
  id: number; //bisa dibikin protected, private dan public
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

// Data Modifier
class Person1 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// implementasi interfaces in class
interface PersonInterfaces {
  id: number;
  name: string;
  register(): string;
}

class Person2 implements PersonInterfaces {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const halo = new Person2(1, "halo");

// extends subclass
class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const test = new Employee(1, "oja", "backend dev");

// generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["oja", "anang", "halo"]);
