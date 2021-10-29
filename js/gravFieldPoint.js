import Vector2D from '../js/vector2d.js'

// A point ... in SPACE!
export default class GravFieldPoint {
    constructor(x, y, step) {
        // Canvas coordinates of the top left of the Point/ Pixel
        this.coord = new Vector2D(x, y)

        // Center of the Point, used for the Gravity calculations
        this.center = new Vector2D(x + step.x / 2, y + step.y / 2)

        // Points dimensions (ironic)
        this.side = step

        // The gravity vector on this point
        this.gravity = new Vector2D(0, 0)

        // The color associated with each point, if any
        this.color = undefined
    }

    // Color the point if it has a color
    draw(ctx) {
        if (!this.color) return

        ctx.fillStyle = this.color
        ctx.fillRect(this.coord.x, this.coord.y, this.side.x, this.side.y)
    }
}