# Comments

All endpoints for comments

<aside class="notice">
Each of the requests require a token.
</aside>

## Retrieve all comments for a book

> Here we retrieve all comments for the book with the id `9`

```json
{
  "status": 200,
  "comments": [
    {
      "content": "First",
      "id": 1,
      "user_id": 1,
      "book_id": 9,
      "user": {
        "email": "lucas.vaxelaire@epitech.eu",
        "last_login": "2019-03-25T23:32:59.000Z",
        "date_joined": "2019-03-18T00:04:26.000Z",
        "first_name": "Lucas",
        "last_name": "Vaxelaire",
        "password": "$2b$10$A6F3BwQ5e12wiEr8Na4Whe5rQlNVGLsWrGh1BHHG/MEV1M9nn/Cg.",
        "is_superuser": 0,
        "is_staff": 0,
        "is_active": 1,
        "id": 1,
        "refresh_token": "cuG8T13JpVJpxy48",
        "profile_picture": null,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzLnZheGVsYWlyZUBlcGl0ZWNoLmV1IiwiaWF0IjoxNTUzNTU2Nzc5LCJleHAiOjE1NTM2NDMxNzl9.q025Ubzbor8EQpHrypBXEM2u10XNjTRbvX3RzntBpZE",
        "reset_password_code": null,
        "username": "Lucawars"
      },
      "book": {
        "title": "Astérix le gaulois",
        "user_id": 1,
        "type": "BD",
        "id": 9,
        "image_url": "/media/books_cover/asterixlegaulois.jpg",
        "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
        "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
        "pub_type": "p",
        "created_at": "2019-03-18T16:24:45.000Z",
        "grade": 0
      }
    },
    {
      "content": "super !!",
      "id": 56,
      "user_id": 1,
      "book_id": 9,
      "user": {
        "email": "lucas.vaxelaire@epitech.eu",
        "last_login": "2019-03-25T23:32:59.000Z",
        "date_joined": "2019-03-18T00:04:26.000Z",
        "first_name": "Lucas",
        "last_name": "Vaxelaire",
        "password": "$2b$10$A6F3BwQ5e12wiEr8Na4Whe5rQlNVGLsWrGh1BHHG/MEV1M9nn/Cg.",
        "is_superuser": 0,
        "is_staff": 0,
        "is_active": 1,
        "id": 1,
        "refresh_token": "cuG8T13JpVJpxy48",
        "profile_picture": null,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzLnZheGVsYWlyZUBlcGl0ZWNoLmV1IiwiaWF0IjoxNTUzNTU2Nzc5LCJleHAiOjE1NTM2NDMxNzl9.q025Ubzbor8EQpHrypBXEM2u10XNjTRbvX3RzntBpZE",
        "reset_password_code": null,
        "username": "Lucawars"
      },
      "book": {
        "title": "Astérix le gaulois",
        "user_id": 1,
        "type": "BD",
        "id": 9,
        "image_url": "/media/books_cover/asterixlegaulois.jpg",
        "pdf_url": "/media/books/Asterix-01-AsterixleGaulois.pdf",
        "description": "L'histoire d'Astérix le gaulois avec son ami Obélix",
        "pub_type": "p",
        "created_at": "2019-03-18T16:24:45.000Z",
        "grade": 0
      }
    }
  ],
  "success": true,
  "msg": "Comments successfully retrieved."
}
```
 
This endpoint returns all comments for a book, the id of the book must be specified at the end of the URL. Token is required in the header of the request.

### HTTP REQUEST

`GET /v1/comments/books/:idOfBook`

## Retrieve all comments of a user

> Here we retrieve all comments of the user with the id `4`

```json
{
	"status": 200,
	"comments": [
		{
			"content": "Ceci est un commentaire",
			"id": 1,
			"user_id": 4,
			"book_id": 1,
		    "created_at": "2019-04-02T17:54:50.009Z"
		},
		{
			"content": "Ceci est un commentaire",
			"id": 2,
			"user_id": 4,
			"book_id": 1,
			"created_at": "2019-04-02T17:54:50.009Z"
		}
	],
	"success": true,
	"msg": "Comments retrieved successfully"
}
```
 
This endpoint returns all comments of a user.

### HTTP REQUEST

`GET /v1/comments/me`

## Post a comment on a book

```json
{
  "status": 200,
  "msg": "Comment successfully added.",
  "success": true,
  "comment": {
    "id": 76,
    "user_id": 6,
    "content": "Ceci est un commentaire",
    "book_id": 1,
    "created_at": "2019-04-02T17:54:50.009Z"
  }
}
```
 
This endpoint posts a new comment for a book. 

### HTTP REQUEST

`POST /v1/comments/`

#### BODY PARAMETERS

Parameter | Description
--------- | -----------
content | Comment's content.
book_id | The id of the book.

## Get a comment by its id

> Here we retrieve a single comment, that have `1` as id

```json
{
	"status": 200,
	"comment": {
		"content": "Ceci est un commentaire",
		"id": 1,
		"user_id": 4,
		"book_id": 2,
	    "created_at": "2019-04-02T17:54:50.009Z"
	},
	"msg": "Comment successfully retrieved.",
	"success": true
}
```
 
This endpoint gets a comment by its id.

### HTTP REQUEST

`GET /v1/comments/:idOfComment`

## Delete a comment

```json
{
	"status": 200,
	"msg": "Comment successfully deleted.",
	"success": true
}
```

This endpoint deletes the comment with the id specified at the end of the url.

### HTTP Request

`DELETE /v1/comments/:idOfComment`

## Delete all comments for a book

```json
{
	"status": 200,
	"msg": "Comments successfully deleted.",
	"success": true
}
```

This endpoint deletes all comments for the book with the id specified at the end of the url.

### HTTP Request

`DELETE /v1/comments/books/:idOfBook`

## Update a comment

```json
{
	"status": 200,
	"msg": "Comment successfully updated.",
	"success": true
}
```

This endpoint updates the comment with the id specified at the end of the url.

### HTTP Request

`PATCH /v1/comments/:idOfComment`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
content | Comment's content.


