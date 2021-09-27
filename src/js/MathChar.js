/* eslint-disable no-underscore-dangle */
import Character from './Character';

export default class MathChar extends Character {
  constructor(name) {
    super(name);
    this.stoned = '';
  }

  get attack() {
    if (this.type === 'Magician' || this.type === 'Daemon') {
      this._attack *= (1.1 - 0.1 * this.distance);
      this._attack = this.stoned ? this._attack - Math.log2(this.distance) * 5 : this._attack;
    }

    return Math.round(this._attack);
  }

  set attack(valueAttack) {
    this._attack = valueAttack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(valueStoned) {
    this._stoned = valueStoned;
  }
}
