import MathChar from './MathChar';

export default class Bowerman extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
