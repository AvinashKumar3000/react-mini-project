# Simple version of back end code

## pre requirement

- basic theory concepts of back-end
- starting from node.js, express, mongodb, mongoose

## project setup

1. create your project folder. eg: `my-app-back-end`
2. use below commands
3. `npm init`, then press enter until `package.json` file got created.
3. `npm install nodemon --save-dev`
4. `npm install express morgan cors body-parser mongoose`
1. update your `package.json` with code given below.

```json
     "scripts": {
        "start": "nodemon index.js",
     }
```

## create and apply as shown below

### `index.js`

```javascript
// 🔖 always import app from app.js
// 💀 ⚠️ don't use : const express = require('express');
const app = require('./app');

// 🔖 change the PORT no if you wish.
const PORT = 3434;
app.listen(PORT, () => {
    console.log("my app is listening in port no : " + PORT);
});
```

### `app.js`

```javascript
// 🔖 package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// 🔖 mongodb connection 
const DB_NAME = "your-db-name";   //  👈⬅️⬅️⬅️⬅️ TODO : update your data base name
const URI = "mongodb://127.0.0.1:27017/" + DB_NAME;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
})

// 🔖 declaration
const app = express();
// 🔖 middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

// 🔖 routers
// TODO: add your routers below 👇
// eg: 🧑‍💻 ▶️ app.use('/like', likeRouter);


// 🔖 exports
module.exports = app;
```

### `like-router.js`

```javascript
// ----------------------------------------------------------------------------------------------
// 🔖 :  means that should not be missed.  
// ----------------------------------------------------------------------------------------------


// 🔖 imports 
const express = require('express');
const mongoose = require('mongoose');


// ----------------------------------------------------------------------------------------------
//           YOUR MONGOOSE SCHEMA AND MODEL CODE
// ----------------------------------------------------------------------------------------------

// 🔖 Schema code
// 🤔💭 thinks to remember
//       use new keyword       Schema 'S' is capital
//                  👇         👇      
const likeSchema = new mongoose.Schema({
    count: Number,
    by: String
});
// 🔖 create model out of Schema above.
// 🤔💭 thinks to remember
// 1. mongoose.model(arg1, arg2)   👈 here arg1 is mongodb collection name
//                                 👈  here arg2 is your Schema created above. eg: likeSchema
// 2. First letter is capital
//    👇                  
const LikeModel = mongoose.model("like", likeSchema);


// ----------------------------------------------------------------------------------------------
//           YOUR ROUTER CODE
// ----------------------------------------------------------------------------------------------
// 🔖 create your router as shown below.
const likeRouter = express.Router();
// 🔖 your router goes here 👇

// ⚠️ RULES TO FOLLOW WHILE WRITING ROUTER CODE ⚠️
// 1️⃣ your arrow function should start with [ async ] 
// 2️⃣ your database model code always prefix with [ await ]
//     NOTE: Every database model code should prefix with [ await ]
//     Example:   await LikeModel.find({})
//     Example:   await LikeModel.deleteOne({})

// 🪵 below code is to update the count in document.
likeRouter.put('/', async (req, res) => {
    //    payload is just a name for meaningful code.
    //     👇 use below name. payload refers to data coming from client.
    const payload = req.body;
    // 🔖 Every data base operation will return something for sure.
    //    Make sure to check it. Eg. console.log(data);
    //    By this way you can know, what is being stored in variable 'data' 
    const data = await LikeModel.updateOne({
        by: payload.by          //   updateOne, has 2 args.  1. condition
    }, {                        //                           2. what is update
        count: payload.count
    });
    // 🔖 Finally what to send as response.
    res.json({
        status: true,
        msg: 'update',
        data: data
    });
});

// 🪵 below code is to create new `document` in `collection`
likeRouter.post('/', async (req, res) => {
    const payload = req.body;
    const data = await LikeModel.create(payload);
    res.json({
        status: true,
        msg: 'create',
        data: data
    });
});

// 🔖 in like-route.js always export likeRouter alone.
module.exports = likeRouter;
```
