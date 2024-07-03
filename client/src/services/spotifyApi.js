const token = 'BQC2m9iSOXsyQATJk1gWFJYps0p7gQT0LSEZAual8S_kOotGIjgMRxBGF-Zg8MJ_QrkOQBuC1hsKRiHweJwuFThkP_WwuMv2WiMwAsyPbkCVWRvTfzxhTKPEPMWVj6I_NVlGOZjs3Lwd3JhXsHS82hzFcM62PDVWmNT081jm1zVRirA-V3pmGPE4Qj31lBdtwJuIEJzJResrhjrJJ4iKvuOLrTWDqwlTpaH59gKDOoph2omwIVrEdIKrArMp67AtAK9YXDBBH3TGYFlApGq8zlX_Os5q';
// async / await - code.
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

const topTracksIds = [
    '0Oto5hqPA0aQ5sKAY7pRmg', '46u5B2WN4wryYLZuMAOmI4', '7zxW6x4c9zEDqNMaBrObzc', '3oELxRDbAzyvOodhd5FQzB', '6fW78cd0p3ZDUzoqvx2Xqe'
];

async function getRecommendations() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
    return (await fetchWebApi(
        `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
    )).tracks;
}



class SpotifyService {
    async getTop() {
        const topTracks = await getTopTracks();
        // console.log(
        //     topTracks?.map(
        //         ({ name, artists }) =>
        //             `${name} by ${artists.map(artist => artist.name).join(', ')}`
        //     )
        // );
        return topTracks;
    }

    async getRecommended() {
        const recommendedTracks = await getRecommendations();
        // console.log(
        //   recommendedTracks.map(
        //     ({name, artists}) =>
        //       `${name} by ${artists.map(artist => artist.name).join(', ')}`
        //   )
        // );
        return recommendedTracks;
    }
}


const spotifyService = new SpotifyService();
export default spotifyService;