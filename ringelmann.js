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

export const lines = (points) => {
  return makeShape(points).map(line => {
    return {
      type: 'line',
      x1: line[0],
      y1: line[1],
      x2: line[2],
      y2: line[3],
      stroke: '#1F9FFD',
      strokeWidth: 4
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {

  const shape = Wilderness.shape
  const timeline = Wilderness.timeline
  const render = Wilderness.render
  const play = Wilderness.play

  const keyframe1 = {
    type: 'circle',
    cx: -50,
    cy: 0,
    r: 10,
    stroke: '#DBF8A1',
    fill: "transparent",
  }

  const keyframe2 = {
    type: 'rect',
    x: 30,
    y: 10,
    width: 20,
    height: 20,
    stroke: '#1F9FFD',
    fill: "transparent",
    duration: 2000
  }

  const keyframe3 = {
    type: 'g',
    shapes: lines(4),
    stroke: "black",
    fill: "transparent",
    duration: 2000
  }

  const polyline = {
    "type": "polyline",
    "points": "0,-50 50,0 50,0 0,50 0,50 -50,0 -50,0 0,-50",
    stroke: "#000000",
    fill: "transparent",
    duration: 2000
  }

  const path = {
    type: 'path',
    d: 'M5,50L80,60v40,l-15,10l-15,-10z',
    stroke: "black",
    fill: "none"
  }

  console.dir(JSON.stringify(keyframe3))

  const morph = shape(keyframe1, keyframe2, polyline, path)
  const animation = timeline(morph)

  // const animation = shape(keyframe3)
  // shape(polyline)
  render(document.querySelector('svg'), animation)

  play(animation)
})