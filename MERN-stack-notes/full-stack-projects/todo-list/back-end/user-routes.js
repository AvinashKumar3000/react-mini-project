// 🔖 imports 
const express = require('express');
const mongoose = require('mongoose');

// ----------------------------------------------------------------------------------------------
//           YOUR MONGOOSE SCHEMA AND MODEL CODE
// ----------------------------------------------------------------------------------------------

// 🔖 Schema code  
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// 🔖 Mongoose provides a comprehensive set of validation options
// type     : It is used to determine the Type.
// required : It will make sure, while create new data, this field is mandatory.
// unique   : it will make sure, if any new data, came, this field should be unique.

// 🔖 create model out of Schema above.
const UserModel = mongoose.model("user", userSchema);

// ----------------------------------------------------------------------------------------------
//           YOUR ROUTER CODE
// ----------------------------------------------------------------------------------------------
// ⚠️ ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ ⚠️
// ⚠️ RULES TO FOLLOW WHILE WRITING ROUTER CODE ⚠️
// 1️⃣ your arrow function should start with [ async ] 
// 2️⃣ your database model code always prefix with [ await ]
//     NOTE: Every database model code should prefix with [ await ]
//     Example:   await UserModel.find({})
//     Example:   await UserModel.deleteOne({})
// 3️⃣ It is mandatory to use try catch.
//     We may don't know when database will through error.
//     In all code it is better to write database code inside try catch block.
// ⚠️ ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ ⚠️

// 🔖 your router code goes here 👇
const userRouter = express.Router();
// 📦 CRUD : C -> CREATE
// 🪵 Below code is to create new user
//  ✨ 🤵 : SIGN-UP  ✨
userRouter.post('/sign-up', async (req, res) => {
    try {
        const payload = req.body;
        const obj = {
            username: payload.username,
            password: payload.password
        };
        const newUser = await UserModel.create(obj);
        // const newUser = await UserModel.create(payload);
        // we don't suggest passing payload directly. payload may contain any data.
        res.json({
            status: true,
            msg: 'user created successfully.',
            data: newUser
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'error',
            data: error
        });
    }
});

// -----------------------------------------------------------------------------------------------
// QUESTION  : Why can't we use GET in below case to apply SIGN-IN operation.
// ANSWER    : When implementing the SIGN-IN logic in your back-end project using 
//             NodeJS, Express, and 
//             Mongoose, the best HTTP request method to use is ✨ POST ✨. Here's why:
//    Security:  The POST method is more secure for sending sensitive information like usernames 
//               and passwords because the data is sent in the body of the request, not in
//               the URL. This helps to prevent credentials from being exposed in server logs, 
//               browser history, or network monitoring tools.
//    Semantics: According to HTTP/1.1 specification, the POST method is used for actions
//               that result in the creation of a new resource or submission of 
//               data to be processed to a specified resource. 
//               Since signing in involves sending user credentials to be processed 
//               and authenticated, POST is semantically appropriate.
// REFERENCE : https://stackoverflow.com/questions/978061/http-get-with-request-body
//             So, yes, you can send a body with GET, and no, it is never useful to do so.
// -----------------------------------------------------------------------------------------------

// 📦 CRUD : R -> READ
// 🪵 Below code is to do authentication process
//     get information if username and password is correct or wrong.
//  ✨ 🤵 : SIGN-IN  ✨
userRouter.post('/sign-in', async (req, res) => {
    try {
        const payload = req.body;
        const condition = {
            username: payload.username,
            password: payload.password
        };
        const result = await UserModel.findOne(condition);
        const status = result !== null;
        res.json({
            status: status,
            msg: status ? 'success' : 'fail',
            data: result
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'error',
            data: error
        });
    }
});

// 📦 CRUD : U -> UPDATE
// 🪵 below code for change password.
//  ✨ 🤵 : CHANGE-PASSWORD  ✨
userRouter.put('/', async (req, res) => {
    try {
        const payload = req.body;
        const condition = {
            username: payload.username,
            password: payload.password
        };
        const newObj = { password: payload.newPassword };
        const result = await UserModel.updateOne(condition, newObj);
        /**     👆  --> desc about how you will get result in above code.
         * Below is the data format which you will get as a result
          {
            "acknowledged": true,
            "modifiedCount": 1,   👈 <--- only if this is 1, it means data is updated.
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
          }
        */
        const status = result.modifiedCount === 1;
        res.json({
            status: status,
            msg: status ? "success" : "fail",
            data: result
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'error',
            data: error
        });
    }
});

// 📦 CRUD : D -> DELETE
// 🪵 below code is to remove account
userRouter.delete('/', async (req, res) => {
    try {
        const payload = req.body;
        const condition = {
            username: payload.username,
            password: payload.password
        };
        const result = await UserModel.deleteOne(condition);
        /**     👆  --> desc about how you will get result in above code.
         * Below is the data format which you will get as a result
            {
               "acknowledged": true,
               "deletedCount": 1
            }
        */
        const status = result.deletedCount === 1;
        res.json({
            status: status,
            msg: status ? "success" : "fail",
            data: result
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'error',
            data: error
        });
    }
});

// 🔖 in user-route.js always export userRouter alone.
module.exports = userRouter;