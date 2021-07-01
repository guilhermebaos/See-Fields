import Vector2D from '../js/vector2d.js'

// Calculates the gravity field vector on a Point
function gravityOnPoint(sim, point, body) {
    let G = sim.CONSTANTS.G

    let diffVector = body.coord.minus(point.coord)
    let distance = diffVector.absThis() * sim.pxToM

    let unitForceVector = diffVector.unitVectorThis()
    let intensity = (G * body.mass) / (distance ** 2)

    return unitForceVector.times(intensity)
}

export { gravityOnPoint }