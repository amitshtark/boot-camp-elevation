const SongsManager = function () {
    const _songs = {};
    const BASIC_LINK = "https://www.youtube.com/watch?v=";

    const addSong = function (name, link) {
        link = link.replace(BASIC_LINK, "");
        _songs[name] = link;
    }

    const getSong = function (name) {
        if(_songs[name])
            console.log(BASIC_LINK + _songs[name]);
        else
            console.log("we don't have this song");

    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ


