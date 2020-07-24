const chop = (float) => {
  return Math.trunc(float * 100) / 100
}

const coordinates = (angle, length) => {
  let radians = (angle - 90) * Math.PI / 180
  let y = length * Math.sin(radians)
  let x = length * Math.cos(radians)
  return {x: chop(x), y: chop(y)}
}

export const angles = (points) => {
  let result = []
  for (let i = 0; i < points; i++) {
    result.push(360 / points * i)
  }
  return result
}

export const segments = (points) => {
  let lines = []
  let a = angles(points)
  for (let i = 0; i < a.length - 1 && points > 2; i++) {
    lines.push([a[i], a[i + 1]])
  }
  lines.push([a.pop(), a[0]])
  return lines
}

export const makeShape = (points) => {
  return segments(points)
    .map(segment => segment.map(angle => coordinates(angle, 50))
    .flatMap(point => [point.x, point.y]))
}
