export function viewer(reference) {
    let viewer = document.createElement('div')
    viewer.classList.add('viewer')
    reference.parentNode.insertBefore(viewer, reference)
    return viewer
}