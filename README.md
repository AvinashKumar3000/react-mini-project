
# ALL IMPORTANT LINKS

## firestore - project link

[A simple application to store the anime you like](MERN-stack-notes/full-stack-projects/anime-list-firestore/part-01.md)

## simple json -server api github link

<https://github.com/avicreationstudio/JSON-server-API>

## sample mini project

- [Go to mini project link...](https://github.com/AvinashKumar3000/mini-project)

# All important study material links

- [All react reference links](MERN-stack-notes/front-end/PART-04-react/react-part-01.md)
- [Design full functional with good design - My mini application](MERN-stack-notes/front-end/PART-05-react-task/qn-02-learn-with-apps/My-mini-application/part-01.md)

## My JAVA full stack projects github link

- [java full stack my github link](https://github.com/avicreationstudio/java-fullstacks)

## ML and DS reference links

- [krish naik github link](https://github.com/krishnaik06)
- [krish naik youtube channel](https://www.youtube.com/@krishnaik06/playlists)

### `package.json`

```json
{
  "name": "json-server-api",
  "version": "1.0.0",
  "description": "A simple json server application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/avicreationstudio/JSON-server-API.git"
  },
  "keywords": [
    "json-server"
  ],
  "author": "Avinash Kumar 3000",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/avicreationstudio/JSON-server-API/issues"
  },
  "homepage": "https://github.com/avicreationstudio/JSON-server-API#readme",
  "dependencies": {
    "cors": "^2.8.5",
    "json-server": "^0.16.3",
    "json-server-api": "file:",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "1.18.4"
  }
}

```


















- You are given two positive integers `n` and `k`. There are `n` children numbered from `0` to `n - 1` standing in a queue in order from left to right.
- Initially, child 0 holds a ball and the direction of passing the ball is towards the right direction. After each second, the child holding the ball passes it to the child next to them. Once the ball reaches either end of the line, i.e. child 0 or child `n - 1`, the direction of passing is **reversed**.
- Return the number of the child who receives the ball after `k` seconds.





