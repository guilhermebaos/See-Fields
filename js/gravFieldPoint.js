import Vector2D from '../js/vector2d.js'

// A point ... in SPACE!
export default class GravFieldPoint {
    constructor(x, y, step) {
        // Canvas coordinates of the top left of the Point/ Pixel
        this.coord = new Vector2D(x, y)

        // Center of the Point, used for the Gravity calculations
        this.center = new Vector2D(x + step.x / 2, y + step.y / 2)

        // The gravity vector on the 
        this.gravity = new Vector2D(0, 0)
        this.body = null
    }
}