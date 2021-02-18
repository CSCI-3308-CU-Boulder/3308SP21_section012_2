import React, { Component } from "react";
import hash from "./hash";
import logo from "./logo.svg";
import "./App.css";

    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = "4604d772bd3e4fe69399830809371aa4";
    const redirectUri = "http://localhost:3000";
    const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    ];
    // Get the hash of the url
    const hash = window.location.hash
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
const AuthButton = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!this.state.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )}
      </header>
    </div>
  );
  }

export default App;
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export function* authorizeUser(){

    const clientId = "4604d772bd3e4fe69399830809371aa4";
    const redirectUri = "http://localhost:3000";
    const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    ];
    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});

    let _token = hash.access_token

};
