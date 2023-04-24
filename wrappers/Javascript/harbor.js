const https = require("https");
const fs = require("fs");

const url = "https://raw.githubusercontent.com/RealTriassic/Harbor/main/harbor.sh";
const destination = "harbor.sh";

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download file: ${response.statusMessage}`);
    return;
  }

  response.pipe(fs.createWriteStream(destination))
    .on("finish", () => {
      // Set executable permission on the downloaded file
      fs.chmodSync(destination, "755");

      // Run the downloaded file
      const childProcess = require("child_process");
      childProcess.execSync(`sh ${destination}`, { stdio: "inherit" });
    });
})
.on("error", (error) => {
  console.error(`Error downloading file: ${error}`);
});