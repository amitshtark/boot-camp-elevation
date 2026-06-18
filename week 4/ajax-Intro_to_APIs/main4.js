const API_KEY = "yFf28CGxHUwSsyNGAJDa8x1vhOSEdHOb";

const fetchGif = function () {
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cats&limit=1`,
        success: function (response) {
            console.log(response);

            const firstGif = response.data[0];
            const gifUrl = firstGif.embed_url;

            $("#gif-container").html(`
                <iframe src="${gifUrl}" width="480" height="360"></iframe>
            `);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};

fetchGif();