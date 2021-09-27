import Daemon from '../Daemon';

test('should return the created Daemon', () => {
  expect(new Daemon('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Daemon',
    defence: 40,
    _attack: 10,
    _stoned: '',
  });
});
