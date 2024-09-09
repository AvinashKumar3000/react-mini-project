const MOVIE_LIST = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Sci-Fi",
        rating: 8.8
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        rating: 9.3
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        genre: "Crime",
        rating: 9.2
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "Action",
        rating: 9.0
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        genre: "Crime",
        rating: 8.9
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        genre: "Drama",
        rating: 8.8
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        releaseYear: 1999,
        genre: "Drama",
        rating: 8.8
    },
    {
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        genre: "Sci-Fi",
        rating: 8.7
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        releaseYear: 2001,
        genre: "Fantasy",
        rating: 8.8
    },
    {
        title: "Star Wars: Episode IV - A New Hope",
        director: "George Lucas",
        releaseYear: 1977,
        genre: "Sci-Fi",
        rating: 8.6
    },
    {
        title: "The Silence of the Lambs",
        director: "Jonathan Demme",
        releaseYear: 1991,
        genre: "Thriller",
        rating: 8.6
    },
    {
        title: "Se7en",
        director: "David Fincher",
        releaseYear: 1995,
        genre: "Thriller",
        rating: 8.6
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: "Fantasy",
        rating: 8.9
    },
    {
        title: "The Lord of the Rings: The Two Towers",
        director: "Peter Jackson",
        releaseYear: 2002,
        genre: "Fantasy",
        rating: 8.7
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014,
        genre: "Sci-Fi",
        rating: 8.6
    },
    {
        title: "The Lion King",
        director: "Roger Allers, Rob Minkoff",
        releaseYear: 1994,
        genre: "Animation",
        rating: 8.5
    },
    {
        title: "Back to the Future",
        director: "Robert Zemeckis",
        releaseYear: 1985,
        genre: "Sci-Fi",
        rating: 8.5
    },
    {
        title: "Gladiator",
        director: "Ridley Scott",
        releaseYear: 2000,
        genre: "Action",
        rating: 8.5
    },
    {
        title: "The Green Mile",
        director: "Frank Darabont",
        releaseYear: 1999,
        genre: "Drama",
        rating: 8.6
    },
    {
        title: "Schindler's List",
        director: "Steven Spielberg",
        releaseYear: 1993,
        genre: "Biography",
        rating: 8.9
    },
    {
        title: "The Prestige",
        director: "Christopher Nolan",
        releaseYear: 2006,
        genre: "Drama",
        rating: 8.5
    },
    {
        title: "The Departed",
        director: "Martin Scorsese",
        releaseYear: 2006,
        genre: "Crime",
        rating: 8.5
    },
    {
        title: "The Pianist",
        director: "Roman Polanski",
        releaseYear: 2002,
        genre: "Biography",
        rating: 8.5
    },
    {
        title: "Whiplash",
        director: "Damien Chazelle",
        releaseYear: 2014,
        genre: "Drama",
        rating: 8.5
    },
    {
        title: "The Intouchables",
        director: "Olivier Nakache, Éric Toledano",
        releaseYear: 2011,
        genre: "Biography",
        rating: 8.5
    },
    {
        title: "The Green Book",
        director: "Peter Farrelly",
        releaseYear: 2018,
        genre: "Biography",
        rating: 8.2
    },
    {
        title: "Coco",
        director: "Lee Unkrich, Adrian Molina",
        releaseYear: 2017,
        genre: "Animation",
        rating: 8.4
    },
    {
        title: "Joker",
        director: "Todd Phillips",
        releaseYear: 2019,
        genre: "Crime",
        rating: 8.4
    },
    {
        title: "Parasite",
        director: "Bong Joon Ho",
        releaseYear: 2019,
        genre: "Thriller",
        rating: 8.6
    },
    {
        title: "Avengers: Endgame",
        director: "Anthony Russo, Joe Russo",
        releaseYear: 2019,
        genre: "Action",
        rating: 8.4
    },
    {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        releaseYear: 2001,
        genre: "Animation",
        rating: 8.6
    },
    {
        title: "Saving Private Ryan",
        director: "Steven Spielberg",
        releaseYear: 1998,
        genre: "Drama",
        rating: 8.6
    },
    {
        title: "The Shining",
        director: "Stanley Kubrick",
        releaseYear: 1980,
        genre: "Horror",
        rating: 8.4
    },
    {
        title: "WALL·E",
        director: "Andrew Stanton",
        releaseYear: 2008,
        genre: "Animation",
        rating: 8.4
    },
    {
        title: "The Wolf of Wall Street",
        director: "Martin Scorsese",
        releaseYear: 2013,
        genre: "Biography",
        rating: 8.2
    },
    {
        title: "The Social Network",
        director: "David Fincher",
        releaseYear: 2010,
        genre: "Biography",
        rating: 7.7
    },
    {
        title: "Mad Max: Fury Road",
        director: "George Miller",
        releaseYear: 2015,
        genre: "Action",
        rating: 8.1
    },
    {
        title: "Inglourious Basterds",
        director: "Quentin Tarantino",
        releaseYear: 2009,
        genre: "Adventure",
        rating: 8.3
    },
    {
        title: "The Truman Show",
        director: "Peter Weir",
        releaseYear: 1998,
        genre: "Comedy",
        rating: 8.2
    },
    {
        title: "Her",
        director: "Spike Jonze",
        releaseYear: 2013,
        genre: "Drama",
        rating: 8.0
    },
    {
        title: "12 Years a Slave",
        director: "Steve McQueen",
        releaseYear: 2013,
        genre: "Biography",
        rating: 8.1
    },
    {
        title: "Blade Runner 2049",
        director: "Denis Villeneuve",
        releaseYear: 2017,
        genre: "Sci-Fi",
        rating: 8.0
    },
    {
        title: "The Grand Budapest Hotel",
        director: "Wes Anderson",
        releaseYear: 2014,
        genre: "Adventure",
        rating: 8.1
    },
    {
        title: "La La Land",
        director: "Damien Chazelle",
        releaseYear: 2016,
        genre: "Comedy",
        rating: 8.0
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014,
        genre: "Sci-Fi",
        rating: 8.6
    },
    {
        title: "The Dark Knight Rises",
        director: "Christopher Nolan",
        releaseYear: 2012,
        genre: "Action",
        rating: 8.4
    }
]

export default MOVIE_LIST;