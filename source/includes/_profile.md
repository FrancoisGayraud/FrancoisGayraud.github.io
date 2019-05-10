# Profile

All endpoints for profiles.

<aside class="notice">
Each of the requests require a token.
</aside>

## Retrieve profile information

```json
{
  "status": 200,
  "user": {
    "email": "f@gmail.com",
    "last_login": "2019-01-04T14:43:36.000Z",
    "date_joined": "2018-12-03T21:37:10.000Z",
    "first_name": "testE",
    "last_name": "qlskdjfklsmqdfqdjl",
    "password": "$2b$10$y4R5BZPXNHh7rzFGasDw1u8HLwSTHb3uFNZuOlGpYWP8zOanK.kFy",
    "is_superuser": 1,
    "is_staff": 1,
    "is_active": 1,
    "id": 21,
    "refresh_token": null,
    "profile_picture": null,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZAZ21haWwuY29tIiwiaWF0IjoxNTQ2NjEzMDE2LCJleHAiOjE1NDY2OTk0MTZ9.Ig0G-PNF4VtC7p3unJfXigFA7YBm3FquoASVp_rUmYs",
    "username": "LELELELELEleqsdf"
  },
  "profile": {
    "public_username": "LELELELELEleqsdf",
    "bio": "lol",
    "gender": "n",
    "id": 10,
    "user_id": 21
  },
  "msg": "User profile successfully retrieved.",
  "success": true
}
```
 
This endpoint returns information of the user profile. 

### HTTP REQUEST

`GET /v1/profile/me`

## Update profile information

```json
{
  "status": 200,
  "user": {
    "email": "lucas@gmadil.comzqdeqdsfsfqsd",
    "last_login": null,
    "date_joined": "2018-12-01T19:54:14.000Z",
    "first_name": "testEIP",
    "last_name": "ABCD",
    "password": "$2b$10$G/1IsM17ABqOT11.2dRtiONqNEFT5Ise73bphUZezUyIwBIpK0diC",
    "is_superuser": 1,
    "is_staff": 1,
    "is_active": 1,
    "profile_picture": null,
    "id": 13,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGd",
    "username": "qsdlfkjfklmdqsqs"
  },
  "profile": {
    "public_username": "qsdlfkjfklmdqsqs",
    "bio": "lol",
    "gender": "m",
    "id": 2,
    "user_id": 13
  },
  "msg": "User successfully updated.",
  "success": true
}
```

 
This endpoint updates informations of the user profile. 

### HTTP REQUEST

`PATCH /v1/profile/me`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
username | User's username (optional).
firstname | User's firstname (optional).
lastname | User's lastname (optional).
bio | User's bio (optional).
profile_picture | User's profile picture (optional).
gender | User's gender (optional).

## Update password

```json
{
  "status": 200,
  "user": {
    "email": "lucas@gmadil.comzqdeqdsfsfqsd",
    "last_login": null,
    "date_joined": "2018-12-01T19:54:14.000Z",
    "first_name": "testEIP",
    "last_name": "ABCD",
    "password": "$2b$10$G/1IsM17ABqOT11.2dRtiONqNEFT5Ise73bphUZezUyIwBIpK0diC",
    "is_superuser": 1,
    "is_staff": 1,
    "is_active": 1,
    "profile_picture": null,
    "id": 13,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGdtY",
    "username": "qsdlfkjfklmdqsqs"
  },
  "profile": {
    "public_username": "qsdlfkjfklmdqsqs",
    "bio": "lol",
    "gender": "m",
    "id": 2,
    "user_id": 13
  },
  "msg": "Password successfully updated.",
  "success": true
}
```
 
This endpoint updates the password of the user.

### HTTP REQUEST

`PATCH /v1/profile/password`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
password | User's new password.
old_password | User's old password.

## Update superuser status of the user

```json
{
  "status": 200,
  "user": {
    "email": "lucas@gmail.com",
    "last_login": null,
    "date_joined": "2018-12-01T19:54:14.000Z",
    "first_name": "testEIP",
    "last_name": "ABCD",
    "password": "$2b$10$G/1IsM17ABqOT11.2dRtiONqNEFT5Ise73bphUZezUyIwBI",
    "is_superuser": 1,
    "profile_picture": null,
    "is_staff": 1,
    "is_active": 1,
    "id": 13,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGdtY",
    "username": "qsdlfkjfklmdqsqs"
  },
  "profile": {
    "public_username": "qsdlfkjfklmdqsqs",
    "bio": "lol",
    "gender": "m",
    "id": 2,
    "user_id": 13
  },
  "msg": "Variable is_superuser successfully updated.",
  "success": true
}
```
 
This endpoint updates the superuser status of the user by changing the variable "is_superuser".

### HTTP REQUEST

`PATCH /v1/profile/superuser`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
is_superuser | 0 if the user is not a superuser, 1 if he is a superuser

## Banning / Unbanning a user

```json
{
  "status": 200,
  "user": {
    "email": "lucas@gmail.com",
    "last_login": null,
    "date_joined": "2018-12-01T19:54:14.000Z",
    "first_name": "testEIP",
    "last_name": "ABCD",
    "password": "$2b$10$G/1IsM17ABqOT11.2dRtiONqNEFT5Ise73bphUZezUyIwBIpK0diC",
    "is_superuser": 1,
    "is_staff": 1,
    "is_active": 0,
    "profile_picture": null,
    "id": 13,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWF",
    "username": "qsdlfkjfklmdqsqs"
  },
  "profile": {
    "public_username": "qsdlfkjfklmdqsqs",
    "bio": "lol",
    "gender": "m",
    "id": 2,
    "user_id": 13
  },
  "msg": "Variable is_active successfully updated.",
  "success": true
}
```
 
This endpoint changes the variable "is_active" of the user.

### HTTP REQUEST

`PATCH /v1/profile/active`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
is_active | 0 if the user is not active (currently ban), 1 if he is active.

## Update email address

```json
{
    "status": 200,
    "success": true,
    "profile": {
      "email": "Lel@test.apiSTPMARCHE",
      "last_login": "2019-01-07T17:47:34.000Z",
      "date_joined": "2018-12-03T21:37:10.000Z",
      "first_name": "testE",
      "last_name": "qsdfjkl",
      "password": "$2b$10$n6ONjvOfTZ9btCgzYd6es.wn0fqnT05jnUjKuZEqtEhBWZC1KEZa2",
      "is_superuser": 1,
      "is_staff": 1,
      "is_active": 1,
      "id": 21,
      "refresh_token": null,
      "profile_picture": "qQlkmjdf193jkhH8kn12n2N1HhhH",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkxlbEB0ZXN0LmFwaVNUUE1BUkNIRSIsImlhdCI6MTU0Njg5MTQ1NSwiZXhwIjoxNTQ2OTc3ODU1fQ.ny-d60m_1WqgjbLPHxY8T07e4ly8e1mheY8ZqaLMmXM",
      "username": "TESTAPIeAPeeeIAPqsdfIkAPzI"
    },
    "msg": "Email successfully updated."
}
```
 
This endpoint updates the email of a user. 

<aside class="notice">
This endpoint create a new token, that it returns on the JSON data.
</aside>


### HTTP REQUEST

`PATCH /v1/profile/email`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
email | The new email.

## Put a user in the staff team / Remove a user from the staff team

```json
{
  "status": 200,
  "user": {
    "email": "lucas@gmail.com",
    "last_login": null,
    "date_joined": "2018-12-01T19:54:14.000Z",
    "first_name": "testEIP",
    "last_name": "ABCD",
    "password": "$2b$10$G/1IsM17ABqOT11.2dRtiONqNEFT5Ise73bphUZezUyIwBIpK0diC",
    "is_superuser": 1,
    "is_staff": 1,
    "is_active": 1,
    "id": 13,
    "profile_picture": null,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2Fz",
    "username": "qsdlfkjfklmdqsqs"
  },
  "profile": {
    "public_username": "qsdlfkjfklmdqsqs",
    "bio": "lol",
    "gender": "m",
    "id": 2,
    "user_id": 13
  },
  "msg": "Variable is_staff successfully updated.",
  "success": true
}
```
 
This endpoint changes the variable "is_staff" of the user.

### HTTP REQUEST

`PATCH /v1/profile/staff`

### BODY PARAMETERS

Parameter | Description
--------- | -----------
is_staff | 0 if the user is not a staff member, 1 if he is