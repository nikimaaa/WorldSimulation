import './style.scss'
import World from "./World";
import Man from "./Man";
import Woman from "./Woman";
import stat from "./Stat";

const wrapper = document.querySelector('.wrapper');
const statBlock = document.querySelector('.block-stat');

let w = new Woman();
let m = new Man();
let world = new World([w, m]);

let worldInterval = setInterval(() => {
  world.tick();
  updateStats();
}, 500)

const updateStats = () => {
  wrapper.innerHTML = '';
  for (let human of world.humans) {
    let block = document.createElement('div');
    if (human.gender == 'man') block.classList.add('block', 'block-man');
    if (human.gender == 'woman') block.classList.add('block', 'block-woman');
    block.textContent = JSON.stringify(human);
    wrapper.append(block);
  }
  statBlock.textContent = JSON.stringify(stat, null, " ");
}