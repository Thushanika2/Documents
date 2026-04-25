let car = {
  brand: "BMW", //property
  color: "black", //property

  drive: function () {
    //methode
    console.log(`Driving...${this.brand}`);
    console.log("Driving..." + this.brand);
  },
};
car.drive();

class Man {
  constructor(name, age) {
    this.T = name; // Property
    let _C = age; // Property

    this.getC = function () {
      return _C;
    };

    this.IncreaseC=function(){
        C = C + 1;
    };

    this.DecreaseC=function() {
        C = C - 2;
    }
  }

  live() {
    console.log("My name is " + this.T, "I'm " + this.C + " years old. ");
    console.error(this.T + "is my name. ", "I'm " + this.C + " years old. ");
    console.log("My name is " + this.T + "I'm " + this.C + " years old.");
  }
}

let myMan = new Man("Thusha ", "20");
myMan.live();

console.log(myMan.T);

console.log(myMan.C);

var myManC =myMan.getC();
console.log(myManC);

var myManC =myMan.IncreaseC();
console.log(myManC);



