// A point (or 2D Vector)
export default class Vector2D {
    constructor(x, y) {
        // Vector coordinates
        this.x = x
        this.y = y

        // Length of the vector (absolute value)
        this.absThis()
    }

    // Calculate the absolute value of this vector
    absThis() {
        this.abs = (this.x ** 2 + this.y ** 2) ** 0.5

        return this.abs
    }

    // Calculate a unit vector with this vector's direction
    unitVectorThis() {
        this.absThis()

        return new Vector2D(this.x / this.abs, this.y / this.abs)
    }

    // Return this + vector
    add(vector) {
        let result = new Vector2D(this.x + vector.x, this.y + vector.y)

        return result
    }

    // Return this - vector
    minus(vector) {
        let result = new Vector2D(this.x - vector.x, this.y - vector.y)

        return result
    }

    // Return this * constant
    times(constant) {
        let result = new Vector2D(this.x * constant, this.y * constant)

        return result
    }

    // Distance between points
    distance(vector) {
        let result = ((this.x - vector.x) ** 2 + (this.y - vector.y) ** 2)**0.5

        return result
    }
}