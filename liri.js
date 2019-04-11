require("dotenv").config();

var keys = require("./keys.js");

var spotifyNPM = require("node-spotify-api");

var axios = require("axios");

var moment = require("moment");

var dotEnv = require("dotenv");

var spotify = new Spotify(keys.spotify);

var getArtistName = function(artist){
    return artist.name
}

var getSpotify = function(songName){
    if(songName === undefined){
        songName = "Blue";
    }

    spotify.search(

        {
            type: "track",
            query: songName
        },
        function(err,data){
            if(err){
                console.log(err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                 console.log(i);
                 console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                 console.log("song name: " + songs[i].name);
                 console.log("preview song: " + songs[i].preview_url);
                 console.log("album: " + songs[i].album.name);
                 console.log("-----------------------------------");
            }

        }

    )
}

var startApp = function(data, input){

    switch(data){
        case "spotify-this-song":
            getSpotify(input);
            break;
    }

}

startApp(process.argv[2], process.argv.slice(3).join(" "));