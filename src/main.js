const express = require("express")
const colors = require("colors")
const path = require('path')
const fs = require('fs')
const app = express()

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`.bgMagenta)
})

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})

// Project routes

app.get('/simon', (req, res) => {
    res.render(path.join('projects', 'simon' , 'index.html'))
})

app.get('/audio/:audio', async (req, res) => {
    const audio = req.params.audio
    if (audio == 'green.mp3' || audio == 'blue.mp3' || audio == 'yellow.mp3' || audio == 'red.mp3') {
        res.sendFile(path.join(__dirname, 'media', 'audio', audio))
    } else {
        res.sendStatus(404)
    }
})

// Videos

function videoProvide (res, video, range) {
    if (!range) {
        res.status(400).send("Requires Range header");
    }

    const videoPath = path.join(__dirname, 'media', video);
    const videoSize = fs.statSync(videoPath).size;
  
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
  
    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);
}

app.get("/video/:video", function (req, res) {
    const video = req.params.video
    const range = req.headers.range;
    if (video == 'gym-app') {
        videoProvide(res, 'gym-app.mp4', range)
    } else if (video == 'simon') {
        videoProvide(res, 'simon.mp4', range)
    } else {
        res.sendStatus(404)
    }

  });

//_______//


app.use(express.static(path.join(__dirname, '..', 'public')))