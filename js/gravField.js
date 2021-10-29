// Imports
import Vector2D from '../js/vector2d.js'
import GravBody from '../js/gravBody.js'
import GravFieldPoint from '../js/gravFieldPoint.js'
import GravColorSim from '../js/gravColorSim.js'


// PARAMETERS

// Scale of the canvas (bigger scale = higher resolution)
const SCALE = window.devicePixelRatio + 0

// Distance between points in the canvas
const STEP = new Vector2D(2, 2)


const PARAMETERS = {
    SCALE,
    STEP
}



// CONSTANTS

// Physics Constants
const G = 6.674e-11     // m**3 kg**-1 s**-2

const CONSTANTS = {
    G
}

// Color Constants
const COLORS = {
    minGrav: [2, 40, 89],
    maxGrav: [171, 214, 231]
}


// HTML Constants

// Canvas
const colorGravCanvas = document.getElementById('colorGravCanvas')

// Inputs
colorGravCanvas.massInput = document.getElementById('colorMass')
colorGravCanvas.colorInput = document.getElementById('colorColor')
colorGravCanvas.widthInput = document.getElementById('colorWidth')

// Simulation
colorGravCanvas.sim = new GravColorSim(colorGravCanvas, PARAMETERS, CONSTANTS, COLORS)





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

    let mass = colorGravCanvas.massInput.value * 1
    let color = colorGravCanvas.colorInput.value

    canvas.sim.onClick(x, y, mass, color)
}

colorGravCanvas.addEventListener('mousedown', (event) => { mouseClick(colorGravCanvas, event) })


window.addEventListener('resize', (event) => resizeCanvas(colorGravCanvas))

resizeCanvas(colorGravCanvas)
