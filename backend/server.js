const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads/videos')); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


app.post('/upload-video', upload.single('video'), (req, res) => {
  // Logic to save video file and respond with success/error
  res.status(200).send('Video uploaded successfully');
});


app.post('/add-subtitles', (req, res) => {
  const { videoId, subtitles } = req.body;
  
  res.status(200).send('Subtitles added successfully');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
