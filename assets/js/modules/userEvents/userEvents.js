export function userEvents(item, callback) {
    const userEvents = ['mousemove', 'touchmove']
    userEvents.forEach(userEvent => {
        item.addEventListener(userEvent, callback)
    })
}