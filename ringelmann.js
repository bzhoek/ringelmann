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
  for (let x = 0; x < a.length; x++) {
    for (let y = x + 1; y < a.length; y++) {
      lines.push([a[x], a[y]])
    }
  }
  return lines
}

export const makeShape = (points) => {
  return segments(points)
    .map(segment => segment.map(angle => coordinates(angle, 50))
      .flatMap(point => [point.x, point.y]))
}

export const pointsString = (points) => {
  return segments(points)
    .map(segment => segment.map(angle => coordinates(angle, 50))
      .map(point => `${point.x}, ${point.y}`).join(' ')).join(' ')
}

export const polyline = (points) => {
  return {
    type: 'polyline',
    points: pointsString(points),
    fill: "transparent",
    stroke: '#1F9FFD',
    duration: 2000
  }
}

window.addEventListener('DOMContentLoaded', () => {

  const shape = Wilderness.shape
  const timeline = Wilderness.timeline
  const render = Wilderness.render
  const play = Wilderness.play

  const path = {
    type: 'path',
    d: 'M5,50L80,60v40,l-15,10l-15,-10z',
    stroke: "black",
    fill: "none"
  }

  let shapes = Array.from(Array(7).keys()).map(i => polyline(i + 3));
  console.log(shapes)
  const morph = shape(polyline(3), polyline(4), polyline(5), polyline(6), polyline(7), polyline(8), polyline(9), polyline(10))

  const animation = timeline(morph)

  // render(document.querySelector('svg'), animation)

  play(animation, {
    alternate: true,
    iterations: Infinity
  })
})