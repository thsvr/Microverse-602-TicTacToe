import { PlayerFactory } from './src/logic';

const testPlayer = PlayerFactory('sarah', 'x');

it('returns an object', () => {
  expect(typeof PlayerFactory('sarah', 'x')).toBe('object')
});

it('returns an object with the getName property', ()=> {
  expect(testPlayer.getName).toBeTruthy()
});

it('returns an object with the getSymbol property', ()=> {
  expect(testPlayer.getSymbol).toBeTruthy()
});

it('returns an object with the getScore property', ()=> {
  expect(testPlayer.getScore).toBeTruthy()
});

it('returns an object with the setScore property', ()=> {
  expect(testPlayer.setScore).toBeTruthy()
});

it ('getName is a function', () => {
  expect(typeof testPlayer.getName).toBe('function')
});

it ('getSymbol is a function', () => {
  expect(typeof testPlayer.getSymbol).toBe('function')
});

it ('getScore is a function', () => {
  expect(typeof testPlayer.getScore).toBe('function')
});

it ('setScore is a function', () => {
  expect(typeof testPlayer.setScore).toBe('function')
});

it('getName returns the name with which factory instance was initialized', () => {
  const name = 'mary'
  const player = PlayerFactory(name, 'x')
  expect(player.getName()).toBe(name);
});