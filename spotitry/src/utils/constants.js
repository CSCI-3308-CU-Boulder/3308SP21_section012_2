export const authEndpoint = 'https://accounts.spotify.com/authorize?';
export const signUp = 'https://www.spotify.com/signup/'
export const spotifyLogo = 'https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png'
export const clientId = "4604d772bd3e4fe69399830809371aa4";
export const redirectUri ="http://localhost:3000/home"
export const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
  ];
  
  // Get the hash of the url
export const hash = window.location.hash
.substring(1)
.split("&")
.reduce(function(initial, item) {
    if (item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
}, {});
window.location.hash = "";

export const API_ENDPOINT  = 'https://api.spotify.com'
