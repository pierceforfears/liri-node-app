LIRI Bot

LIRI is a Language Interpretation and Recognition Interface.  LIRI is a command line node app that takes in parameters and gives back data.

LIRI will search SeatGeek for concerts, Spotify for songs, and OMDB for movies.  

liri.js can accept the following commands along with a corresponding search string to find concert, song, or movie details:
* node liri.js concert-this (artist name)
* node liri.js spotify-this-song (song name)
* node liri.js movie-this (movie title)
* node liri.js do-what-it-says

Each of the commands will return the following:
“concert-this”
- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")
![liri-node-app-concert-this](https://user-images.githubusercontent.com/20098958/68816958-2cf9b700-064e-11ea-830d-fa163ff810b0.gif)

“spotify-this-song”
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
- If no song is provided then your program will default to "The Sign" by Ace of Base.
![liri-node-app-spotify-this-song](https://user-images.githubusercontent.com/20098958/68816977-3be06980-064e-11ea-966b-641cacea1865.gif)

“movie-this”
- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- If the user does not provide a search term, the program will output data for the movie 'Mr. Nobody' along with a suggestion to check it out.
![liri-node-app-movie-this](https://user-images.githubusercontent.com/20098958/68816979-3daa2d00-064e-11ea-9e27-535a2cd9fa04.gif)

“do-what-it-says”
- Accepts the LIRI command and search string indicated in random.txt and outputs data based on the information provided in the file.
![liri-node-app-do-what-it-says](https://user-images.githubusercontent.com/20098958/68816984-400c8700-064e-11ea-9932-10a309cc3a28.gif)

