import {angles, segments, makeShape, pointsString} from './ringelmann'

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
    expect(segments(2)).toEqual([[0, 180]])
  });
  test('triangle', () => {
    expect(segments(3)).toEqual([[0, 120], [0, 240], [120, 240]])
  });
  test('square', () => {
    expect(segments(4)).toEqual([[0, 90], [0, 180], [0, 270], [90, 180], [90, 270], [180, 270]])
  });
  test('pentagon', () => {
    expect(segments(5).length).toEqual(5 * 4 / 2)
  });
  test('hexagon', () => {
    expect(segments(6).length).toEqual(6 * 5 / 2)
  });
  test('heptagon', () => {
    expect(segments(7).length).toEqual(7 * 6 / 2)
  });
  test('octagon', () => {
    expect(segments(8).length).toEqual(8 * 7 / 2)
  });
  test('enneagon', () => {
    expect(segments(9).length).toEqual(9 * 8 / 2)
  });
})

describe('shapes', () => {
  test('line', () => {
    expect(makeShape(2)).toEqual([[0, -50, 0, 50]])
  });
  test('triangle', () => {
    expect(makeShape(3)).toEqual([[0, -50, 43.3, 24.99], [0, -50, -43.3, 24.99], [43.3, 24.99, -43.3, 24.99]])
  });
})

describe('svg', () => {
  test('polyline', () => {
    expect(pointsString(2)).toEqual("0, -50 0, 50")
  });
})
