class Car{
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car is running`
  }
  stop() {
    return `Car is stopped`
  }
}

let carOne = new Car("MG", "2022", "426983");
let carTwo = new Car("Opel", "2021", "445861");
let carThree = new Car("BMW", "2020", "987904");

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.run())

/*

Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"

*/