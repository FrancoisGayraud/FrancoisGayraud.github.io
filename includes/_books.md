# Books

All endpoints for books

<aside class="notice">
Each of the requests require a token.
</aside>

## Retrieve all books
 
This endpoint returns all books.

### HTTP REQUEST

`GET /v1/books`
  
```json
{
	"status": 200,
	"books": [
		{
			"title": "Mon Livre à moi",
			"user_id": 4,
			"type": "Policier",
			"id": 1,
			"image_url": "http://google.com",
			"pdf_url": null
		},
		{
			"title": "Mon Livre à moi",
			"user_id": 4,
			"type": "Policier",
			"id": 2,
			"image_url": "http://google.com",
			"pdf_url": null
		}
	],
	"success": true,
	"msg": "Books retrieved successfully"
}
```

## Retrieve a book by its id

This endpoint returns the book with th id specified in the url.

### HTTP REQUEST

`GET /v1/books/3`

 ```json
 {
 	"status": 200,
 	"books": {
 		"title": "Un roman romantique",
 		"user_id": 4,
 		"type": "Comédie",
 		"id": 3,
 		"image_url": "http://google.com",
 		"pdf_url": null
 	},
 	"success": true,
 	"msg": "Book retrieved successfully"
 }
 ```
 
## Retrieve all books by type
  
This endpoint returns all books matching the type specified in the url.
  
### HTTP REQUEST
  
`GET /v1/books/Comédie`
  
   ```json
   {
   	"status": 200,
   	"books": {
   		"title": "Un roman romantique",
   		"user_id": 4,
   		"type": "Comédie",
   		"id": 3,
   		"image_url": "http://google.com",
   		"pdf_url": null
   	},
    	"books": {
     	"title": "Un autre romand",
       	"user_id": 4,
       	"type": "Comédie",
       	"id": 3,
       	"image_url": "http://google.com",
       	"pdf_url": null
     },
   	"success": true,
   	"msg": "Books retrieved successfully"
   }
   ```
   
## Add a new book
    
This endpoint add a new book.
    
### HTTP REQUEST
    
`POST /v1/books/`
    
```json
  {
   "status": 200,
   "books": {
    "title": "Un roman romantique",
   	"user_id": 4,
  	"type": "Comédie",
    "id": 3,
    "image_url": "http://google.com",
   	"pdf_url": null
 	},
   "books": {
    "title": "Un autre romand",
    "user_id": 4,
    "type": "Comédie",
    "id": 3,
    "image_url": "http://google.com",
    "pdf_url": null
    },
   "success": true,
   "msg": "Books retrieved successfully"
  }
```
     
### BODY PARAMETERS
        
    Parameter | Description
    --------- | -----------
    title | Book's title.
    type | Book's type.
    image_url | Book's cover image url.
    pdf_url | Book's pdf url.
