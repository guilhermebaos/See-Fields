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
    }

    // Calculate a unit vector with this vector's direction
    unitVectorThis() {
        this.absThis()

        return new Vector2D(this.x / this.abs, this.y / this.abs)
    }
}