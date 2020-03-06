/* eslint-disable no-undef */
import { PlayerFactory } from '../src/logic';

const testPlayer = PlayerFactory('sarah', 'x');

it('returns an object', () => {
  expect(typeof PlayerFactory('sarah', 'x')).toBe('object');
});

describe('PlayerFactory returned object', () => {
  it('has a getName property', () => {
    expect(testPlayer.getName).toBeTruthy();
  });

  it('has a getSymbol property', () => {
    expect(testPlayer.getSymbol).toBeTruthy();
  });

  it('has a getScore property', () => {
    expect(testPlayer.getScore).toBeTruthy();
  });

  it('has a setScore property', () => {
    expect(testPlayer.setScore).toBeTruthy();
  });
});

describe('getName property', () => {
  it('is a function', () => {
    expect(typeof testPlayer.getName).toBe('function');
  });

  it('returns the name with which the factory instance was initialized(1)', () => {
    const name = 'mary';
    const player = PlayerFactory(name, 'x');
    expect(player.getName()).toBe(name);
  });

  it('returns the name with which the factory instance was initialized(2)', () => {
    const name = 'john';
    const player = PlayerFactory(name, 'x');
    expect(player.getName()).toBe(name);
  });
});

describe('getSymbol property', () => {
  it('is a function', () => {
    expect(typeof testPlayer.getSymbol).toBe('function');
  });

  it('returns the symbol with which the factory instance was initialized(1)', () => {
    const symbol = 'x';
    const player = PlayerFactory(name, symbol);
    expect(player.getSymbol()).toBe(symbol);
  });

  it('returns the symbol with which the factory instance was initialized(2)', () => {
    const symbol = 'o';
    const player = PlayerFactory(name, symbol);
    expect(player.getSymbol()).toBe(symbol);
  });
});

describe('getScore property', () => {
  it('is a function', () => {
    expect(typeof testPlayer.getScore).toBe('function');
  });

  it('returns a player score(1)', () => {
    expect(testPlayer.getScore()).toBe(0);
  });

  it('returns a player score(2)', () => {
    testPlayer.setScore();
    expect(testPlayer.getScore()).toBe(1);
  });
});

describe('setScore property', () => {
  it('is a function', () => {
    expect(typeof testPlayer.setScore).toBe('function');
  });

  it('increments player score by 1(1)', () => {
    const previousScore = testPlayer.getScore();
    testPlayer.setScore();
    expect(testPlayer.getScore()).toBe(previousScore + 1);
  });

  it('increments player score by 1(2)', () => {
    const previousScore = testPlayer.getScore();
    testPlayer.setScore();
    testPlayer.setScore();
    testPlayer.setScore();
    expect(testPlayer.getScore()).toBe(previousScore + 3);
  });
});
