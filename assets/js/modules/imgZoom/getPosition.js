export function getPosition(event, image) {
    let cordinatesImage = image.getBoundingClientRect()
    let cordinateX = event.pageX - cordinatesImage.left || event.changedTouches[0].clientX - cordinatesImage.left
    let cordinateY = event.pageY - cordinatesImage.top || event.changedTouches[0].clientY - cordinatesImage.top

    return {
        cordinateX,
        cordinateY
    }
}