import Human from "./Human";
import randomInt from './random'

const femaleNames = [
  'Алина',
  'Арина',
  'Амина',
  'Альбина',
  'Катя',
  'Настя'
]

export default class Man extends Human {
  constructor(eyesColor = "") {
    super(eyesColor);
    this.weight = randomInt(2, 4);
    this.gender = 'woman';
    this.name = femaleNames[randomInt(0, femaleNames.length)];
  }
}