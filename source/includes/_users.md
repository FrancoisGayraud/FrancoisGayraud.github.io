# Users

Endpoints relative to users.

<aside class="notice">
Each of the requests require a token.
</aside>

## Get all users

```json
{
  "status": 200,
  "users": [
    {
      "username": "LeagueOfLegend",
      "last_login": "2019-05-03T12:27:41.000Z",
      "date_joined": "2019-03-18T00:04:26.000Z",
      "id": 1
    },
    {
      "username": "harout",
      "last_login": "2019-05-03T09:24:12.000Z",
      "date_joined": "2019-03-18T11:29:34.000Z",
      "id": 2
    },
    {
      "username": "CaptainLegends",
      "last_login": "2019-05-03T14:31:59.000Z",
      "date_joined": "2019-03-18T17:37:02.000Z",
      "id": 3
    },
    {
      "username": "Antoine",
      "last_login": "2019-03-22T07:21:08.000Z",
      "date_joined": "2019-03-19T18:19:05.000Z",
      "id": 4
    },
    {
      "username": "Antoinette",
      "last_login": "2019-03-20T11:38:24.000Z",
      "date_joined": "2019-03-20T11:38:16.000Z",
      "id": 5
    },
    {
      "username": "Francois",
      "last_login": "2019-05-03T15:30:41.000Z",
      "date_joined": "2019-03-26T01:43:50.000Z",
      "id": 6
    },
    {
      "username": "API",
      "last_login": null,
      "date_joined": "2019-05-03T15:21:46.000Z",
      "id": 7
    }
  ],
  "success": true,
  "msg": "Users retrieved successfully"
}
```

This endpoint returns all users.

### HTTP REQUEST

`GET /v1/users`

## Get all authors

```json
{
  "status": 200,
  "authors": [
    {
      "username": "LeagueOfLegend",
      "last_login": "2019-05-03T12:27:41.000Z",
      "date_joined": "2019-03-18T00:04:26.000Z",
      "id": 1
    },
    {
      "username": "Francois",
      "last_login": "2019-05-03T15:30:41.000Z",
      "date_joined": "2019-03-26T01:43:50.000Z",
      "id": 6
    }
  ],
  "success": true,
  "msg": "Authors retrieved successfully"
}
```

This endpoint returns all authors.

### HTTP REQUEST

`GET /v1/users/authors`

## Get a user by its id

```json
{
  "status": 200,
  "user": {
    "username": "LeagueOfLegend",
    "last_login": "2019-05-03T12:27:41.000Z",
    "date_joined": "2019-03-18T00:04:26.000Z",
    "id": 1
  },
  "success": true,
  "msg": "User retrieved successfully"
}
```

This endpoint return the user with the id specified in the URL.

### HTTP REQUEST

`GET /v1/users/search/:idOfTheUser`