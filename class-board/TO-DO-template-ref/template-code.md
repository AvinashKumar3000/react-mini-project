# TEMPLATE CODES

## Pre requisite

Make sure below packages are installed.

- `npm install express morgan cors body-parser mongoose`
- If below 👇 packages are not installed. then use 👆 command to install them.
- express
- morgan
- cors
- body-parser
- mongoose

## `index.js`

```javascript
const app = require('./app');

const PORT = 3434;
app.listen(PORT, () => {
    console.log("my app is listening in port no : " + PORT);
})
```

## `app.js`

```javascript
const express = require('express');
const { getAllSongs, addAllSongs, addSong, updateSong, deleteSong } = require('../controllers/song-controller');

const songRouter = express.Router();

// CRUD
// Read   - GET
songRouter.get('/', getAllSongs);
// Create - POST
songRouter.post('/', addSong);
songRouter.post('/all', addAllSongs);
// Update - PUT
songRouter.put('/', updateSong);
// Delete - DELETE
songRouter.delete('/:id', deleteSong);


module.exports = songRouter;

```

## `routes/song-router.js`

```javascript
const express = require('express');
const { getAllSongs, addAllSongs, addSong, updateSong, deleteSong } = require('../controllers/song-controller');

const songRouter = express.Router();

// CRUD
// Read   - GET
songRouter.get('/', getAllSongs);
// Create - POST
songRouter.post('/', addSong);
songRouter.post('/all', addAllSongs);
// Update - PUT
songRouter.put('/', updateSong);
// Delete - DELETE
songRouter.delete('/:id', deleteSong);


module.exports = songRouter;

```

## `controllers/song-controller.js`

```javascript
const SongModel = require("../models/song-model");

// Add your controller logics as you wish below. 👇
//          these are mandatory      👇  👇
async function getAllSongs(req, res) {
    const songs = await SongModel.find({});
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "data retrieved successfully",
        data: songs   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

async function addAllSongs(req, res) {
    const payload = req.body;
    for (let i = 0; i < payload.length; i++) {
        await SongModel.create(payload[i]);
    }
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "data added successfully",
        data: null   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

async function addSong(req, res) {
    const payload = req.body;
    const newSong = await SongModel.create(payload);
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "data added successfully",
        data: newSong   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

async function addSong(req, res) {
    const payload = req.body;
    const newSong = await SongModel.create(payload);
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "data added successfully",
        data: newSong   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

async function updateSong(req, res) {
    const payload = req.body;
    const updatedSong = await SongModel.updateOne({
        _id: payload._id
    }, payload);
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "updated song successfully",
        data: updatedSong   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

async function deleteSong(req, res) {
    const songId = req.params.id;
    await SongModel.deleteOne({
        _id: songId
    });
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "deleted song successfully",
        data: null   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

module.exports = { getAllSongs, addAllSongs, addSong, updateSong, deleteSong };
```

### `models\song-model.js`

```javascript
const mongoose = require('mongoose');

// TODO: change your Schema name 👇
const songSchema = new mongoose.Schema({
    // TODO: insert your schema below 👇
    // reference : https://github.com/AvinashKumar3000/react-mini-project/blob/master/class-board/back-end-written-notes/mongoose/mongoose-part-02.md#example
    title: String,
    artist: String,
    album: String,
    release_year: Number,
    genre: String,
    duration: String,
    writers: [String],
    producers: [String],
});

//[model-name]👇    [db collection name]👇          👇your schema here
const SongModel = mongoose.model("song", songSchema);
// export your model here 👇
module.exports = SongModel;
```
