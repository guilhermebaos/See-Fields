import GravBody from '../js/gravBody.js'
import Vector2D from '../js/vector2d.js'
import GravFieldPoint from '../js/gravFieldPoint.js'

// The Simulation of a static and colored Gravitational Field
export default class GravColorSim {
    constructor(canvas, PARAMETERS) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')

        this.SCALE = PARAMETERS.SCALE
        this.STEP = PARAMETERS.STEP
    }

    // Start and Restart the Simulation
    start() {
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.ctx.clearRect(0, 0, this.width, this.height)

        // Define points according to the Parameters
        this.points = this.getPoints()
    }

    getPoints() {
        let tempPoints = []
        for (let x = 0; x < this.width; x ++) {
            for (let y = 0; y < this.height; y++) {
                tempPoints.push(new GravFieldPoint(x, y))
            }
        }
        return tempPoints
    }

    onClick(x, y) {
        console.log(x)
        console.log(y)
    }

    onResize() {
        this.start()
    }
}