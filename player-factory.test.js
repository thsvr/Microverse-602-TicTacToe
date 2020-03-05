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

it('getName returns the name with which the factory instance was initialized(1)', () => {
  const name = 'mary'
  const player = PlayerFactory(name, 'x')
  expect(player.getName()).toBe(name);
});

it('getName returns the name with which the factory instance was initialized(2)', () => {
  const name = 'john'
  const player = PlayerFactory(name, 'x')
  expect(player.getName()).toBe(name);
});

it('getSymbol returns the symbol with which the factory instance was initialized(1)', () => {
  const symbol = 'x'
  const player = PlayerFactory(name, symbol)
  expect(player.getSymbol()).toBe(symbol);
});

it('getSymbol returns the symbol with which the factory instance was initialized(2)', () => {
  const symbol = 'o'
  const player = PlayerFactory(name, symbol)
  expect(player.getSymbol()).toBe(symbol);
});

it('getScore returns a player score(1)', () => {
  expect(testPlayer.getScore()).toBe(0);
});

it('getScore returns a player score(2)', () => {
  testPlayer.setScore();
  expect(testPlayer.getScore()).toBe(1);
});

it('setScore increments player score by 1(1)', () => {
  const previousScore = testPlayer.getScore();
  testPlayer.setScore();
  expect(testPlayer.getScore()).toBe(previousScore + 1);
});

it('setScore increments player score by 1(2)', () => {
  const previousScore = testPlayer.getScore();
  testPlayer.setScore();
  testPlayer.setScore();
  testPlayer.setScore();
  expect(testPlayer.getScore()).toBe(previousScore + 3);
});
