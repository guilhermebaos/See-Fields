import Vector2D from '../js/vector2d.js'

// A body with mass that creates a gravitational field
export default class GravBody {
    constructor(simulation, x, y, mass, color) {
        this.simulation = simulation

        this.coord = new Vector2D(x, y)
        this.coordRatio = new Vector2D(x / this.simulation.width, y / this.simulation.height)

        this.mass = mass
        this.color = color

        this.radius = Math.round(Math.max(Math.log(this.mass) - 35, 3))
    }

    // Recalculate the coordinates when the canvas is resized
    resize() {
        this.coord.x = this.coordRatio.x * this.simulation.width
        this.coord.y = this.coordRatio.y * this.simulation.height
    }

    // Draw the body on the canvas
    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.coord.x, this.coord.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}