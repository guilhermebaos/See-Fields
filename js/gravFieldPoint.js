import Vector2D from '../js/vector2d.js'

// A point ... in SPACE!
export default class GravFieldPoint {
    constructor(x, y) {
        this.coord = new Vector2D(x, y)
        this.gravity = new Vector2D(0, 0)
    }
}