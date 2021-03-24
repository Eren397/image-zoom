import { getPosition } from '../imgZoom/getPosition.js'
import { image } from './imagezoom.js'
import { select } from '../seletores/seletores.js'

export function move(e) {
    let viewer = select('.viewer')
    let position = getPosition(e, image)
    let positionX = position.cordinateX - (viewer.clientWidth / 2)
    let positionY = position.cordinateY - (viewer.clientHeight / 2)
    viewer.style.top = `${positionY}px`
    viewer.style.left = `${positionX}px`
}