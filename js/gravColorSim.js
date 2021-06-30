import GravBody from '../js/gravBody.js'
import Vector2D from '../js/vector2d.js'
import GravFieldPoint from '../js/gravFieldPoint.js'

import { gravityOnPoint } from '../js/lawsOfPhysiscs.js'

// The Simulation of a static and colored Gravitational Field
export default class GravColorSim {
    constructor(canvas, PARAMETERS, CONSTANTS) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')

        this.SCALE = PARAMETERS.SCALE
        this.STEP = PARAMETERS.STEP

        this.CONSTANTS = CONSTANTS
    }

    // Start and Restart the Simulation
    start() {
        // Size of the canvas
        this.width = this.canvas.width
        this.height = this.canvas.height

        // Clear the canvas
        this.ctx.clearRect(0, 0, this.width, this.height)

        // Width and height of the Simulation (in meters)
        this.simWidth = this.canvas.widthInput.value * 1
        this.simHeight = this.simWidth * this.height / this.width

        // Convert between pixels and meters
        this.pxToM = this.simWidth / this.width
        this.mToPx = this.width / this.simWidth

        // Define points according to the Parameters
        this.points = this.getPoints()

        // List with all the bodies in the simulation
        this.bodies = []

        // Draw the current Gravitational Field
        this.draw()
    }

    // Get all the points in the canvas
    getPoints() {
        let tempPoints = []
        for (let x = 0; x < this.width; x += this.STEP.x) {
            for (let y = 0; y < this.height; y += this.STEP.y) {
                tempPoints.push(new GravFieldPoint(x, y, this.STEP))
            }
        }
        return tempPoints
    }

    // When the user clicks on the canvas, create a Body on that point
    onClick(x, y, mass, color) {
        x = Math.round(x)
        y = Math.round(y)

        this.bodies.push(new GravBody(this, x, y, mass, color))

        this.update()
    }

    // When the canvas iss resized, restart the simulation Object, while saving all the bodies
    onResize() {
        let temp = this.bodies ?? []
        this.start()
        this.bodies = temp
        
        // Resize the bodies' coordinates
        for (let index in this.bodies) {
            this.bodies[index].resize()
        }

        this.draw()
    }

    update() {
        for (let indexP in this.points) {
            let point = this.points[indexP]
            for (let indexB in this.bodies) {
                let body = this.bodies[indexB]

                gravityOnPoint(this, point, body)
                debugger
            }
        }

        this.draw()
    }

    draw() {
        // Draw the bodies
        for (let index in this.bodies) {
            this.bodies[index].draw(this.ctx)
        }
    }
}