# Reviews

All endpoints for the reviews.

<aside class="notice">
Each of the requests require a token.
</aside>

## Create a request for review

```json
{
  "status": 200,
  "success": true,
  "request": {
    "id": 9,
    "start": "2019-04-05T12:40:03.294Z",
    "book_id": "9",
    "end": "2019-10-19T22:00:00.000Z",
    "author_id": 6
  },
  "msg": "Review request successfully created."
}
```

This endpoint create a review request for the book that has the id specified in the URL.

### HTTP REQUEST

`POST /v1/reviews/request/:idOfBook`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
end | The end date of the review.

<aside class="warning">
The date format is MM/DD/YYYY
</aside>

## Get all your created requests as an author

```json
{
  "status": 200,
  "success": true,
  "requests": [
    {
      "id": 5,
      "author_id": 6,
      "book_id": 9,
      "start": "2019-04-05",
      "end": "2019-08-29"
    },
    {
      "id": 7,
      "author_id": 6,
      "book_id": 9,
      "start": "2019-04-05",
      "end": "2019-01-19"
    },
    {
      "id": 8,
      "author_id": 6,
      "book_id": 9,
      "start": "2019-04-05",
      "end": "2019-01-19"
    },
    {
      "id": 9,
      "author_id": 6,
      "book_id": 9,
      "start": "2019-04-05",
      "end": "2019-10-19"
    }
  ],
  "msg": "Review requests successfully retrieved."
}
```

This endpoint returns all the requests that you created.

### HTTP REQUEST

`GET /v1/reviews/author/request`


## Get all the pending requests as a reviewer

```json
{
  "status": 200,
  "success": true,
  "requests": [
    {
      "id": 10,
      "author_id": 6,
      "book_id": 9,
      "start": "2019-04-05",
      "end": "2019-10-19"
    }
  ],
  "msg": "Review requests successfully retrieved."
}
```

This endpoint returns all the requests that you created.

### HTTP REQUEST

`GET /v1/reviews/reviewer/request`


## Post a review as a reviewer

```json
{
  "status": 200,
  "success": true,
  "review": {
    "id": 3,
    "created_at": "2019-04-05T12:43:23.878Z",
    "book_id": 9,
    "review_request_id": "9",
    "review": "Ceci est ma troisème review.",
    "grade": "11",
    "reviewer_id": 6
  },
  "msg": "Review successfully posted."
}
```

This endpoint posts a review for the request with the id specified in the URL.

### HTTP REQUEST

`POST /v1/reviews/:idOfRequestReview`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
content | The content of the review.
grade | The grade for the review.

<aside class="warning">
Grade goes from 0 to 20
</aside>


## Get all your reviews as an author

```json
{
  "status": 200,
  "success": true,
  "msg": "Reviews successfully retrieved.",
  "reviews": [
    {
      "start": "2019-04-05",
      "end": "2019-08-29",
      "review": [
        {
          "id": 1,
          "book_id": 9,
          "reviewer_id": 6,
          "review_request_id": 5,
          "created_at": "2019-04-05T12:12:45.000Z",
          "review": "Ceci est ma première review.",
          "grade": 10
        }
      ]
    },
    {
      "start": "2019-04-05",
      "end": "2019-10-19",
      "review": [
        {
          "id": 3,
          "book_id": 9,
          "reviewer_id": 6,
          "review_request_id": 9,
          "created_at": "2019-04-05T12:43:23.000Z",
          "review": "Ceci est ma troisème review.",
          "grade": 11
        }
      ]
    },
    {
      "start": "2019-04-05",
      "end": "2019-01-19",
      "review": []
    },
    {
      "start": "2019-04-05",
      "end": "2019-01-19",
      "review": []
    },
    {
      "start": "2019-04-05",
      "end": "2019-10-19",
      "review": []
    }
  ]
}
```

This endpoint returns all the reviews, grouped by requests.

### HTTP REQUEST

`GET /v1/reviews/author`


## Get all your reviews as a reviewer

```json
{
  "status": 200,
  "success": true,
  "msg": "Reviews successfully retrieved.",
  "reviews": [
    {
      "id": 1,
      "book_id": 9,
      "reviewer_id": 6,
      "review_request_id": 5,
      "created_at": "2019-04-05T12:12:45.000Z",
      "review": "Ceci est ma première review.",
      "grade": 10
    },
    {
      "id": 2,
      "book_id": 15,
      "reviewer_id": 6,
      "review_request_id": 6,
      "created_at": "2019-04-05T12:37:14.000Z",
      "review": "Ceci est ma deuxième review.",
      "grade": 11
    },
    {
      "id": 3,
      "book_id": 9,
      "reviewer_id": 6,
      "review_request_id": 9,
      "created_at": "2019-04-05T12:43:23.000Z",
      "review": "Ceci est ma troisème review.",
      "grade": 11
    }
  ]
}
```

This endpoint returns all the reviews, grouped by requests.

### HTTP REQUEST

`GET /v1/reviews/reviewer`
