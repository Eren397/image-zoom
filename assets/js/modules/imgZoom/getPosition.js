export function getPosition(event, image) {
    let cordinatesImage = image.getBoundingClientRect()
    let cordinateX = event.pageX - cordinatesImage.left
    let cordinateY = event.pageY - cordinatesImage.top
    return {
        cordinateX,
        cordinateY
    }
}