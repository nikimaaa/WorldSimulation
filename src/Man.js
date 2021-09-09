import Human from "./Human";
import randomInt from './random'

const maleNames = [
  'Вова',
  'Сергей',
  'Кирил',
  'Ян',
  'Никита',
  'Евкакий'
]

export default class Man extends Human {
  constructor(eyesColor = "") {
    super(eyesColor);
    this.weight = randomInt(2, 6);
    this.gender = 'man';
    this.name = maleNames[randomInt(0, maleNames.length)];
  }
}