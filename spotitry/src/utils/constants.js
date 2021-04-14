//Firebase
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDaeiVFGwFlPRRv-PmJGPfR5uy0Mq6sI4E",
  authDomain: "spotitry-4ca96.firebaseapp.com",
  databaseURL: "https://spotitry-4ca96-default-rtdb.firebaseio.com",
  projectId: "spotitry-4ca96",
  storageBucket: "spotitry-4ca96.appspot.com",
  messagingSenderId: "114096662793",
  appId: "1:114096662793:web:98352476fe4fddd00ccbd8",
  measurementId: "G-K4DMSYDJ8B"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const auth = firebase.auth();
export const Firebase = firebase;

//Spotify API 
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
    'user-read-email',
    'user-modify-playback-state'
  ];

export const PROFILE_ENDPOINT  = 'https://api.spotify.com/v1/me'
export const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists'
export const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
export const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'
export const PLAYER_ENDPOINT = 'https://api.spotify.com/v1/me/player'
// export const HISTORY_ENDPOINT = 'https://api.spotify.com/v1/me/'

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



export function parseSpecialCharacters(string){
    var newString = string.replace(/[^a-zA-Z0-9]/g, '')
    return(newString)
}