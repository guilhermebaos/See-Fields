import Point from '../js/point.js'

// A body with mass that creates a gravitational field
export default class GravBody {
    constructor(x, y, m, color) {
        this.coord = Point(x, y)
        this.m = m
        this.color = color

        this.radius = Math.log10(this.m) / 3
    }
}