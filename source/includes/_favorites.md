# Favorites

All endpoints for favorites

<aside class="notice">
Each of the requests require a token.
</aside>

## Retrieve all your favorites by page

```json
{
  "status": 200,
  "favorites": [
    {
      "title": "alix l'intrépide",
      "user_id": 6,
      "book_id": 43,
      "type": "aventure, historique",
      "pub_type": "v",
      "id": 4,
      "book": {
        "title": "Alix l'intrépide",
        "user_id": 1,
        "type": "aventure, historique",
        "id": 43,
        "image_url": "442cca3cd8a71924342b9bf4f87614e6.jpg",
        "pdf_url": "442cca3cd8a71924342b9bf4f87614e6.pdf",
        "description": "C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de ",
        "pub_type": "p",
        "created_at": "2019-05-09T08:41:43.000Z",
        "grade": 0,
        "author": {
          "username": "LeagueOfLegend",
          "id": 1,
          "first_name": "Lucas",
          "last_name": "Vax"
        }
      }
    }
  ],
  "totalPages": 1,
  "totalFavorites": 1,
  "msg": "User favorites successfully retrieved.",
  "success": true
}
```
 
This endpoint returns all favorites of the user, by page. Token is required in the header of the request.

### HTTP REQUEST

`GET /v1/favorites/me/all/:page`

<aside class="warning">
There are 20 favorites by page
</aside>

## Post a favorite

```json
{ 
   "status": 200,
    "favorites": {
      "id": 11,
      "type": "Comédie",
      "title": "test",
      "user_id": 22,
      "book_id": 55,
      "pub_type": "v"
   },
   "msg": "User favorite successfully added.",
   "success": true
}
```

This endpoint adds the book with the id in the URL to favorite.

### HTTP Request

`POST /v1/favorites/:idOfBook`

## Delete a favorite

```json
{
  "status": 200,
  "msg": "Favorite successfully deleted.",
  "success": true
}
```

This endpoint delete a book from favorites for the user, with the id specified at the end of the url.

### HTTP Request

`DELETE /v1/favorites/:idOfBook`

## Get a favorite by its id
 
 ```json
{
  "status": 200,
  "favorite": {
    "title": "alix l'intrépide",
    "user_id": 6,
    "book_id": 43,
    "type": "aventure, historique",
    "pub_type": "v",
    "id": 4,
    "book": {
      "title": "Alix l'intrépide",
      "user_id": 1,
      "type": "aventure, historique",
      "id": 43,
      "image_url": "442cca3cd8a71924342b9bf4f87614e6.jpg",
      "pdf_url": "442cca3cd8a71924342b9bf4f87614e6.pdf",
      "description": "C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de ",
      "pub_type": "p",
      "created_at": "2019-05-09T08:41:43.000Z",
      "grade": 0,
      "author": {
        "username": "LeagueOfLegend",
        "id": 1,
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  },
  "msg": "Favorite successfully retrieved.",
  "success": true
}
 ```

This endpoint get a favorite by its id.

### HTTP REQUEST

`GET /v1/favorites/:idOfComment`
  
## Patch a favorite (change it to private/public) 

 ```json
{
  "status": 200,
  "success": true,
  "favorites": {
    "title": "Astérix le gaulois",
    "user_id": 6,
    "book_id": 9,
    "type": "BD",
    "pub_type": "v",
    "id": 95
  },
  "msg": "Favorite successfully patched."
}
 ```

This endpoint patch a favorite.

### HTTP REQUEST

`PATCH /v1/favorites/:idOfComment`

### BODY PARAMETERS
            
Parameter | Description
--------- | -----------
pub_type | "p" for public "v" private

## Retrieve all your public favorites by page
 
 ```json
{
  "status": 200,
  "favorites": [
    {
      "title": "alix l'intrépide",
      "user_id": 6,
      "book_id": 43,
      "type": "aventure, historique",
      "pub_type": "p",
      "id": 4,
      "book": {
        "title": "Alix l'intrépide",
        "user_id": 1,
        "type": "aventure, historique",
        "id": 43,
        "image_url": "442cca3cd8a71924342b9bf4f87614e6.jpg",
        "pdf_url": "442cca3cd8a71924342b9bf4f87614e6.pdf",
        "description": "C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de ",
        "pub_type": "p",
        "created_at": "2019-05-09T08:41:43.000Z",
        "grade": 0,
        "author": {
          "username": "LeagueOfLegend",
          "id": 1,
          "first_name": "Lucas",
          "last_name": "Vax"
        }
      }
    }
  ],
  "msg": "User favorites successfully retrieved.",
  "totalPages": 1,
  "totalFavorites": 1,
  "success": true
}
 ```

This endpoint get all your public favorites.

### HTTP REQUEST

`GET /v1/favorites/me/public/:page`

<aside class="warning">
There are 20 favorites by page
</aside>

## Retrieve all your private favorites
 
 ```json
{
  "status": 200,
  "favorites": [
    {
      "title": "alix l'intrépide",
      "user_id": 6,
      "book_id": 43,
      "type": "aventure, historique",
      "pub_type": "v",
      "id": 4,
      "book": {
        "title": "Alix l'intrépide",
        "user_id": 1,
        "type": "aventure, historique",
        "id": 43,
        "image_url": "442cca3cd8a71924342b9bf4f87614e6.jpg",
        "pdf_url": "442cca3cd8a71924342b9bf4f87614e6.pdf",
        "description": "C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de C'est l'histoire d'alex l'intrépise qui tua des millions de personnes et de ",
        "pub_type": "v",
        "created_at": "2019-05-09T08:41:43.000Z",
        "grade": 0,
        "author": {
          "username": "LeagueOfLegend",
          "id": 1,
          "first_name": "Lucas",
          "last_name": "Vax"
        }
      }
    }
  ],
  "msg": "User favorites successfully retrieved.",
  "totalPages": 1,
  "totalFavorites": 1,
  "success": true
}
 ```

This endpoint get all your private favorites by page.

### HTTP REQUEST

`GET /v1/favorites/me/private/:page`

<aside class="warning">
There are 20 favorites by page
</aside>