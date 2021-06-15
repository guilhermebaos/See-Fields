import GravBody from '../js/gravBody.js'
import GravFieldPoint from '../js/point.js'

// The Simulation of a static and colored Gravitational Field
export default class GravColorSim {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }

    // Start and Restart the Simulation
    start() {
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(0, 0, this.width, this.height)
    }

    onClick(x, y) {
        console.log(x)
        console.log(y)
    }

    onResize() {
        this.start()
    }
}