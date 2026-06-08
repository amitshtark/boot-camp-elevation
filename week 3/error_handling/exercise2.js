const fs = require("fs");

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        callback(`File not found: ${filePath}`);
      } else if (err.code === "EISDIR") {
        callback(`Path is a directory, not a file: ${filePath}`);
      } else {
        callback(`Error reading file: ${err.message}`);
      }

      return;
    }

    callback(`File read successfully. Size: ${data.length} bytes`);
  });
}



readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

