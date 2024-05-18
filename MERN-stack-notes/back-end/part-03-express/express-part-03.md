# Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

`express.static(root, [options])`

```javascript
app.use(express.static('public'))
app.use('/static',express.static('public'))
```

## Custom middle ware

what exactly is middle ware.

- do something in middle
  - why to create.
  - Check for authorization.

## TODO

### callback parameters : req, res, next

- create custom middle ware
- req
- res
- next
