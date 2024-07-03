# project questions in interview:

## NON TECHNICAL :

- Change your project name differently. like: spotify => Isai app.
- short description: what your application can do.

## TECHNICAL :

- start with back end
- then go to front end

### BACK END

your mongodb structure.

- your database name: isai-db
- your collections list: users, songs

      
your schema used in mongoose.Schema

- - fields used in each collections:
  - users:
    - usernanme  String
    - password   String
    - playlist
         [ Object ]
  - songs :
    - title : string
    - artist : [ String ]
    - geners: [ String ]

routes used in back end :

   app.use('/user', userRouter );
         post : /sign-in
         post : /sign-up
         get  : /playlist/:username 
    app.use('/songs', songRouter);
        get : /all-song

      
