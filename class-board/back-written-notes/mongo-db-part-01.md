# mongo DB basics

- Document Oriented
- Stores Data in the forms of collections and documents
- Gained Popularity in mid 2000's
- MongoDB offers flexible schema

## Technical terms in MongoDB

- `database` group of collections
- `collections` group of Documents.
- `Documents` group of data
- `data` information in JSON format
- `field` eg: category : "hollywood", here category is field
- Role of `"_id"` in mongodb document

Advantages of MongoDB

- Best of SQL and NoSQL
- Open Source
- Flexible Scheme
- Reliable

Use cases of MongoDB

- Product Data Management
- CMS
- Operational Intelligence
- Online Application

Sharding in MongoDB

- Sharding is a type of database partitioning that separates large databases into smaller, faster, more easily managed parts.
- Distributing data in multiple machines
- Horizontal scaling.

Replica Sets in MongoDB

- A replica set is a group of mongod instances that maintain the same data set.

How MongoDB stores Data

- Stores data as document
- It looks like JSON.
- But it is exactly BSON ( Binary JSON )
- why BSON : less space, Faster traversal.
- improve query speed.

Relationship types:

- one to one     : citizen to aadhar
- one to many    : country to citizen
- many to one    : fans to actor
- many to many   : student to teachers

Relationships in MongoDB:

- Embedded Data
  - Document nested inside another document
- References
  - Refer one document with other document.

Embedded data example:

```json
{
    "_id":"asdfa213232342",
    "username": "123xyz",
    "contact": {
        "phone": "123-456-7898",
        "email": "xyz@example.com" 
    }
}
```

Reference data example

```json
// user document
{
    "_id":"main213232342",
    "username": "123xyz",
    
}
// contact document
```json
{
    "_id": "sa1234asdf",
    "user_id":"main213232342",
    "phone": "123-456-7898",
    "email": "xyz@example.com" 
}
```

LINKS:

- <https://www.mongodb.com/>  
  - `start free` or `try free`
  - sign up with your google account

Once inside mongodb cloud

- create cluster in `DEPLOYMENT >  Database`
- create database user in `SECURITY > Database access`
- `mongodb+srv://admin:<password>@sample-cluster0.r8ppmuh.mongodb.net/?retryWrites=true&w=majority&appName=sample-Cluster0`
- update network access
  - allow access from anywhere
Official MongoDB youtube.

- <https://www.youtube.com/watch?v=xrc7dIO_tXk&list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf>
