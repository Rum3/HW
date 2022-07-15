let person = {
    name:undefined,
    age:undefined,
    greet(){console.log( `Hi, I'm ${this.name} and I'm ${this.age} years old`)}

  }
  
let manager = Object.create(person,{name:{value:'Bill Gates'},age:{value:50},})
let developer1 = Object.create(person,{name:{value:'Pesho'},age:{value:25}})
let developer2 = Object.create(person,{name:{value:'Maria'},age:{value:30}})

manager.greet()
developer1.greet()
developer2.greet()
  
  