


## Closures
```javascript
function start() {
    const name = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia'
    function showName() { // 'muestraNombre' es una función interna (un closure)
      alert(name); // dentro de esta función usamos una variable declarada en la función padre
    }
    showName();
}
inicia();
```

## Prototype
```javascript
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
```
## Hoisting

```javascript
function nombreDelGato(nombre) {
    console.log("El nombre de mi gato es " + nombre);
}
  
nombreDelGato("Maurizzio");
```

> *El resultado del código es: "El nombre de mi gato es Maurizzio"*

```javascript
var x = 5;

(function () {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}());
```

> *El ejemplo anterior se entiende implícitamente como:*

```javascript
var x = 5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());
```

JavaScript sólo utiliza el hoisting en declaraciones, no inicializaciones. Si está utilizando una variable que es declarada e inicializada después (está después en el código) de usarla, el valor será undefined.

```javascript
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; //Inicializa y
```

> *El ejemplo anterior se entiende implícitamente como:*

```javascript
var x = 1; // Inicializa x
var y;// Se elevo la declaración
console.log(x + " " + y); // '1 undefined' 
y = 2; //Inicializa y
```

# ES5

 - Added "strict mode".
 - Added JSON support. JSON.parse() y JSON.stringify()## indexOf
 - What is the index of the first element that equals value?
    ```javascript 
    Array.prototype.indexOf(value, fromIndex) 
    ```
 -  What is the index of the last element that equal value?
    ```javascript 
    Array.prototype.lastIndexOf(value, fromIndex)
    ```

## Filter

> *Devuelve respuesta donde la funcion sea true*

```javascript
const nums = [1,3,4,5,7,9,10,15];
const pairs = nums.filter((num, index, numsObj) => {
    return num % 2 === 0;
    // if (num %2 === 0) {
    //     return num;
    // }
});
```

## every

> *El método every() verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada.*

```javascript
var array1 = [1, 30, 39, 29, 10, 13];
array1.every(num => num < 40); //true
array1.every(num => num < 30); //false
```

## some

> *El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada.*
```javascript
var array1 = [1, 30, 39, 29, 10, 13];
array1.some(num => num > 30); //true
array1.some(num => num > 40); //false
```

## Map

> *El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.*

```javascript
const nums = [1,4,5,6,7];
const squared = nums.map(num => Math.pow(num, 2));
```

## forEach

> *El método forEach() ejecuta la función indicada una vez por cada elemento del array.*

```javascript
const nums = [1,2,4,5,3];
nums.forEach((num, index, array) => {
    console.log(num, index, array);
})
```

## reduce

> *El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.*

```javascript
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
```

## New methods in Object

```javascript
const object = {a: 1, b: 2, c: 3, d: "a", e: {f:4, g:5}};

Object.keys(object) //["a", "b", "c", "d", "e"]

Object.getOwnPropertyNames(object); //["a", "b", "c", "d", "e"]
```
> *Returns an array of all properties*

```javascript
Object.getPrototypeOf(object);
```
> *Devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado.*

```javascript
Object.preventExtensions(object)
```
> *Prevents anyone from adding properties to the object, cannot be undone.*

```javascript
Object.seal(object)
```
> *Prevents anyone from changing, properties or descriptors of the object. The values can still be changed*

```javascript
Object.freeze(object)
```
> *Prevents any changes to the object.*

## apply, bind, call
```javascript
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

// apply

greet.apply(person1, ["Hello ", "Sr."]); //Hello Sr.juanito
greet.apply(person2, ["Hello ", "Sr."]); //Hello Sr.pepito

// bind

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
```

## trim
```javascript
const orig = ' foo ';
console.log(orig.trim());//'foo'
```


## strict mode
```javascript
"use strict";
```
El modo estricto de ECMAScript 5 es una forma de optar explicitamente por una variante restringida de JavaScript. El modo estricto no es sólo un subconjunto: intencionalmente tiene diferente semántica que código normal. Los navegadores que no soportan el modo estricto ejecutarán el código con un modo diferente de los que sí lo soportan, así que no hay que usar en el modo estricto sin hacer pruebas previas. Código en modo estrico y en no estricto pueden coexistir, de modo que código puede migrarse a modo estricto incrementalmente. El modo estricto hace varios cambios en la semántica normal de JavaScript. Primero, elimina algunos errores silenciosos de JavaScript haciendo que lancen excepciones. Segundo, corrige errores que hacen que sea difícil para los motores de JavaScript realizar optimizaciones: a veces, el código escrito en modo estricto puede correr más rápido que el que no es estricto. Tercero, el modo estricto prohibe cierta sintaxis que es probable que sea definida en futuras versiones de ECMAScript.


# ES6

## find
> *El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En cualquier otro caso se devuelve undefined.*

```javascript
var array1 = [5, 12, 8, 130, 44];

var found = array1.find((element) => {
    return element > 10;
});

console.log(found);
// expected output: 12
```

## findIndex

> *El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.*

```javascript
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3
```

## fill

> *El método fill() rellena todos los elementos de un arreglo desde el índice start hasta el índice end, con el valor estático de value.*

```javascript
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
```


## Templates strings
```javascript
const name = "Pepito";
const template = `Hi I'm ${pepito}`;
```

## Arrow functions
```javascript
const fun = () => {};
```

## Class
```javascript
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
pepito.fullName(); //"Pepito Perez"
pepito.id; //"12345"
Person.hello(); // Hello
Student.hello(); // Hello
```

> *Una importante diferencia entre las declaraciones de funciones y las declaraciones de clases es que las declaraciones de funciones son izadas y las declaraciones de clases no lo son. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otra modo el ejemplo de código siguiente arrojará un ReferenceError:*

```javascript
var p = new Poligono(); // ReferenceError

class Poligono {}

var Foo = class {}; // constructor property is optional
var Foo = class {}; // Re-declaration is allowed

typeof Foo; //returns "function"
typeof class {}; //returns "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {}; // Throws TypeError, doesn't allow re-declaration
```

```javascript
class Foo {};
class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared
```

```javascript
var Foo = class {};
class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared
```

## Let
> *La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.*
>*Let es block scoping y var function scoping*

```javascript
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
```

## const
> *Las variables constantes presentan un ámbito de bloque(block scope) tal y como lo hacen las variables definidas usando la instrucción let, con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar.*

```javascript
const name = "Pepito";
name = "juanito"; //Error

const arr = [1,2,3];
arr.push(4); // [1,2,3,4]

const obj = {};
obj.var1 = 4; // {var1: 4}
```

## Map
> *El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.*

```javascript
const car = new Map();

car.set("brand", "VW");
car.set("color", "white");
car.set(1, 1);
car.set([2], [2]);

car.get("brand"); //Get
car.has("color"); //If exist
car.delete("brand"); //Delete
```

## Set

> *El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.*

```javascript
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
```
## Destructuring

```javascript
const animals = new Array("Dog", "Cat", "Rat");
const [dog, cat, rat] = animals;
const obj = {
    var1: 1,
    var2: 2
}
const {var1, var2} = obj;
```
## for of

> *La sentencia for...of crea un bucle que itera a través de los elementos de objetos iterables (incluyendo Array, Map, Set, el objeto arguments, etc.), ejecutando las sentencias de cada iteración con el valor del elemento que corresponda.*


```javascript
var frameworks = ["ember", "angular", "react", "vue"];

for(const framework of frameworks) {
    console.log(framework);
}
```

## Default params

> *Los parámetros por defecto de una función permiten que los parámetros formales de la función sean inicializados con valores por defecto si no se pasan valores o los valores pasados son undefined.*

```javascript
function person(name = "No name", age = 0) {
    console.log(`name: ${name}, age: ${age}`);
}
person();
person("pepito",12);
```
## Spread

> *El operador de propagación spread operator permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).*

```javascript
function device(type, name, brand) {
    console.log(`type: ${type}, name: ${name}, brand: ${brand}`);
}
const cellphone = new Array("Cell", "mi note 4", "Xiaomi");
device(...cellphone);
```
## Rest

> *La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un arreglo. El operador Rest es exactamente igual a la sintaxis del operador de propagación, y se utiliza para desestructurar arrays y objetos. En cierto modo, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo.*

```javascript
function hardware(...params) {
    console.log(params);
}
hardware("RAM","HDD","Mother board");
const components = ["RAM","HDD","Mother board"];
hardware(...components); //Spread, rest
```

## String - new functions

```javascript
const char = "abc";
char.repeat(2); //abcabc
char.includes("a"); //true
char.startsWith("ab"); //true
char.endWith("bc"); //true
```

## Number - new functions

```javascript
console.log(Number.isNaN("1")); //false
console.log(Number.isNaN(1)); //false
console.log(Number.isNaN(0/0)); //true

console.log(Number.isFinite(1)); //true
console.log(Number.isFinite(Infinity)); //false

console.log(Number.isInteger(1)); //true
console.log(Number.isInteger("1")); //false
console.log(Number.isInteger(1.2)); //false
```

## Object assign

```javascript
const name = {name: "Pepito"};
const lastName = {lastName: "Perez"};
const age = {age: 43};
const result =  {};
Object.assign(result, name, lastName, age); //{name: "Pepito", lastName: "Perez", age: 43}
```

## Promises

> *El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.*

```javascript
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
```

## POO

**Clase abstracta:**  una clase que no se puede instanciar (crear un objeto de esa clase) pero si se pueden definir atributos e implementar métodos en ella para que sus clases hijas los puedan utilizar. 

**Interface:** es una clase abstracta pura en la que todos sus métodos son abstractos y por tanto no se pueden implementar en la clase Interface 

**Pilares POO** 
- *Abstracción:* Podríamos definir la abstracción como la "acción de aislar mentalmente o considerar por separado las cualidades de un objeto, considerar un objeto en su esencia". ¿Qué quiere decir esta definición? A través de la abstracción conseguimos extraer las cualidades principales sin detenernos en los detalles.
- *Encapsulamiento:* Significa reunir todos los elementos que pueden considerarse pertenecientes a una misma entidad, al mismo nivel de abstracción. Esto permite aumentar la cohesión (diseño estructurado) de los componentes del sistema. Algunos autores confunden este concepto con el principio de ocultación, principalmente porque se suelen emplear conjuntamente.
- *Polimorfismo:* Esta característica permite definir distintos comportamientos para un método dependiendo de la clase sobre la que se realize la implementación. En todo momento tenemos un único medio de acceso, sin embargo se podrá acceder a métodos distintos.
- *Herencia:* Las clases no se encuentran aisladas, sino que se relacionan entre sí, formando una jerarquía de clasificación. Los objetos heredan las propiedades y el comportamiento de todas las clases a las que pertenecen. La herencia organiza y facilita el polimorfismo y el encapsulamiento, permitiendo a los objetos ser definidos y creados como tipos especializados de objetos preexistentes.


## REST
Buscando una definición sencilla, REST es cualquier interfaz entre sistemas que use HTTP para obtener datos o generar operaciones sobre esos datos en todos los formatos posibles, como XML y JSON.  

Es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web.

En la actualidad se usa en el sentido más amplio para describir cualquier interfaz entre sistemas que utilice directamente HTTP para obtener datos o indicar la ejecución de operaciones sobre los datos, en cualquier formato (XML, JSON, etc) sin las abstracciones adicionales de los protocolos basados en patrones de intercambio de mensajes, como por ejemplo SOAP. 

Las operaciones más importantes relacionadas con los datos en cualquier sistema REST y la especificación HTTP son cuatro: POST (crear), GET (leer y consultar), PUT (editar) y DELETE (eliminar). 

Los objetos en REST siempre se manipulan a partir de la URI. Es la URI y ningún otro elemento el identificador único de cada recurso de ese sistema REST. La URI nos facilita acceder a la información para su modificación o borrado, o, por ejemplo, para compartir su ubicación exacta con terceros.  

Rest son los principios de arquitectura de software Restful son los servicios web que siguem esos principios 

Todo es un recurso, identificador unico (URI), usa metodos HTTP estandar, pueden tener multiples representaciones (XML, JSON, ...), Comunicacion sin estado 


## Errores http
### 1xx: Respuestas informativas

### 2xx: Peticiones correctas
-200 OK Respuesta estándar para peticiones correctas.
-201 Created La petición ha sido completada y ha resultado en la creación de un nuevo recurso. 
-204 No Content La petición se ha completado con éxito pero su respuesta no tiene ningún contenido (la respuesta sí que puede incluir información en sus cabeceras HTTP).2​


### 3xx: Redirecciones
 300 Multiple Choices Indica opciones múltiples para el URI que el cliente podría seguir. Esto podría ser utilizado, por ejemplo, para presentar distintas opciones de formato para video, listar archivos con distintas extensiones o word sense disambiguation. 

### 4xx Errores del cliente
-400 Bad Request La solicitud contiene sintaxis errónea y no debería repetirse. 
-401 Unauthorized Similar al 403 Forbidden, pero específicamente para su uso cuando la 
autentificación es posible pero ha fallado o aún no ha sido provista. 
Vea autenticación HTTP básica y Digest access authentication. 
-403 Forbidden La solicitud fue legal, pero el servidor rehúsa responderla dado que el cliente no tiene los privilegios para hacerla. En contraste a una respuesta 401 No autorizado, la autenticación no haría la diferencia. 
-404 Not Found Recurso no encontrado. Se utiliza cuando el servidor web no encuentra la página o recurso solicitado. 
-405 Method Not Allowed Una petición fue hecha a una URI utilizando un método de solicitud no soportado por dicha URI; por ejemplo, cuando se utiliza GET en un formulario que requiere que los datos sean presentados vía POST, o utilizando PUT en un recurso de solo lectura. 

### 5xx Errores de servidor
500 Internal Server Error Es un código comúnmente emitido por aplicaciones empotradas en servidores web, mismas que generan contenido dinámicamente, por ejemplo aplicaciones montadas en IIS o Tomcat, cuando se encuentran con situaciones de error ajenas a la naturaleza del servidor web. 


## Graceful degradation
Un sitio web diseñado para que degrade gradualmente está pensado para que se vea primero correctamente en los navegadores  modernos. Para que se puedan acceder en los navegadores más antiguos, y menos ricos en características deben degradar, de forma a funcionar, pero con menos características. La página empieza a degradar cuando, a través de detección user-agent, o utilizando la herramienta Modernizr como biblioteca de detección  de características para HTML5/CSS3 le vamos substituyendo o añadiendo soluciones al conflicto de forma a tener un resultado que se pueda presentar a cliente.

## Progressive Enhancement
El Progressive Enhancement dice que los sitios webs no tienen que tener la misma apariencia en todos los navegadores, pero aprovechar las capacidades del navegador para que el mayor número posible de usuarios tenga la mejor experiencia posible. La Mejora progresiva seria lo inverso a la Degradación gradual; empezar por lo básico (HTML + CSS) e ir evolucionando “progresivamente”, utilizando las mismas herramientas de user-agent y detección de características. 

## Singleton
"Singleton", que en ingeniería del software es un patrón diseñado para limitar la creación de objetos pertenecientes a una clase. El objetivo de este patrón es el de garantizar que una clase solo tenga una instancia (o ejemplar) y proporcionar un punto de acceso global a ella. Esta patrón; por ejemplo, suele ser utilizado para las conexiones a bases de datos. Este patrón se implementa haciendo privado el constructor de la clase y creando (en la propia clase) un método que crea una instancia del objeto si este no existe.

## Pruebas unitarias
Una prueba unitaria es una forma de comprobar el correcto funcionamiento de una unidad de código. Por ejemplo en diseño estructurado o en diseño funcional una función o un procedimiento, en diseño orientado a objetos una clase. Esto sirve para asegurar que cada unidad funcione correctamente y eficientemente por separado. Además de verificar que el código hace lo que tiene que hacer, verificamos que sea correcto el nombre, los nombres y tipos de los parámetros, el tipo de lo que se devuelve, que si el estado inicial es válido entonces el estado final es válido

## Pruebas funcionales
En este caso, el objetivo de las pruebas funcionales es comprobar que el software que se ha creado cumple con la función para la que se había pensado. En este tipo de pruebas lo que miramos, lo que nos importan, son las entradas y salidas al software. Es decir, si ante una serie de entradas el software devuelve los resultados que nosotros esperábamos. Aquí solo observamos que se cumpla la funcionalidad, no comprobamos que el software esté bien hecho, no miramos el diseño del software. Estudiamos el software desde la perspectiva del cliente, no del desarrollador.

# Preguntas frecuentes entrevista tecnica frontend

## ¿Qué hace un `doctype` (`<!DOCTYPE html>`)?
Es una declaración al comienzo de un documento HTML (previo al tag `<html>`). Consiste en una instrucción que le deja saber al navegador en que versión de HTML está el documento para interpretarlo correctamente.
Definir `<!DOCTYPE html>` le dice al navegador que tiene que parsear el HTML basándose en el estandar HTML5.
En el caso de navegadores más viejos, interpretarán el HTML en un modo "compatible con HTML5" pero ignorarán las funcionalidades que no soporten.
`<!DOCTYPE html>` es mucho más simple que las definiciones de doctype anteriores, como por ejemplo:
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`



## ¿Qué nuevos elementos componen "HTML5"?
- Semántica - Un marcado de texto (Text Markup) más semántico. Lo que agrega mejor accesibilidad, más herramientas para la descripción de el contenido Web y mayor facilidad para el SEO.
`<footer>`, `<canvas>`, `<article>`, `<main>`, `<nav>`, `<aside>`, `<dialog>`, `<section>`, - Etc...
- Nuevos elementos de form:
`<datalist>`, `<keygen>`, `<output>`
- Conectividad (Diferentes métodos de comunicación)
WebSockets, WebRTC, Eventos del Servidor (server-sent events)
- Offline Web
Caché de aplicación, Web Workers, IndexedDB, Uso de archivos offline (File API / FileReader), Detección de la conectividad (navigator.onLine)
- Multimedia e interacción
`<Audio>` y `<Video>`
- Trabajos gráficos
WebGL, Canvas, SVG
- JavaScript/Integraciónes
Web Workers, History API, DragAndDrop, RequestAnimationFrame, FullScreenAPI, PointerLock, 
- Acceso al dispositivo
Cámara, Eventos touch, Orientación del dispositivo, Geolocalización, Web Bluetooth, - WebVR
- CSS3

## ¿Para qué sirven los atributos `data-`?
Es un atributo de HTML, un estándar que permite adjuntar o guardar información extra en un elemento.
```html
  <div
    id="unDivCualquiera"
    data-usuario="fforres"
    data-usuario-correo="felipe.torressepulveda@gmail.com" >
```
El acceso está estandarizado, puedes acceder a la data de la siguiente manera:
```javascript
const article = document.getElementById('unDivCualquiera');
article.dataset.usuario // "fforres"
article.dataset.usuarioCorreo // "felipe.torressepulveda@gmail.com"
```

## ¿Cuál es la diferencia entre una `cookie`, `localStorage` y una `sessionStorage`?
**Cookie:** Pequeño set de información enviada por un sitio Web y almacenado en el navegador de un usuario. Se guarda en el disco, por lo que esta data es persistente. Es posible guardar y recuperar la data usando JS de la siguiente manera:

```javascript
document.cookie = "username=fforres";
/*O darle una fecha de expiración*/
document.cookie = "username=fforres; expires=Thu, 19 Feb 2019 11:59:59 UTC";
const cookie = document.cookie;
```

Cada llamada a `document.cookie = "(...)"` crea una nueva cookie. Las cookies se guardan en texto plano. Pueden guardar poca data (4KB). Son enviadas en cada request.

**sessionStorage:** La propiedad `sessionStorage` permite acceder al objeto local `Storage` pero solo durante la sesión del usuario. Una sesión dura hasta que el navegador es cerrado. La data sobrevive a recargas de página. Una nueva "tab" o "ventana" genera una nueva sesión.

```javascript
sessionStorage.setItem('usuario', 'fforres');
/* guarda en la llave "usuario" el valor "fforres" */

const usr = sessionStorage.getItem('usuario');  // usr retorna "fforres"

sessionStorage.removeItem('usuario') // remueve la data guardada en esa llave

sessionStorage.clear() //remueve toda la data de la sesión.
```
aprox. 5MB de storage por dominio

**localStorage:** La propiedad `localStorage` permite acceder al objeto local `Storage`. La data no tiene una fecha de expiración y es accesible desde múltiples ventanas o tabs del mismo dominio y navegador. 
```javascript
const miStorage = localStorage;
/* myStorage es ahora un objecto Storage */

miStorage.setItem('usuario', 'fforres');
/* guarda en la llave "usuario" el valor "fforres" */

miStorage.usuario  // retorna "fforres"
```

aprox. 5MB de storage por dominio.

Las propiedades del `localStorage` solo pueden ser accedidas por páginas con el mismo dominio que la página que definió (set o *seteó*) las propiedades. Por ejemplo, si una página como ejemplo.com *setea* algo en el `localStorage` puede ser accedida por ejemplo.com/xxxxx, ejemplo.com/yyyyy, ejemplo.com/xxxxx/zzzzz y así.

**Como nota muy importante:** los datos guardados en `localStorage` y en `sessionStorage` son **específicos al protocolo de la página**. No es lo mismo http://ejemplo.com que https://ejemplo.com, por lo que los datos a los que acceden/escriben son distintos.


## ¿Qué diferencias existen entre `<script>`, `<script async>` y `<script defer>`?
**script:** Descarga el archivo y lo ejecuta, pero tanto la descarga como la ejecución se desarrollan secuencialmente y por lo mismo detienen el parseo del HTML.

**script async:** Descarga el archivo paralelamente a la descarga/parseo del resto del documento/assets, pero al momento de ejecutarlo detiene el parseo del HTML.

**script defer:** Descarga el archivo paralelamente a la descarga/parseo del resto del documento/assets, pero espera hasta que todo el HTML esté parseado antes de ejecutar el script.



## ¿Puedo poner un tag `<link>` dentro del body? ¿Por qué no es recomendado?
Sí. No es recomendado, aunque posible. Ejemplo de un proceso de descarga de un archivo HTML, un archivo CSS, una imagen y un archivo JS:
- Descarga el "HTML".
- Se parsea el HTML y ve que hay un archivo CSS, un archivo JS y una imagen.
- Se inicia la descarga de la imagen.
- El navegador decide que no puede mostrar la página sin antes descargar el CSS y JS.
  - Esta decisión se toma porque ambos archivos podrían alterar la visualización del DOM causando Reflow o Repaint si el CSS tuviese un `display: none` o el JS un `Node.remove()`, por ejemplo.
- Descarga por orden de aparición (CSS o JS).
- Al descargar el CSS, lo lee, parsea, y se asegura que no llame nada más (un `@import` o `background:url('./imagen.jpg')`).
- Al descargar el JS, lo lee, interpreta y ejecuta.
- El navegador decide que ahora sí puede mostrar el DOM, por lo que empieza a pintar y estilar el DOM.

En este ejemplo, en el caso de tener un segundo `<link />` dentro del body, el proceso se ejecuta normalmente hasta que se parsea el DOM, dentro del body se encuentra con el `<link />`, se detiene el parseo y pintado del DOM para descargar y parsear el CSS.

Luego de eso vuelve a resumir el trabajo con el DOM y aplicar estilos de ser necesario.

## ¿Dónde es recomendado poner los tag `<script/>`? ¿Después o antes del body? ¿Existen excepciones?
Depende mucho del contenido y acciones que ejecutarán dichos scripts. En antaño los `<script/>` se colocaban posterior al body para priorizar el mostrar la estructura del contenido (HTML), estilarlo (CSS) y después agregar la interactividad con los scripts. Pero actualmente existen los atributos `async` o `defer` que nos ayudan a definir descargas, parseos y ejecución diferidos.

## ¿Qué es el Rendering Progresivo?
Un conjunto de técnicas y decisiones tomadas y aplicadas a fin de priorizar qué contenido o elemento se debería cargar primero (el contenido de una noticia, el landing en un sitio Web) y despriorizar la carga de otras secciones (footer, banners, side-menus, etc).

## ¿Qué son y cómo afectan al performance el `Reflow` y `Paint`/`RePaint` ?
**RePaint** es el nombre que se le da al proceso que ejecuta el navegador cuando realiza cambios visuales a un elemento, pero no cambia su `layout` (color de fondo, visibilidad, outline).

**Reflow** es el proceso que ejecuta el navegador cuando los cambios que realiza a un elemento, cambian su layout (posicion, tamaño, etc) que obligan a recalcular y posiblemente reposicionar otros elementos en el documento.

Ambos procesos son críticos a la hora de analizar y optimizar la performance, donde `ReFlow` afecta de manera mucho mayor.

Al mover un elemento que cause `ReFlow`, es necesario recalcular **todos** los otros elementos del DOM que podrían verse afectados por este cambio.

`RePaint` necesita verificar la visibilidad de todos los otros nodos y como estos afectan a la visibilidad de el/los nodos iniciales.
Ejemplo:

El cambiar el color de fondo de un `<div id="a" />` sobre el que hay un `<div id="b">` con una opacidad `0.5`, fuerza a recalcular el color de fondo y los efectos que tiene el `<div id="b">` sobre el A

## ¿Qué estructura tiene el `DOM`?
- Un árbol.
- Un árbol imperfecto y desbalanceado.

## ¿Qué diferencia existe entre `DOM` y `HTML`?
**HTML:** (Hyper Text Markup Language) Es un lenguaje de marcado (*markup*) que define una sintaxis específica para representar un cierto tipo de componentes que luego el navegador interpreta y transforma en el DOM.
**DOM** (Document Object Model) - Es el modelo de la interpretación de un HTML. El DOM es (y expone) una API para un documento de HTML válido que permite interactuar y realizar acciones programáticas sobre él.
Ejemplo:
```javascript
if (a) {
    const texto = document.createTextNode(" Hola :-) ");
    document.body.appendChild(texto);
}
```

## ¿Por qué usar tags como `<Section>` o `<Article>` pudiendo usar `<div />`?
En primera instancia, por accesibilidad. Utilizar elementos como `<article>`, `<details>`, `<footer>` o `<nav>` ayuda a los screen readers a mapear e interpretar correctamente el DOM.
Tocando el tema de la accesibilidad, de nada sirve usar atributos como `role` o `aria-*` de manera conflictiva.
```html
<!-- MAL! :( -->
<button role="header"/>

<!-- Mucho Mejor :) -->
<header role="header"/>
```

## Si tengo 3 tags estilados exactamente iguales (`<button />`, `<a />` y `<div />`) ¿Qué debería elegir para interactuar con un usuario y por qué?
Una pregunta un poco truculenta, principalmente porque la decisión pasa por accesibilidad más que por otra cosa.

La idea primaria es usar elementos concretos para las interacciones que se realizarán. Por ejemplo, si se busca hacer un submit a un formulario, es mejor usar un `<button />` que un `<span />` estilado. En el ejemplo anterior, aunque ambos realicen la acción mediante una función de JavaScript, screen readers pueden considerar de manera distinta ambos elementos.

Como excepción, es posible usar atributos como `role=""` o `aria-*` para especificar el rol de un elemento, pero no es bueno usarlos de manera conflictiva.

### ¿Qué es un meta tag?
Son Elementos o Tags usados en HTML que proveen metadata del sitio o "Información sobre la información" (o del contenido) del mismo sitio.
Ejemplo: Consideremos este meta tag:
```html
<meta charset=“utf-8”>
```
El tag no contiene información concreta del sitio como lo sería una noticia, un título, una imagen o un link, pero entrega información sobre el formato de encoding del sitio.

## ¿Qué es y cuáles son las ventajas del Shadow DOM?
El Shadow DOM es una funcionalidad que permite inyectar un sub-árbol de elementos DOM (un SUB-DOM) en el documento actualmente renderizado en el navegador.

*(El Shadow DOM asocia un nuevo tipo de nodo asociado que se puede asociar con los elementos llamado el "Shadow Root", el elemento al que se le asocia este "Shadow Root" se le dice "Shadow Host")*

La idea del Shadow DOM es crear elementos Web con estilo y funcionalidades auto-contenidos (o encapsulados), por lo que reglas de estilo como `#contenedor { background: red; }` definidas dentro del Shadow DOM, no afectará elementos que cumplan con esa condición que estén fuera de el.

Ejemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script defer src="./index.js" charset="utf-8"></script>
    <style media="screen">
        #shadow {
            color: green;
        }
    </style>
</head>
<body>
    <h1 id="shadow">Hello Shadow DOM</h1>
</body>
</html>
```
```javascript
const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = `
    <style>
        #shadow {
            color: red;
        }
    </style>
    <h1 id="shadow">Hello Shadow DOM</h1>`; // También se podría usar appendChild().
document.body.appendChild(header);
```

Teniendo estos 2 elementos `<h1 id="shadow">Hello Shadow DOM</h1>`, uno siendo creado y estilado mediante el uso de Shadow DOM y el otro siendo creado por la interpretación del DOM, el navegador muestra lo siguiente:

![](./shadow_dom.png)