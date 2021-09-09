class Stat {
  constructor() {
    this.peopleCount = 2;
    this.mansCount = 1;
    this.womansCount = 1;
    this.avgAge = 0;
    this.avgWeight = 0;
    this.deadHumans = 0;
    this.eyeColorsCount = {
      'Серые': 0,
      'Зеленые': 0,
      'Голубые': 0,
      'Карие': 0
    };
    this.mutationsCount = 0;
  }

  update(humans) {
    this.peopleCount = humans.length;
    this.mansCount = humans.reduce((acc, human) => acc += human.gender == "man" ? 1 : 0, 0);
    this.womansCount = humans.reduce((acc, human) => acc += human.gender == "woman" ? 1 : 0, 0);
    this.avgAge = humans.reduce((acc, human) => acc += human.age, 0) / this.peopleCount;
    this.avgAge = this.avgAge.toFixed(2);
    this.avgWeight = humans.reduce((acc, human) => acc += human.weight, 0) / this.peopleCount;
    this.avgWeight = this.avgWeight.toFixed(2);
    for (let key in this.eyeColorsCount) {
      this.eyeColorsCount[key] = humans.reduce((acc, human) => acc += human.eyesColor == key ? 1 : 0, 0);
    }
  }
}

let stat = new Stat();
export default stat;