# Books

All endpoints for books

<aside class="notice">
Each of the requests require a token.
</aside>

## Retrieve all books

```json
{
  "status": 200,
  "books": [
    {
      "title": "Astérix le gaulois",
      "user_id": 6,
      "type": "BD",
      "id": 9,
      "image_url": "/media/books_cover/asterixlegaulois.jpg",
      "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
      "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
      "pub_type": "p",
      "created_at": "2019-03-18T16:24:45.000Z",
      "grade": 0,
      "author": {
        "username": "Francois",
        "id": 6,
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "title": "Tintin au congo",
      "user_id": 1,
      "type": "Aventure",
      "id": 15,
      "image_url": "/media/books_cover/tintin-au-congo.jpg",
      "pdf_url": "/media/books/tintin-au-congo.pdf",
      "description": "C'est l'histoire de tintin au congo",
      "pub_type": "p",
      "created_at": "2019-03-19T00:08:00.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin est le Lotus bleu",
      "user_id": 1,
      "type": "Aventure",
      "id": 16,
      "image_url": "/media/books_cover/Tintin est le Lotus bleu.jpg",
      "pdf_url": "/media/books/Tintin est le Lotus bleu.pdf",
      "description": "près avoir sauvé le Maharadjah de Rawhajpoutalah de la folie, Tintin est l'hôte d'honneur de celui-ci. Mais durant ses loisirs sur son poste émetteur récepteur",
      "pub_type": "p",
      "created_at": "2019-03-19T16:04:08.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Kid Paddle",
      "user_id": 1,
      "type": "Action",
      "id": 17,
      "image_url": "/media/books_cover/KidPaddle.jpg",
      "pdf_url": "/media/books/KidPaddle.pdf",
      "description": "Cette série présente les aventures d'un jeune garçon nommé Kid Paddle, un gamin d'environ 9 ans fan de jeux vidéo...",
      "pub_type": "p",
      "created_at": "2019-03-19T16:05:24.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin en Amérique",
      "user_id": 1,
      "type": "Aventure",
      "id": 18,
      "image_url": "/media/books_cover/Tintin en Amérique.jpg",
      "pdf_url": "/media/books/Tintin en Amérique.pdf",
      "description": "C'est l'histoire de tintin en Amérique",
      "pub_type": "p",
      "created_at": "2019-03-19T17:00:28.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "CV Lucas",
      "user_id": 1,
      "type": "CV",
      "id": 20,
      "image_url": "/media/books_cover/CV Lucas.jpg",
      "pdf_url": "/media/books/CV Lucas.pdf",
      "description": "Cv of Lucas",
      "pub_type": "p",
      "created_at": "2019-03-19T17:11:26.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```
 
This endpoint returns all books.

### HTTP REQUEST

`GET /v1/books`

## Retrieve a book by its id

> Here we retrieve the book with id `4`

 ```json
{
  "status": 200,
  "books": {
    "title": "Astérix le gaulois",
    "user_id": 6,
    "type": "BD",
    "id": 9,
    "image_url": "/media/books_cover/asterixlegaulois.jpg",
    "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
    "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
    "pub_type": "p",
    "created_at": "2019-03-18T16:24:45.000Z",
    "grade": 0,
    "author": {
      "username": "Francois",
      "id": 6,
      "first_name": "monPrénom",
      "last_name": "ABCD"
    }
  },
  "success": true,
  "msg": "Book retrieved successfully"
}
 ```

This endpoint returns the book with the id specified in the url.

### HTTP REQUEST

`GET /v1/books/:idOfBook`
 
## Retrieve all books by type

> Here we retrieve all books with `Comédie` as a type

```json
{
  "status": 200,
  "books": [
    {
      "title": "Tintin au congo",
      "user_id": 1,
      "type": "Aventure",
      "id": 15,
      "image_url": "/media/books_cover/tintin-au-congo.jpg",
      "pdf_url": "/media/books/tintin-au-congo.pdf",
      "description": "C'est l'histoire de tintin au congo",
      "pub_type": "p",
      "created_at": "2019-03-19T00:08:00.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin est le Lotus bleu",
      "user_id": 1,
      "type": "Aventure",
      "id": 16,
      "image_url": "/media/books_cover/Tintin est le Lotus bleu.jpg",
      "pdf_url": "/media/books/Tintin est le Lotus bleu.pdf",
      "description": "près avoir sauvé le Maharadjah de Rawhajpoutalah de la folie, Tintin est l'hôte d'honneur de celui-ci. Mais durant ses loisirs sur son poste émetteur récepteur",
      "pub_type": "p",
      "created_at": "2019-03-19T16:04:08.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin en Amérique",
      "user_id": 1,
      "type": "Aventure",
      "id": 18,
      "image_url": "/media/books_cover/Tintin en Amérique.jpg",
      "pdf_url": "/media/books/Tintin en Amérique.pdf",
      "description": "C'est l'histoire de tintin en Amérique",
      "pub_type": "p",
      "created_at": "2019-03-19T17:00:28.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Astérix et les normands",
      "user_id": 1,
      "type": "Aventure",
      "id": 19,
      "image_url": "/media/books_cover/Astérix et les normands.jpg",
      "pdf_url": "/media/books/Astérix et les normands.pdf",
      "description": "L'histoire d'Astérix chez les normands",
      "pub_type": "p",
      "created_at": "2019-03-19T17:10:43.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```
  
This endpoint returns all books matching the type specified in the url.
  
### HTTP REQUEST
  
`GET /v1/books/type/:type`

## Retrieve all books by page

> Here we retrieve all books from the first page

```json
{
  "status": 200,
  "page": 1,
  "totalBooks": 7,
  "totalPages": 1,
  "books": [
    {
      "title": "Astérix le gaulois",
      "user_id": 6,
      "type": "BD",
      "id": 9,
      "image_url": "/media/books_cover/asterixlegaulois.jpg",
      "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
      "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
      "pub_type": "p",
      "created_at": "2019-03-18T16:24:45.000Z",
      "grade": 0,
      "author": {
        "username": "Francois",
        "id": 6,
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "title": "Tintin au congo",
      "user_id": 1,
      "type": "Aventure",
      "id": 15,
      "image_url": "/media/books_cover/tintin-au-congo.jpg",
      "pdf_url": "/media/books/tintin-au-congo.pdf",
      "description": "C'est l'histoire de tintin au congo",
      "pub_type": "p",
      "created_at": "2019-03-19T00:08:00.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin est le Lotus bleu",
      "user_id": 1,
      "type": "Aventure",
      "id": 16,
      "image_url": "/media/books_cover/Tintin est le Lotus bleu.jpg",
      "pdf_url": "/media/books/Tintin est le Lotus bleu.pdf",
      "description": "près avoir sauvé le Maharadjah de Rawhajpoutalah de la folie, Tintin est l'hôte d'honneur de celui-ci. Mais durant ses loisirs sur son poste émetteur récepteur",
      "pub_type": "p",
      "created_at": "2019-03-19T16:04:08.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Kid Paddle",
      "user_id": 1,
      "type": "Action",
      "id": 17,
      "image_url": "/media/books_cover/KidPaddle.jpg",
      "pdf_url": "/media/books/KidPaddle.pdf",
      "description": "Cette série présente les aventures d'un jeune garçon nommé Kid Paddle, un gamin d'environ 9 ans fan de jeux vidéo...",
      "pub_type": "p",
      "created_at": "2019-03-19T16:05:24.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin en Amérique",
      "user_id": 1,
      "type": "Aventure",
      "id": 18,
      "image_url": "/media/books_cover/Tintin en Amérique.jpg",
      "pdf_url": "/media/books/Tintin en Amérique.pdf",
      "description": "C'est l'histoire de tintin en Amérique",
      "pub_type": "p",
      "created_at": "2019-03-19T17:00:28.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Astérix et les normands",
      "user_id": 1,
      "type": "Aventure",
      "id": 19,
      "image_url": "/media/books_cover/Astérix et les normands.jpg",
      "pdf_url": "/media/books/Astérix et les normands.pdf",
      "description": "L'histoire d'Astérix chez les normands",
      "pub_type": "p",
      "created_at": "2019-03-19T17:10:43.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "CV Lucas",
      "user_id": 1,
      "type": "CV",
      "id": 20,
      "image_url": "/media/books_cover/CV Lucas.jpg",
      "pdf_url": "/media/books/CV Lucas.pdf",
      "description": "Cv of Lucas",
      "pub_type": "p",
      "created_at": "2019-03-19T17:11:26.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```
  
This endpoint returns all books for the page given in the URL parameter.

<aside class="notice">
A page consists of 20 books.
</aside>
  
### HTTP REQUEST
  
`GET /v1/books/page/:page`

## Get all my public books

```json
{
  "status": 200,
  "books": [
    {
      "title": "Astérix le gaulois",
      "user_id": 6,
      "type": "BD",
      "id": 9,
      "image_url": "/media/books_cover/asterixlegaulois.jpg",
      "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
      "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
      "pub_type": "p",
      "created_at": "2019-03-18T16:24:45.000Z",
      "grade": 0,
      "author": {
        "username": "Francois",
        "id": 6,
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```

This endpoint retrieve all the public books that you uploaded.

### HTTP REQUEST

`GET /v1/books/me/public`

## Get all my private books

```json
{
  "status": 200,
  "books": [
    {
      "title": "Astérix le gaulois",
      "user_id": 6,
      "type": "BD",
      "id": 9,
      "image_url": "/media/books_cover/asterixlegaulois.jpg",
      "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
      "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
      "pub_type": "v",
      "created_at": "2019-03-18T16:24:45.000Z",
      "grade": 0,
      "author": {
        "username": "Francois",
        "id": 6,
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```

This endpoint retrieve all the private books that you uploaded.

### HTTP REQUEST

`GET /v1/books/me/private`
 
## Post a new book

```json
{
  "status": 200,
  "books": {
    "id": 1,
    "type": "Comédie",
    "title": "Titre",
    "user_id": 8,
    "pdf_url": "http://monPdf",
    "image_url": "http://google.com",
    "description": "description",
    "pub_type": "v",
    "created_at":"2018-12-02T19:44:15.000Z"
  },
  "msg": "Books successfully added.",
  "success": true
}
```
    
This endpoint adds a new book.
    
### HTTP REQUEST
    
`POST /v1/books/`

### BODY PARAMETERS
        
Parameter | Description
--------- | -----------
title | Book's title.
type | Book's type.
image_url | Book's cover image url.
pdf_url | Book's pdf url.
description | Book's description
pub_type | "p" for public, "v" for private

## Delete a book

```json
{
  "status": 200,
  "msg": "Book successfully deleted.",
  "success": true
}
```
    
This endpoint deletes the book with the id specified in the URL.
    
### HTTP REQUEST
    
`DELETE /v1/books/:from/:to`

## Get all books between a time range

> Here we retrieve all books between `11/01/2018` and `12/03/2018`

```json
{
  "status": 200,
  "books": [
    {
      "title": "Tintin au congo",
      "user_id": 1,
      "type": "Aventure",
      "id": 15,
      "image_url": "/media/books_cover/tintin-au-congo.jpg",
      "pdf_url": "/media/books/tintin-au-congo.pdf",
      "description": "C'est l'histoire de tintin au congo",
      "pub_type": "p",
      "created_at": "2019-03-19T00:08:00.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin est le Lotus bleu",
      "user_id": 1,
      "type": "Aventure",
      "id": 16,
      "image_url": "/media/books_cover/Tintin est le Lotus bleu.jpg",
      "pdf_url": "/media/books/Tintin est le Lotus bleu.pdf",
      "description": "près avoir sauvé le Maharadjah de Rawhajpoutalah de la folie, Tintin est l'hôte d'honneur de celui-ci. Mais durant ses loisirs sur son poste émetteur récepteur",
      "pub_type": "p",
      "created_at": "2019-03-19T16:04:08.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Kid Paddle",
      "user_id": 1,
      "type": "Action",
      "id": 17,
      "image_url": "/media/books_cover/KidPaddle.jpg",
      "pdf_url": "/media/books/KidPaddle.pdf",
      "description": "Cette série présente les aventures d'un jeune garçon nommé Kid Paddle, un gamin d'environ 9 ans fan de jeux vidéo...",
      "pub_type": "p",
      "created_at": "2019-03-19T16:05:24.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin en Amérique",
      "user_id": 1,
      "type": "Aventure",
      "id": 18,
      "image_url": "/media/books_cover/Tintin en Amérique.jpg",
      "pdf_url": "/media/books/Tintin en Amérique.pdf",
      "description": "C'est l'histoire de tintin en Amérique",
      "pub_type": "p",
      "created_at": "2019-03-19T17:00:28.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```

This endpoint returns all books between the time range specified.
    
### HTTP REQUEST
    
`GET /v1/books/timerange`

<aside class="warning">
The date format is MM/DD/YYYY
</aside>

## Search books

> Here we are searching for `Aventure` in "type" and `Comédie` as type and `League` as author, for the first page

```json
{
  "status": 200,
  "totalPages": 1,
  "totalBooks": 4,
  "books": [
    {
      "title": "Tintin au congo",
      "user_id": 1,
      "type": "Aventure",
      "id": 15,
      "image_url": "/media/books_cover/tintin-au-congo.jpg",
      "pdf_url": "/media/books/tintin-au-congo.pdf",
      "description": "C'est l'histoire de tintin au congo",
      "pub_type": "p",
      "created_at": "2019-03-19T00:08:00.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin est le Lotus bleu",
      "user_id": 1,
      "type": "Aventure",
      "id": 16,
      "image_url": "/media/books_cover/Tintin est le Lotus bleu.jpg",
      "pdf_url": "/media/books/Tintin est le Lotus bleu.pdf",
      "description": "près avoir sauvé le Maharadjah de Rawhajpoutalah de la folie, Tintin est l'hôte d'honneur de celui-ci. Mais durant ses loisirs sur son poste émetteur récepteur",
      "pub_type": "p",
      "created_at": "2019-03-19T16:04:08.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Tintin en Amérique",
      "user_id": 1,
      "type": "Aventure",
      "id": 18,
      "image_url": "/media/books_cover/Tintin en Amérique.jpg",
      "pdf_url": "/media/books/Tintin en Amérique.pdf",
      "description": "C'est l'histoire de tintin en Amérique",
      "pub_type": "p",
      "created_at": "2019-03-19T17:00:28.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    },
    {
      "title": "Astérix et les normands",
      "user_id": 1,
      "type": "Aventure",
      "id": 19,
      "image_url": "/media/books_cover/Astérix et les normands.jpg",
      "pdf_url": "/media/books/Astérix et les normands.pdf",
      "description": "L'histoire d'Astérix chez les normands",
      "pub_type": "p",
      "created_at": "2019-03-19T17:10:43.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "success": true,
  "msg": "Books retrieved successfully"
}
```
> URL of the example : `https://api-feedbook.herokuapp.com/api/v1/books/search/1?type=Comédie&type=Aventure&author=League`

This endpoint returns all books matching parameters in the body. 
    
### HTTP REQUEST
    
`GET /v1/books/search/:page`


### URL PARAMETERS
        
Parameter | Description
--------- | -----------
title | The title that you search (optional)
author | The author of the book (optional)
type | The type of the book, can have multiple (optional)

<aside class="warning">
The search is not case sensitive.
</aside>

<aside class="warning">
There are 20 books by page
</aside>

## Update a book

```json
{
  "status": 200,
  "book": {
    "title": "Astérix le gaulois",
    "user_id": 6,
    "type": "BD",
    "id": 9,
    "image_url": "/media/books_cover/asterixlegaulois.jpg",
    "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
    "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
    "pub_type": "p",
    "created_at": "2019-03-18T16:24:45.000Z",
    "grade": 0
  },
  "success": true,
  "msg": "Book successfully updated"
}
```

This endpoint update a book
    
### HTTP REQUEST
    
`PATCH /v1/books/:id`

### BODY PARAMETERS
        
Parameter | Description
--------- | -----------
title | The new title of the book (optional)
pub_type | "p" for public "v" private (optional)
type | The new style of the book (optional)
description | The new description of the book (optional)