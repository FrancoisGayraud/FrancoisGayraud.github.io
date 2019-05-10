# Reviewers

All endpoints for managing the Reviewers. The Reviewers table in the database makes the association between a reviewer and an author. It contains 3 columns : reviewer_id, author_id and created_at.

<aside class="notice">
Each of the requests require a token.
</aside>

## Add a reviewer to your team

```json
{
  "status": 200,
  "message": {
    "id": 13,
    "reviewer_id": "2",
    "author_id": 6,
    "created_at": "2019-04-05T12:52:23.011Z"
  },
  "msg": "Reviewer successfully add.",
  "success": true
}
```

This endpoint adds a reviewer to your reviewer team.

<aside class="warning">
Only ONE parameter is required to identify the reviewer (EMAIL, USERNAME OR ID).
</aside>

### HTTP REQUEST

`POST /v1/reviewers`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
email | email of the reviewer.
reviewer_id | id of the reviewer.
username | username of the reviewer.

## Get all your reviewers as an author

```json
{
  "status": 200,
  "success": true,
  "msg": "Reviewers successfully retrieved.",
  "reviewers": [
    {
      "id": 7,
      "reviewer_id": 6,
      "author_id": 6,
      "created_at": "2019-04-04",
      "reviewer": {
        "username": "Francois",
        "email": "fgayraud3008@gmail.com",
        "last_login": "2019-04-04T23:12:45.000Z",
        "date_joined": "2019-03-26T01:43:50.000Z",
        "first_name": "François",
        "last_name": "Gayraud",
        "is_staff": 1,
        "is_active": 1,
        "is_superuser": 1,
        "id": 6
      }
    },
    {
      "id": 8,
      "reviewer_id": 5,
      "author_id": 6,
      "created_at": "2019-04-04",
      "reviewer": {
        "username": "Antoine",
        "email": "vaxelaire.lucas@gmail.com",
        "last_login": "2019-03-20T11:38:24.000Z",
        "date_joined": "2019-03-20T11:38:16.000Z",
        "first_name": "Antoine",
        "last_name": "Jean",
        "is_staff": 0,
        "is_active": 1,
        "is_superuser": 0,
        "id": 5
      }
    }
  ]
}
```

This endpoints returns all your reviewers as an author.

### HTTP REQUEST

`GET /v1/reviewers/author`


## Get all the authors that you are a reviewer of

```json
{
  "status": 200,
  "success": true,
  "msg": "Author that you are reviewing successfully retrieved.",
  "reviewers": [
    {
      "id": 9,
      "reviewer_id": 6,
      "author_id": 6,
      "created_at": "2019-04-04",
      "author": {
        "username": "Francois",
        "email": "fgayraud3008@gmail.com",
        "last_login": "2019-04-04T23:12:45.000Z",
        "date_joined": "2019-03-26T01:43:50.000Z",
        "first_name": "monPrénom",
        "last_name": "ABCD",
        "is_staff": 1,
        "is_active": 1,
        "is_superuser": 1,
        "id": 6
      }
    },
    {
      "id": 10,
      "reviewer_id": 6,
      "author_id": 1,
      "created_at": "2019-04-03",
      "author": {
        "username": "LucasSuede",
        "email": "lucas.vaxelaire@epitech.eu",
        "last_login": "2019-04-05T12:37:04.000Z",
        "date_joined": "2019-03-18T00:04:26.000Z",
        "first_name": "Thomas",
        "last_name": "Pizd",
        "is_staff": 0,
        "is_active": 1,
        "is_superuser": 0,
        "id": 1
      }
    }
  ]
}
```

This endpoint returns all the authors that you are a reviewer of.

### HTTP REQUEST

`GET /v1/reviewers/reviewing`

## Delete a reviewer

```json
{
  "status": 200,
  "msg": "Reviewer successfully deleted.",
  "success": true
}
```

This endpoints delete a reviewer.

### HTTP REQUEST

`DELETE /v1/reviewers/:id`