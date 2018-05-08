export function getLocationName(lat, long) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp);
        }
        return resp.json();
    }).then(data => {
        if (data.result && data.result.length == 0) {
            throw new Error(data);
        }
        return data.results[0].formatted_address;
    })
}
