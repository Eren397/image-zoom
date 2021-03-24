import { getPosition } from '../imgZoom/getPosition.js'
import { image } from './imagezoom.js'
import { zoomArea } from './imagezoom.js'
import { select } from '../seletores/seletores.js'

export function move(e) {
    e.preventDefault()
    let viewer = select('.viewer')
    let position = getPosition(e, image)
    let positionX = position.cordinateX - (viewer.clientWidth / 2)
    let positionY = position.cordinateY - (viewer.clientHeight / 2)
    let raioY = image.clientHeight / viewer.clientHeight
    let raioX = image.clientWidth / viewer.clientWidth

    if (positionX <= 0) {
        positionX = 0
    } else if (positionX >= image.clientWidth - viewer.clientWidth) {
        positionX = image.clientWidth - viewer.clientWidth
    } else if (positionY <= 0) {
        positionY = 0
    } else if (positionY >= image.clientHeight - viewer.clientHeight) {
        positionY = image.clientHeight - viewer.clientHeight
    }

    if (positionX <= 0 && positionY <= 0) {
        positionY = 0
        positionX = 0
    } else if (positionX <= 0 && positionY >= image.clientHeight - viewer.clientHeight) {
        positionY = image.clientHeight - viewer.clientHeight
        positionX = 0
    } else if (positionX >= image.clientWidth - viewer.clientWidth && positionY <= 0) {
        positionX = image.clientWidth - viewer.clientWidth
        positionY = 0
    } else if (positionX >= image.clientWidth - viewer.clientWidth && positionY >= image.clientHeight - viewer.clientHeight) {
        positionY = image.clientHeight - viewer.clientHeight
        positionX = image.clientWidth - viewer.clientWidth
    }

    viewer.style.top = `${positionY}px`
    viewer.style.left = `${positionX}px`
    zoomArea.style.backgroundPosition = `${-positionX * raioX}px ${-positionY * raioY}px`
}