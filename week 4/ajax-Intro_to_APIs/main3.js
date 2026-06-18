const printData = function (data) {
    data.items.forEach(item => {
        const info = item.volumeInfo;

        console.log(info.title);
        console.log(info.authors);
        console.log(info.industryIdentifiers);
    });
}

const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: printData
        ,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}