import { select } from '../seletores/seletores.js'
import { viewer } from '../imgZoom/viewer.js'
import { move } from '../imgZoom/move.js'
import { userEvents } from '../userEvents/userEvents.js'

export let image = select('.image__foto')
export let zoomArea = select('.zoom-area')

export function imagezoom() {
    image.addEventListener('mouseover', initZoom, { once: true })

    function initZoom() {
        let newViewer = viewer(this)
        let raioY = this.clientHeight / newViewer.clientHeight
        let raioX = this.clientWidth / newViewer.clientWidth
        zoomArea.style.backgroundImage = `url(${image.src})`
        zoomArea.style.backgroundSize = `${raioX* this.clientWidth}px ${raioY * this.clientHeight}px`
        userEvents(this, move)
        userEvents(newViewer, move)
    }


}