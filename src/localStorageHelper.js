function storeToLocalStorage(key, objectArray) {
    localStorage.setItem(key, JSON.stringify(objectArray))
}

function getFromLocalStorage(key) {
    const getFromStorage = localStorage.getItem(key)

    if (getFromStorage == null) return

    const result = JSON.parse(getFromStorage)
    result.forEach(
        task => {
            if ("date" in task) {
                task.date = new Date(task.date)
            }
        }
    )
    return result
}

export { storeToLocalStorage, getFromLocalStorage }