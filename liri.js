require("dotenv").config();
const axios = require("axios");
const moment = require("moment");

const Spotify = require("node-spotify-api");
const fs = require("fs");
const keys = require("./keys.js");
const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});


const action = process.argv[2]

const value = process.argv.slice(3).join(" ");

function mainFunction(action, value) {
    switch (action) {
        case "concert-this":
            concertThis(value);
            break;

        case "spotify-this-song":
            spotifyThis(value);
            break;

        case "movie-this":
            movieThis(value);
            break;

        case "do-what-it-says":
            doWhat(value);
            break;
    }
}

function concertThis(artist) {

    // const artist = process.argv.slice(3).join("-");
    let queryUrl = `https://api.seatgeek.com/2/events?client_id=ODU1MTQ4M3wxNTczNjc5ODUyLjkz&performers.slug=${artist}`;
    axios.get(queryUrl).then(function (response) {
        console.log("Venue: " + response.data.events[0].venue.name)
        console.log("City: " + response.data.events[0].venue.extended_address)
        console.log("Date: " + moment(response.data.events[0].datetime_local).format("MM/DD/YYYY"));
    })
        .catch(function (err) {
            console.log(err);
        })
}

function spotifyThis(songName) {
    console.log(songName)
    // const songName = process.argv.slice(3).join(" ");
    songName = songName || "The Sign Ace";
    if (songName === "") {
        // console.log("Artist Name: Ace of Base");
        // console.log("Song Title: The Sign");
        // console.log("Preview URL: https://p.scdn.co/mp3-preview/9b0b05385408e704642001108e3dded01657a29a?cid=4a5b9571f21d4613b08db9801a1572e1");
        // console.log("Album Name: Happy Nation");
    } else {
        spotify.search({ type: 'track', query: songName })
            .then(function (response) {
                console.log("Artist Name: " + response.tracks.items[0].artists[0].name);
                console.log("Song Title: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album Name: " + response.tracks.items[0].album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

}

function movieThis(movieName) {

    // const movieName = process.argv.slice(3).join(" ");
    movieName = movieName || "Mr. Nobody";
    var queryUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=trilogy`;
    // if (movieName === "") {
    // return movieName("mr+nobody");
    // console.log("Movie Title: Mr. Nobody");
    // console.log("Movie Year: 2009");
    // console.log("IMDB Rating: 7.8/10");
    // console.log("Rotten Tomatoes Rating: 67%");
    // console.log("Country: Belgium, Germany, Canada, France, USA, UK");
    // console.log("Plot Summary: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.");
    // console.log("Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham");
    // } else {
    axios.get(queryUrl).then(function (response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Movie Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot Summary: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        if (movieName === "Mr. Nobody") {
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        }

    })
        .catch(function (err) {
            console.log(err);
        })
}


function doWhat() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        let output = data.split(",");
        for (let i = 0; i < output.length; i++) {
            // return ("node liri.js " + (output[i]).split(",").join());
        }
        // console.log(output);
        mainFunction(output[0], output[1])
    })
}

mainFunction(action, value);

