export function SuggestionApi(inputEl) {

    return new Promise((resolve, reject) => {
        let autocomplete = new google.maps.places.SearchBox(inputEl);

        autocomplete.addListener('places_changed', function () {
            let place = autocomplete.getPlaces()[0];
            if (typeof place == "undefined") {
                reject(new Error("Can`t find city location."));
                return;
            }

            let lat = place.geometry.location.lat();
            let long = place.geometry.location.lng();

            resolve({
                address: place.formatted_address,
                lat: lat.toFixed(4),
                long: long.toFixed(4)
            });
        });
    })

}
