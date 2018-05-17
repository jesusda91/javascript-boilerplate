//Closures
function start() {
    const name = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia'
    function showName() { // 'muestraNombre' es una función interna (un closure)
      alert(name); // dentro de esta función usamos una variable declarada en la función padre
    }
    showName();
}
inicia();


//Prototype
function Person (name, lastName) {
    this.name = name;
    this.lastName = lastName;
    if (name && lastName) {
        this.fullName = `${name} ${lastName}`;
    }
    this.hello = () => {
        if (this.fullName) {
            console.log(`Hello I'm ${this.fullName}`);
        }
    }
}

const pepito = new Person ('pepito', 'perez');
Person.prototype.upperCaseName = function name(params) {
    return this.fullName.toUpperCase();  
}


/* ************** */
/* ***  ES5  **** */
/* ************** */

//Added "strict mode".
//Added JSON support. JSON.parse() y JSON.stringify()

//indexOf
// What is the index of the first element that equals value?
Array.prototype.indexOf(value, fromIndex)
// What is the index of the last element that equal value?
Array.prototype.lastIndexOf(value, fromIndex)


//Filter
//Devuelve respuesta donde la funcion sea true
const nums = [1,3,4,5,7,9,10,15];
const pairs = nums.filter((num, index, numsObj) => {
    return num % 2 === 0;
    // if (num %2 === 0) {
    //     return num;
    // }
});


//every
/* El método every() verifica si todos los elementos en el arreglo pasan la prueba 
implementada por la función dada. */
var array1 = [1, 30, 39, 29, 10, 13];
array1.every(num => num < 40); //true
array1.every(num => num < 30); //false


//some
/* El método some() verifica si algún elemento de un array cumple con el test 
implementado por la función brindada. */
var array1 = [1, 30, 39, 29, 10, 13];
array1.some(num => num > 30); //true
array1.some(num => num > 40); //false


//Map
const nums = [1,4,5,6,7];
const squared = nums.map(num => Math.pow(num, 2));


//forEach
const nums = [1,2,4,5,3];
nums.forEach((num, index, array) => {
    console.log(num, index, array);
})


//reduce
const chars = ["H","e","l","l","o"];
chars.join(""); //Hello
const word = chars.reduce((beforeReturn, currentValue, index, array) => {
    return beforeReturn + currentValue;
});
const word2 = chars.reduce((beforeReturn, currentValue) => beforeReturn + currentValue);

const nums = [1,2,3,4,5,6,7,8];
const add = nums.reduce((prev, current) => prev + current); //36

const nums2 = [1,2,3,4,5,6,7,8];
const add2 = nums2.reduce((prev, current) => prev + current ,4); //40, se agrega valor inicial de 4, en la primera iteracion prev=4


//New methods in Object
const object = {a: 1, b: 2, c: 3, d: "a", e: {f:4, g:5}};

Object.keys(object) //["a", "b", "c", "d", "e"]
// Returns an array of all properties
Object.getOwnPropertyNames(object); //["a", "b", "c", "d", "e"]
Object.getPrototypeOf(object);

// Prevents anyone from adding properties to the object, cannot be undone.
Object.preventExtensions(object)
// Prevents anyone from changing, properties or descriptors of the object.
// The values can still be changed
Object.seal(object)
// Prevents any changes to the object.
Object.freeze(object)


/**/
var name = "Global name";
var greet = function (textGreet, treatment) {
    textGreet = textGreet || "Hi ";
    treatment = treatment || "";
    console.log(textGreet + treatment + this.name);    
}
var person1 = {
    name: "juanito"
}

var person2 = {
    name: "pepito"
}

greet(); //Hi Global name
//call (es el metodo que se llama internamente cuando uno llama a una funcion)
greet.call(person1, "Hello ", "Sr."); //Hello Sr. juanito
greet.call(person2, "Hello ", "Sr."); //Hello Sr. pepito

//apply

greet.apply(person1, ["Hello ", "Sr."]); //Hello Sr.juanito
greet.apply(person2, ["Hello ", "Sr."]); //Hello Sr.pepito

//bind
var callback = greet.bind(person2, ["Hello ", "Sr."]);
setTimeout(callback, 100); //Hello Sr. pepito
setTimeout(greet, 100); //Hi Global name
/**/

const Jane = {
    name: 'Jane',
    lastName: 'Doe',
    car : {
        brand: 'Volvo'
    }
}

const John = {
    name: 'John',
    lastName: 'Doe',
    car : {
        brand: 'Tesla'
    }
}

function greet(secLastName) {
    console.log('this', this);
    console.log(`Hi ${this.name} ${this.lastName} ${secLastName}`);
    
}

const greet2 = (secLastName) => {
    console.log('this', this);
    console.log(`Hi ${this.name} ${this.lastName} ${secLastName}`);
    
}

greet(); // this Windows   Hi undefined undefined

const greetJohn = greet.bind(John, ['IV']); //Hi John Doe IV
console.log(greetJohn()); //this John

const cb = greet2.bind(John);
cb("Solo"); //Hi undefined undefined Solo


//trim 
const orig = ' foo ';
console.log(orig.trim());//'foo'


//strict mode
"use strict";
/* El modo estricto de ECMAScript 5 es una forma de optar explicitamente por una variante 
restringida de JavaScript. El modo estricto no es sólo un subconjunto: intencionalmente tiene 
diferente semántica que código normal. Los navegadores que no soportan el modo estricto ejecutarán 
el código con un modo diferente de los que sí lo soportan, así que no hay que usar en el 
modo estricto sin hacer pruebas previas. Código en modo estrico y en no estricto pueden 
coexistir, de modo que código puede migrarse a modo estricto incrementalmente. 
El modo estricto hace varios cambios en la semántica normal de JavaScript. 
Primero, elimina algunos errores silenciosos de JavaScript haciendo que lancen excepciones. 
Segundo, corrige errores que hacen que sea difícil para los motores de JavaScript realizar 
optimizaciones: a veces, el código escrito en modo estricto puede correr más rápido 
que el que no es estricto. Tercero, el modo estricto prohibe cierta sintaxis que es probable 
que sea definida en futuras versiones de ECMAScript. */


/* ************** */
/* ***  ES6  **** */
/* ************** */
//Templates strings
const name = "Pepito";
const template = `Hi I'm ${pepito}`;


//Arrow functions
const fun = () => {};


//Class
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.name} ${this.lastName}`;
    }

    static hello() {
        console.log("Hello");        
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length<4) throw Error;
        this._name = value;
    }
}

class Student extends Person {
    constructor(name, lastName, id) {
        super(name, lastName);
        this.id = id;
    }
}

const juanito = new Person("Juanito", "Juarez");
const pepito = new Student("Pepito", "Perez", "12345");
pepito.fullName();
pepito.id;
Person.hello();
Student.hello();

//Una importante diferencia entre las declaraciones de funciones 
//y las declaraciones de clases es que las declaraciones de funciones son izadas 
//y las declaraciones de clases no lo son. En primer lugar necesitas declarar tu clase 
//y luego acceder a ella, de otra modo el ejemplo de código siguiente arrojará un ReferenceError:

var p = new Poligono(); // ReferenceError

class Poligono {}

var Foo = class {}; // constructor property is optional
var Foo = class {}; // Re-declaration is allowed

typeof Foo; //returns "function"
typeof class {}; //returns "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {}; // Throws TypeError, doesn't allow re-declaration
/**/
class Foo {};
class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared
/**/
var Foo = class {};
class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared


//Let
//Let es block scoping y var function scoping

function init () {
    if (true) {
        let name = "Pepito";
    }
    console.log(name); //undefined
}

function init () {
    if (true) {
        var name = "Pepito";
    }
    console.log(name); //Pepito
}

//const
const name = "Pepito";
name = "juanito"; //Error

const arr = [1,2,3];
arr.push(4); // [1,2,3,4]

const obj = {};
obj.var1 = 4; // {var1: 4}


//Map
/* El objeto Map almacena pares clave/valor. Cualquier valor 
(tanto objetos como valores primitivos) pueden ser usados como clave o valor. */

const car = new Map();

car.set("brand", "VW");
car.set("color", "white");
car.set(1, 1);
car.set([2], [2]);

car.get("brand"); //Get
car.has("color"); //If exist
car.delete("brand"); //Delete


//Set
/* El objeto Set te permite almacenar valores únicos de cualquier tipo, 
incluso valores primitivos u objetos de referencia. */

const set = new Set();
set.add("Dog");
set.add("Chicken");
set.add("Cow");
set //{"Dog", "Chicken", "Cow"}
set.add("Chicken");
set //{"Dog", "Chicken", "Cow"}
set.add(1);
set.add("1");
set //{"Dog", "Chicken", "Cow", 1, "1"}
set.has("Dog"); //If exist
set.size; //3


//Destructuring
const animals = new Array("Dog", "Cat", "Rat");
const [dog, cat, rat] = animals;
const obj = {
    var1: 1,
    var2: 2
}
const {var1, var2} = obj;


//for of
var frameworks = ["ember", "angular", "react", "vue"];

for(const framework of frameworks) {
    console.log(framework);
}


//Default params
function person(name = "No name", age = 0) {
    console.log(`name: ${name}, age: ${age}`);
}
person();
person("pepito",12);


// Spread
function device(type, name, brand) {
    console.log(`type: ${type}, name: ${name}, brand: ${brand}`);
}
const cellphone = new Array("Cell", "mi note 4", "Xiaomi");
device(...cellphone);


// Rest
function hardware(...params) {
    console.log(params);
}
hardware("RAM","HDD","Mother board");
const components = ["RAM","HDD","Mother board"];
hardware(...components); //Spread, rest


//String - new functions

const char = "abc";
char.repeat(2); //abcabc
char.includes("a"); //true
char.startsWith("ab"); //true
char.endWith("bc"); //true


//Number - new functions

console.log(Number.isNaN("1")); //false
console.log(Number.isNaN(1)); //false
console.log(Number.isNaN(0/0)); //true

console.log(Number.isFinite(1)); //true
console.log(Number.isFinite(Infinity)); //false

console.log(Number.isInteger(1)); //true
console.log(Number.isInteger("1")); //false
console.log(Number.isInteger(1.2)); //false


//Object assign

const name = {name: "Pepito"};
const lastName = {lastName: "Perez"};
const age = {age: 43};
const result =  {};
Object.assign(result, name, lastName, age); //{name: "Pepito", lastName: "Perez", age: 43}


//Promises
var promise = new Promise((resolve, reject) => {
    const random = parseInt(Math.random()*10);
    setTimeout(() => {
        if (random<5) {
            resolve(true);
        }
        reject(false);
    }, 100);
}).then((res)=>{
    console.log("res", res);
}).then((res)=>{
    console.log("here",res);
}).catch((err)=> {
    console.log("err", err);
});


//POO

/* Clase abstracta:  una clase que no se puede instanciar (crear un objeto de esa clase) 
pero si se pueden definir atributos e implementar métodos en ella para que sus clases hijas 
los puedan utilizar. */

/* Interface: es una clase abstracta pura en la que todos sus métodos son abstractos 
y por tanto no se pueden implementar en la clase Interface */


//REST
/* Buscando una definición sencilla, REST es cualquier interfaz entre sistemas que use HTTP 
para obtener datos o generar operaciones sobre esos datos en todos los formatos posibles, 
como XML y JSON. */ 

/* Es un estilo de arquitectura software para sistemas hipermedia distribuidos 
como la World Wide Web.*/

/*en la actualidad se usa en el sentido más amplio para describir cualquier interfaz entre 
sistemas que utilice directamente HTTP para obtener datos o indicar la ejecución de operaciones 
sobre los datos, en cualquier formato (XML, JSON, etc) sin las abstracciones adicionales de los 
protocolos basados en patrones de intercambio de mensajes, como por ejemplo SOAP. */

/* Las operaciones más importantes relacionadas con los datos en cualquier sistema REST 
y la especificación HTTP son cuatro: POST (crear), GET (leer y consultar), PUT (editar) y 
DELETE (eliminar). */

/* Los objetos en REST siempre se manipulan a partir de la URI. 
Es la URI y ningún otro elemento el identificador único de cada recurso de ese sistema REST. 
La URI nos facilita acceder a la información para su modificación o borrado, o, por ejemplo,
para compartir su ubicación exacta con terceros.  */

/* Rest son los principios de arquitectura de software
Restful son los servicios web que siguem esos principios */

/* Todo es un recurso, identificador unico (URI), usa metodos HTTP estandar,
pueden tener multiples representaciones (XML, JSON, ...), Comunicacion sin estado */


/* Errores http */
/* 1xx: Respuestas informativas */

/* 2xx: Peticiones correctas */
/* 200 OK Respuesta estándar para peticiones correctas.
201 Created La petición ha sido completada y ha resultado en la creación de un nuevo recurso. 
204 No Content La petición se ha completado con éxito pero su respuesta no tiene ningún contenido (la respuesta sí que puede incluir información en sus cabeceras HTTP).2​
*/

/* 3xx: Redirecciones */
/* 300 Multiple Choices Indica opciones múltiples para el URI que el cliente podría seguir. Esto podría ser utilizado, por ejemplo, para presentar distintas opciones de formato para video, listar archivos con distintas extensiones o word sense disambiguation. */

/* 4xx Errores del cliente */
/* 400 Bad Request La solicitud contiene sintaxis errónea y no debería repetirse. */
/* 401 Unauthorized Similar al 403 Forbidden, pero específicamente para su uso cuando la 
autentificación es posible pero ha fallado o aún no ha sido provista. 
Vea autenticación HTTP básica y Digest access authentication. */
/* 403 Forbidden La solicitud fue legal, pero el servidor rehúsa responderla dado que el cliente no tiene los privilegios para hacerla. En contraste a una respuesta 401 No autorizado, la autenticación no haría la diferencia. */
/* 404 Not Found Recurso no encontrado. Se utiliza cuando el servidor web no encuentra la página o recurso solicitado. */
/* 405 Method Not Allowed Una petición fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI; por ejemplo, cuando se utiliza GET en un formulario que requiere que los datos sean presentados vía POST, o utilizando PUT en un recurso de solo lectura. */

/* 5xx Errores de servidor */
/* 500 Internal Server Error Es un código comúnmente emitido por aplicaciones empotradas en servidores web, mismas que generan contenido dinámicamente, por ejemplo aplicaciones montadas en IIS o Tomcat, cuando se encuentran con situaciones de error ajenas a la naturaleza del servidor web. */