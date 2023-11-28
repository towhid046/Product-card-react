 export const getData = (keyName) => {
    return JSON.parse(localStorage.getItem(keyName)) || []
}

