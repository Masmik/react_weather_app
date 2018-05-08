export function insertGoogleScript() {
    let google_api = document.createElement('script'),
        api_key = 'AIzaSyCFYRuRgQBjP2G2YWvL7jg72DJ43kOLmN4';

    google_api.src = "https://maps.googleapis.com/maps/api/js?key=" + api_key + "&libraries=places,geometry&callback=GoogleApiLoaded";

    document.body.appendChild(google_api);
}
