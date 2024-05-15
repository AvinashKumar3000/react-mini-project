# simple routing code

`index.js`

```javascript
const app = require('./app');

const PORT = 3434;
app.listen(PORT, () => {
    console.log("my app is listening in PORT no : " + PORT);
});
```

`app.js`

```javascript
// import
const express = require("express");
const logger = require('morgan');

const movieRouter = require("./routes/movie");

// declaration
const app = express();

// middle ware
app.use(logger("tiny"));

// routing
app.use('/movie', movieRouter);

// export
module.exports = app;

```

`routes\movie.js`

```javascript
const express = require('express');

const movieRouter = express.Router();

// movie routing
movieRouter.get('/', (req, res) => {
    res.send("movie from server");
});

movieRouter.get('/all', (req, res) => {
    res.send("all movies are here");
});

module.exports = movieRouter;
```
