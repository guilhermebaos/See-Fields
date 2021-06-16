// Imports
import Point from '../js/point.js'
import GravBody from '../js/gravBody.js'
import GravFieldPoint from '../js/point.js'
import GravColorSim from '../js/gravColorSim.js'


// PARAMETERS

// Scale of the canvas (bigger scale = higher resolution)
const SCALE = window.devicePixelRatio + 0

// Distance between points in the canvas
const STEP = new Point(1, 2)


const PARAMETERS = {
    SCALE,
    STEP
}



// CONSTANTS

// Physics Constants


// HTML Constants
const colorGravCanvas = document.getElementById('colorGravCanvas')

colorGravCanvas.sim = new GravColorSim(colorGravCanvas, PARAMETERS)



// MAIN CODE

// Resize canvas
function resizeCanvas(canvas) {
    let rect = canvas.getBoundingClientRect()

    colorGravCanvas.width = (rect.right - rect.left) * SCALE
    colorGravCanvas.height = (rect.bottom - rect.top) * SCALE

    canvas.sim.onResize()
}

// Detect and respond to click
function mouseClick(canvas, event) {
    let rect = canvas.getBoundingClientRect()

    let x = (event.clientX - rect.left) * SCALE,
        y = (event.clientY - rect.top) * SCALE
    canvas.onClick(x, y)
}

colorGravCanvas.addEventListener('mousedown', (event) => { mouseClick(colorGravCanvas, event) })


window.addEventListener('resize', (event) => resizeCanvas(colorGravCanvas))

resizeCanvas(colorGravCanvas)
