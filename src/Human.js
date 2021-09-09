import randomInt from "./random";
import stat from "./Stat";

const eyesColors = [
  'Серые',
  'Зеленые',
  'Голубые',
  'Карие'
];

export default class Human {
  constructor(eyesColor) {
    this.eyesColor = eyesColor || eyesColors[randomInt(0, eyesColors.length)];
    this.age = 0;
    this.maxAge = randomInt(50, 80);
    this.canPare = false;
  }

  inheritEyesColor(dadColor, momColor) {
    const rnd = Math.random();
    if (rnd <= 0.4) this.eyesColor = dadColor;
    if (rnd > 0.4 && rnd <= 0.8) this.eyesColor = momColor;
    if (rnd > 0.8) {
      const psbColors = eyesColors.filter((color) => color != dadColor && color != momColor);
      this.eyesColor = psbColors[randomInt(0, psbColors.length)];
      stat.mutationsCount++;
    }
  }

  growUp() {
    this.age++;
    if (this.age >= this.maxAge) throw new Error({ message: "Too old to be alive" })
    this.weight += randomInt(0, 2);
    this.canPare = this.age > 18 && this.age % 10 == 0;
  }
}