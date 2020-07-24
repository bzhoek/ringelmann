const chop = (float) => {
  return Math.trunc(float * 100) / 100
}
const coordinates = (angle, length) => {
  let radians = angle * Math.PI / 180
  let y = length * Math.sin(radians)
	let x = length * Math.cos(radians)
  return {x: chop(x), y: chop(y)}
}

test('30 degrees', () => {
  expect(coordinates(30, 10)).toEqual({x: 8.66, y: 4.99})
});

test('0 degrees', () => {
  expect(coordinates(0, 10)).toEqual({x: 10, y: 0})
});

test('180 degrees', () => {
  expect(coordinates(180, 10)).toEqual({x: -10, y: 0})
});

test('360 degrees', () => {
  expect(coordinates(360, 10)).toEqual({x: 10, y: -0})
});

// from https://www.youtube.com/playlist?list=PLf390_hCtSNgyqbsHL1t9y6Etq5njrGsS
test('x and 7 from angle', () => {
	let angle = 30
	let length = 10
	let radians = angle * Math.PI / 180
  expect(radians).toBeCloseTo(0.52)
	let sin = Math.sin(radians)
  expect(sin).toBeCloseTo(0.499)
  let y = length * sin
  expect(y).toBeCloseTo(4.999)
	let cos = Math.cos(radians)
	let x = length * cos
  expect(x).toBeCloseTo(8.66)
});
