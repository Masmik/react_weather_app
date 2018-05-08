export function isAllowedGEOLocation() {
    return !!navigator.geolocation;
}

export function AutoGEOLocation() {

    return new Promise((resolve, reject) => {

        if (!isAllowedGEOLocation()) {
            reject("Browser not allow you to use the GEO Location");
            return
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            resolve({
                isAllowed: true,
                lat: lat.toFixed(4),
                long: long.toFixed(4)
            });

        }, function (err) {
            reject(new Error("Can`t find your location. Orig Error = " + err.message));
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        })

    });
}


