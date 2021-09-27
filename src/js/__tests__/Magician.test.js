import Magician from '../Magician';

test('should return the created Magician', () => {
  expect(new Magician('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Magician',
    defence: 40,
    _attack: 10,
    _stoned: '',
  });
});
