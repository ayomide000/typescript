"use strict";
// Lesson 06 - Class
class Coder {
    constructor(name, music, age, lang = 'Typescript'
    // Difference between private and protected is that protected can be assessed both in the class and derived classes or sub- classes  but private can only be assessed in the class only
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // Note: Assignments in the body of the constructor are not required here. It is not an error if you leave them, but it is not required.
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    } // it is fine because even though the age is private, it can still be assessed in the class
}
// visibility modifier - which are public, readonly, private, protected, it helps us to keep our code dry(do not repeat yourself). instead of declaring our variable in the class body, with visibility modifier, we dont need to
const Dave = new Coder('Dave', 'Rock', 42);
// we can remove the last param here which is Typescript and make it optional by adding a default value in the constructor param
console.log(Dave.getAge());
//  console.log(Dave.age);
//  console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // super class must come first before any added param
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Tunmise = new WebDev('Lenovo', 'Tunmise', 'Kim-Walker Smith', 20);
console.log(Tunmise.getLang());
// implements keyword
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
// ====================================================
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Ayo = new Peeps('Ayo');
const Gbolahan = new Peeps('Gbolahan');
const Timmy = new Peeps('Timmy');
console.log(Ayo.id);
console.log(Gbolahan.id);
console.log(Timmy.id);
console.log(Peeps.count);
// ===============================================
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 1870]
