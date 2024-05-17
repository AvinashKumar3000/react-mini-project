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
// package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// custom files imports
const studentRouter = require("./routes/student-route");

// mongodb connection 
// TODO: enter your database name below 👇
const DB_NAME = "afternoon";
const URI = "mongodb://127.0.0.1:27017/" + DB_NAME;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
})

// declaration
const app = express();
// middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

// routers
// TODO: add your router below 👇
app.use('/student', studentRouter);



// exports
module.exports = app;
```

## `routes/student-router.js`

```javascript
const express = require('express');
const { getAllStudentDetails, logic01, logic02 } = require('../controller/student-controller');
//                👆            👆       👆    <--  these are imported from here 👆

const studentRouter = express.Router();
// CRUD
// Create - POST
// Read   - GET
// Update - PUT
// Delete - DELETE

// GET
studentRouter.get('/', getAllStudentDetails); // 👈 just add your controllers logic here as you wish
// POST
// PUT
// DELETE

module.exports = studentRouter;
```

## `controllers/student-controller.js`

```javascript
const StudentModel = require("../model/student-model");

// Add your controller logics as you wish below. 👇
//          these are mandatory      👇  👇
async function getAllStudentDetails(req, res) {
    const students = await StudentModel.find({});
    // 💀 don't change the JSON structure below ⚠️ 
    res.json({
        status: true,
        msg: "data retrieved successfully",
        data: students   // 👈 your data that need to send back to client 🧑‍💻
        // data: null   👈 give as shown here. if you are sending nothn
    });
}

function logic01() {

}
function logic02() {

}
module.exports = { getAllStudentDetails, logic01, logic02 };
```

### `models\student-model.js`

```javascript
const mongoose = require('mongoose');

// TODO: change your Schema name 👇
const studentSchema = new mongoose.Schema({
    // TODO: insert your schema below 👇
    // reference : https://github.com/AvinashKumar3000/react-mini-project/blob/master/class-board/back-end-written-notes/mongoose/mongoose-part-02.md#example
    name: String,
    rollNo: Number,
    batchNo: Number,
    gender: String,
    age: Number,
    phoneNo: String,
    mailId: String
});

//[model-name]👇    [db collection name]👇          👇your schema here
const StudentModel = mongoose.model("student", studentSchema);
// export your model here 👇
module.exports = StudentModel;
```
