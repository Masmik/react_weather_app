//return array of objects
export function getLocalStorage(key) {

    if (typeof key === 'undefined' || key.length === 0) {
        return [];
    }

    let localStorage = window.localStorage.getItem(key);

    if (!localStorage || localStorage.length === 0) {
        return [];
    }

    return JSON.parse(localStorage);
}

export function setLocalStorage(key, obj) {

    if (typeof obj.name === 'undefined' || typeof obj.url === 'undefined') {
        return;
    }
    if (typeof key === 'undefined' || key.length === 0) {
        return;
    }

    let storageObj = getLocalStorage(key);

    storageObj.push(obj);

    let serialLocalStorage = JSON.stringify(storageObj);
    window.localStorage.setItem(key, serialLocalStorage);
}

export function setUniqueLocalStorage(key, obj) {
    if (typeof obj.name === 'undefined' || typeof obj.url === 'undefined') {
        return;
    }
    if (typeof key === 'undefined' || key.length === 0) {
        return;
    }

    let storageObj = getLocalStorage(key);
    for (let i =  0; i < storageObj.length; i++) {
        if (storageObj[i].name === obj.name) {
            return;
        }
    }
    setLocalStorage(key, obj);
}
