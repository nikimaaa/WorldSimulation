import Man from "./Man";
import randomInt from "./random";
import Woman from "./Woman";
import stat from "./Stat";

export default class World {
  constructor(humans) {
    this.humans = humans;
  }

  tick() {
    this.growUpHumans();
    this.pare();
    stat.update(this.humans);
  }

  growUpHumans() {
    // document.body.textContent = JSON.stringify(this);
    for (let i = 0; i < this.humans.length; i++) {
      try {
        this.humans[i].growUp();
      } catch (error) {
        this.humans.splice(i, 1);
        stat.deadHumans++;
      }
    }
  }

  pare() {
    const dads = this.humans.filter(human => human.gender == 'man' && human.canPare)
    const moms = this.humans.filter(human => human.gender == 'woman' && human.canPare)
    const maxLength = Math.min(dads.length, moms.length)
    for (let i = 0; i < maxLength; i++) {
      this.createChild(dads[i], moms[i])
    }
  }

  createChild(mom, dad) {
    console.log(dad.eyesColor, mom.eyesColor);
    const rndGender = randomInt(0, 2);
    let child = rndGender == 1 ? new Man() : new Woman();
    child.inheritEyesColor(dad.eyesColor, mom.eyesColor);
    this.humans.push(child);
  }
}