import Vector2D from '../js/vector2d.js'

// A body with mass that creates a gravitational field
export default class GravBody {
    constructor(x, y, m, color) {
        this.coord = Vector2D(x, y)
        this.m = m
        this.color = color

        this.radius = Math.log10(this.m) / 3
    }
}