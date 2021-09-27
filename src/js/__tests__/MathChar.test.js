import Magician from '../Magician';
import Daemon from '../Daemon';
import Bowerman from '../Bowerman';

test('should return attack Magician with stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});

test('should return attack Magician', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe(90);
});

test('should return attack Daemon with stoned', () => {
  const boogeyman = new Daemon('Boogeyman');
  boogeyman.attack = 70;
  boogeyman.distance = 3;
  boogeyman.stoned = true;
  expect(boogeyman.attack).toBe(48);
});

test('should return attack Daemon', () => {
  const boogeyman = new Daemon('Boogeyman');
  boogeyman.attack = 70;
  boogeyman.distance = 3;
  boogeyman.stoned = false;
  expect(boogeyman.attack).toBe(56);
});

test('should return attack Bowerman with stoned', () => {
  const born = new Bowerman('Born');
  born.attack = 100;
  born.distance = 4;
  born.stoned = true;
  expect(born.attack).toBe(100);
});

test('should return attack Bowerman', () => {
  const born = new Bowerman('Born');
  born.attack = 100;
  born.distance = 4;
  born.stoned = false;
  expect(born.attack).toBe(100);
});
