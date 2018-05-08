export function getWeather(lat, long) {
    const API_URL = 'https://api.darksky.net/forecast/';
    const API_KEY = '92bd3e58604d7e3e7b32e86b71f4be3d';
    const URL = `${API_URL}${API_KEY}/${lat},${long}`;

    const fetchJSONP = (unique => url =>
            new Promise(rs => {
                const script = document.createElement('script');
                const name = `_jsonp_${unique++}`;

                if (url.match(/\?/)) {
                    url += `&callback=${name}`;
                } else {
                    url += `?callback=${name}`;
                }

                script.src = url;
                window[name] = json => {
                    rs(new Response(JSON.stringify(json)));
                    script.remove();
                    delete window[name];
                };

                document.body.appendChild(script);
            })
    )(0);

    return fetchJSONP(URL).then(resp => resp.json());

}
