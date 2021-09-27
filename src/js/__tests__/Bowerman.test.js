import Bowerman from '../Bowerman';

test('should return the created Bowerman', () => {
  expect(new Bowerman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    defence: 25,
    _attack: 25,
    _stoned: '',
  });
});
