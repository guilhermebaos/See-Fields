import Vector2D from '../js/vector2d.js'

// A body with mass that creates a gravitational field
export default class GravBody {
    constructor(simulation, x, y, mass, color) {
        this.sim = simulation

        this.coord = new Vector2D(x, y)
        this.coordRatio = new Vector2D(x / this.sim.width, y / this.sim.height)

        this.mass = mass
        this.color = color

        this.radius = Math.round(Math.max(Math.log(this.mass) - Math.log(this.sim.simWidth), 3))
    }

    // Recalculate the coordinates when the canvas is resized
    resize() {
        this.coord.x = this.coordRatio.x * this.sim.width
        this.coord.y = this.coordRatio.y * this.sim.height
    }

    // Draw the body on the canvas
    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.coord.x, this.coord.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}