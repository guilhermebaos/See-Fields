// A point (or 2D Vector)
export default class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.abs = this.absThis()
    }

    absThis() {
        return (this.x ** 2 + this.y ** 2) ** 0.5
    }

    unitVectorThis() {
        this.abs = this.absThis()
    }
}