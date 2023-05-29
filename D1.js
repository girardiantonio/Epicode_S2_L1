/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//I DATATYPE IN JAVASCRIPT SONO 8
/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null

6. BigInt
7. Symbol
8. Object
*/

// STRING = RAPPRESENTA I DATI TESTUALI
// Sono una serie di caratteri all'interno dei "" e possono essere lettere o numeri sotto forma di testo
string = "stringa";

// NUMBER = NUMERO INTERO O CON LA VIRGOLA
// Sono una serie di numeri senza "" e possono essere numeri interi o con la virgola
number = 120;

// BOOLEAN = RAPPRESENTA VERO O FALSO
// senza "" variabile che può essere vera o falsa
boolean = true;
boolean = false;

// UNDEFINED = VARIABILE NON INIZIALIZZATA
let a; // Varibile non ancora inizializzata di cui ancora non si conosce il suo valore
console.log("", a); // console print = undefined

// NULL = VALORE NULLO
let b = null; // INDICA ASSENZA DI UN VALORE
console.log("", b); // console print = null


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Antonio";
console.log("Il mio nome =", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log("La somma dei numeri =", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("La variabile 'x' =", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Girardi";
console.log("Il mio cognome =", name);

/* DIMOSTRAZIONE IMPOSSIBILITÀ DI RIASSEGNARE UN VALORE AD UNA VARIABILE CONST

//CODICE 
const fullname = "Antonio Girardi"
fullname = "Pippo Scala"
console.log("Il mio nome completo =", fullname)

//ERRORE GENERATO DAL CODICE
D1.js:46 Uncaught TypeError: Assignment to constant variable.
    at D1.js:46:10
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log("La sottrazione =", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let name12 = name1 === name2;
console.log("Name1 =", name1, "Name2 =", name2);
console.log("Sono uguali?", name12); // console print = false

//EXTRA
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
console.log("Sono uguali?", name1 === name2); // console print = true
