export const storageService = {
    loadFromStorage,
    saveToStorage
}

function saveToStorage(key, val) {
    return Promise.resolve(
        localStorage.setItem(key, JSON.stringify(val))
    )
}

function loadFromStorage(key) {
    return Promise.resolve(
        JSON.parse(localStorage.getItem(key)) || []
    )
}