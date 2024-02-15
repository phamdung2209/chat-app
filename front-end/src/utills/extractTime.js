// export function extractTime(date) {
//     const time = new Date(date)
//     const hours = time.getHours()
//     const minutes = time.getMinutes()
//     return `${hours}:${minutes}`
// }

export const extractTime = (dateString) => {
    const date = new Date(dateString)
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

const padZero = (num) => {
    return num.toString().padStart(2, '0')
}
