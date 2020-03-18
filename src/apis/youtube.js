import axios from 'axios';

//Key provided by google
const KEY = 'AIzaSyChD6tn8GWqzOgD--FCJkTAdl0OmaJM2v4';

export default axios.create({
// taken from the google youtube api page
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    //contains all query string params we want to add onto the request
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }
});

