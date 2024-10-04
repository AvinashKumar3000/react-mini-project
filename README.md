https://meet.google.com/tkz-swxq-ajq

## sample sample mini project...

- [Go to mini project link...](https://github.com/AvinashKumar3000/mini-project)



# All important short cut links

- [All react reference links](MERN-stack-notes/front-end/PART-04-react/react-part-01.md)
- [Design full functional with good design - My mini application](MERN-stack-notes/front-end/PART-05-react-task/qn-02-learn-with-apps/My-mini-application/part-01.md)

## My JAVA full stack projects github link

- [java full stack my github link](https://github.com/avicreationstudio/java-fullstacks)

## ML and DS reference links

- [krish naik github link](https://github.com/krishnaik06)
- [krish naik youtube channel](https://www.youtube.com/@krishnaik06/playlists)


### `index.js`

```js
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🚀 JSON Server is running 🏃‍➡️🏃‍➡️🏃‍➡️`)
    console.log(`🔗 http://localhost:${PORT}`);
});```
