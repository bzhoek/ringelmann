import {angles, segments, makeShape, lines} from './ringelmann'

describe('angles', () => {
  test('triangle', () => {
    expect(angles(3)).toEqual([0, 120, 240])
  });

  test('square', () => {
    expect(angles(4)).toEqual([0, 90, 180, 270])
  });

  test('pentagon', () => {
    expect(angles(5)).toEqual([0, 72, 144, 216, 288])
  });
})

describe('segments', () => {
  test('line', () => {
    expect(segments(2)).toEqual([[180, 0]])
  });
  test('triangle', () => {
    expect(segments(3)).toEqual([[0, 120], [120, 240], [240, 0]])
  });
})

describe('shapes', () => {
  test('line', () => {
    expect(makeShape(2)).toEqual([[0, 50, 0, -50]])
  });
  test('triangle', () => {
    expect(makeShape(3)).toEqual([[0, -50, 43.3, 24.99], [43.3, 24.99, -43.3, 24.99], [-43.3, 24.99, 0, -50]])
  });
})

describe('svg', () => {
  test('line', () => {
    expect(lines(2)).toEqual([[0, 50, 0, -50]])
  });
})
