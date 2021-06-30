import Vector2D from '../js/vector2d.js'

// Calculates the gravity field vector on a Point
function gravityOnPoint(sim, point, body) {
    let G = sim.CONSTANTS.G

    let diffVector = body.coord.thisMinus(point.coord)
    let distance = diffVector.absThis() * sim.pxToM

    console.log(distance)
    console.log(body.mass)

    let intensity = (G * body.mass) / (distance ** 2)

    console.log(intensity)
}

export { gravityOnPoint }