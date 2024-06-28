// GeneralEmployee
class GeneralEmployee {
  constructor(name, age, developer, marketer, acoutant) {
    this.name = name;
    this.age = age;
    this.developer = developer;
    this.marketer = marketer;
    this.acoutant = acoutant;
  }

  person() {
    return `სახელი: ${this.name}, ასაკი: ${this.age}`;
  }

  Developer() {
    return `პროგრამული ენები ${this.developer}`;
  }

  Marketer() {
    return `ნამუშევარია მარკეტინგზე შემდეგ კომპანიებში: ${this.marketer}`;
  }

  Acoutant() {
    return `წარმატებული ქეისები: ${this.acoutant}`;
  }
}

const employee = new GeneralEmployee(
  "ნუგო",
  35,
  ["HTML5", "CSS3", "JS"],
  "გამოცდილება არ აქვს!",
  "გამოცდილება არ აქვს!"
);
console.log(employee.person());
console.log(employee.Developer());
console.log("---------------------");

const employee1 = new GeneralEmployee(
  "ანა",
  25,
  "გამოცდილება არ აქვს!",
  ["საქართველოს ბანკი", "Adjarabet", "Tegeta Motors"],
  "გამოცდილება არ აქვს!"
);
console.log(employee1.person());
console.log(employee1.Marketer());
console.log("---------------------");

const employee2 = new GeneralEmployee(
  "გიორგი",
  47,
  "გამოცდილება არ აქვს!",
  "გამოცდილება არ აქვს!",
  ["გიორგი ლორთქიფანიძე", "დავით კაპანაძე", "ბესარიონ ლაპიაშვილი"]
);
console.log(employee2.person());
console.log(employee2.Acoutant());

// CarFactory
class CarFactory {
  constructor(carArr) {
    this.carArr = carArr;
  }

  getAllCars() {
    return this.carArr;
  }

  addCar(id, make, model, year) {
    this.carArr.push({ id: id, make: make, model: model, year: year });
  }

  updateCar(id, Make, model, year) {
    this.carArr = this.carArr.filter((item) =>
      item.id === id
        ? ((item.make = Make), (item.model = model), (item.year = year))
        : "null"
    );
  }

  deleteCar(id) {
    this.carArr = this.carArr.filter((item) => item.id !== id);
  }
}

const getCars = new CarFactory([
  { id: 1, make: "Mercedes-benz", model: "GLC43 AMG", year: 2019 },
  { id: 2, make: "BMW", model: "X6 M", year: 2017 },
  { id: 3, make: "Toyota", model: "Fortuner", year: 2021 },
  { id: 4, make: "Audi", model: "A8", year: 2012 },
  { id: 5, make: "Alfa Romeo", model: "Stelvio", year: 2018 },
]);

getCars.deleteCar(3);
getCars.addCar(6, "Opel", "Vectra", 2001);
getCars.updateCar(4, "Bugatti", "Chiron", 2015);

console.log(
  getCars.getAllCars().map((item) => {
    return `ID: ${item.id}, მარკა: ${item.make}, მოდელი: ${item.model}, წელი: ${item.year}`;
  })
);
