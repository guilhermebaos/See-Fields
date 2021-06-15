// Imports
import Point from '../js/point.js'
import GravBody from '../js/gravBody.js'
import GravFieldPoint from '../js/point.js'
import GravColorSim from '../js/gravColorSim.js'


// PARAMETERS
const scale = window.devicePixelRatio



// CONSTANTS

// Physics Constants


// HTML Constants
const colorGravCanvas = document.getElementById('colorGravCanvas')

colorGravCanvas.sim = new GravColorSim(colorGravCanvas, scale)



// MAIN CODE

// Resize canvas
function resizeCanvas(canvas) {
    let rect = canvas.getBoundingClientRect()

    colorGravCanvas.width = (rect.right - rect.left) * scale
    colorGravCanvas.height = (rect.bottom - rect.top) * scale

    canvas.onResize()
}

// Detect and respond to click
function mouseClick(canvas, event) {
    let rect = canvas.getBoundingClientRect()

    let x = (event.clientX - rect.left) * scale,
        y = (event.clientY - rect.top) * scale
    canvas.onClick(x, y)
}

colorGravCanvas.addEventListener('mousedown', (event) => { mouseClick(colorGravCanvas, event) })


window.addEventListener('resize', (event) => resizeCanvas(colorGravCanvas))

resizeCanvas(colorGravCanvas)
