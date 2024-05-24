# steps to hosting

## back end hosting

### `.gitignore`

```md
/node_modules
```

### index.js

```javascript
const app = require("./app");

const PORT = 3434;
app.listen(PORT, () => {
    console.log("app listening..." + PORT);
});
```

### `app.js`

```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// router.
app.get('/movie',(req,res) => {
    res.send("movies from server...");
})

module.exports = app;
```
