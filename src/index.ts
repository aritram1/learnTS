//fibonacci
// let n : number = 5;

// let fib = function(n : AnalyserOptions){

// }

// let test = function(value : AnalyserOptions){
//     fib(value);
// }
// fib();
// fib('12');


//let number n = 12;


interface response{
    id?: string,
    name: String,
    time?: Date
}

class Person implements response{
    
    Person(name : string, id: string, time: Date){
        this.id = Math.ceil(Math.random()*10000000).toString();
        this.name = name;
        this.time = new Date();
    }
    greet(){
        console.log(`Hi ${this.name}, your id is ${this.id} and last login time is ${this.time}`);    
    }
}

let first = new Person('Moniseeta');
first.greet();