const token = 'BQB7sIWCNmukOKTvEP9Pmgj1GhQeogryA_MxeFP7vi-LUOfmNwGc89rA4L9hf9jy5cXBuUacQL-rZx6dcv4NcxVI27H53E3NDfFC0Bw1C6r3CtIgWc-vrYA1rMQ89fjyHGfwH57A7UBVWAAow5ZhYcCEERpON-3rR469zeK4sxGCgSLKFpbDqfWj0AbQzhbFsqw1rfcPMnBjzW4E3MU8_gyw5wdj9U4bfUkGJwGC1UysxlizYh3ngozY6ZDy258Y3VbcM_5Fh7dhArsHTSld-xTKSAai';

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