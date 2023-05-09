 // Lesson 06 - Class

 class Coder {
    // name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string  // - it will show error but to avoid it, we can add an assertion there

    constructor(
        public readonly name: string,
        public music: string, 
        private age: number,
        protected lang: string = 'Typescript'
        // Difference between private and protected is that protected can be assessed both in the class and derived classes or sub- classes  but private can only be assessed in the class only
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

        // Note: Assignments in the body of the constructor are not required here. It is not an error if you leave them, but it is not required.
    }

    public getAge() {
        return  `Hello, I'm ${this.age}`
    }  // it is fine because even though the age is private, it can still be assessed in the class
 }

 // visibility modifier - which are public, readonly, private, protected, it helps us to keep our code dry(do not repeat yourself). instead of declaring our variable in the class body, with visibility modifier, we dont need to

 const Dave = new Coder('Dave', 'Rock', 42, /*'Typescript'*/) 
 // we can remove the last param here which is Typescript and make it optional by adding a default value in the constructor param
 console.log(Dave.getAge());
//  console.log(Dave.age);
//  console.log(Dave.lang);


  class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name,  music, age,) // super class must come first before any added param
        this.computer = computer 
    }

    public getLang() {
        return `I write ${this.lang}`
    }

  }

  const Tunmise = new WebDev('Lenovo', 'Tunmise', 'Kim-Walker Smith', 20)

  console.log(Tunmise.getLang());
//   console.log(Tunmise.getAge());
//   console.log(Tunmise.lang);

// ============================================

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
} 

// implements keyword
class Guitarist implements Musician  {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));

// ====================================================

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }
    // what static does is that the property does not apply to any instatiation but only to the class directly itself

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count  
    }
}

const Ayo = new Peeps('Ayo')
const Gbolahan = new Peeps('Gbolahan')
const Timmy = new Peeps('Timmy')

console.log(Ayo.id);
console.log(Gbolahan.id);
console.log(Timmy.id);
console.log(Peeps.count);


// ===============================================

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    } 

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of string')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 1870]