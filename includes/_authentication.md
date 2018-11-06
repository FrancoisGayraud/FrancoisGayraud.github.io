# Authentication

All API call related to authentication.

Feedbook API uses a token system.

Once your token retrieved you must include it all request headers
(except in /auth route) like this:

`Authorization: xxxxxxxxxxx`

<aside class="notice">
You must replace <code>xxxxxxxxxxx</code> with your API token.
</aside>

## Login

This endpoint login a user.

### HTTP Request

`POST /v1/login`

```json
{
	"status": 200,
	"success": true,
	"msg": "User successfully login.",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoiZmVlZGJvb2tAZ21haWwuY29tIiwiaWF0IjoxNTQxMjY0MjUzLCJleHAiOjE1NDEzNTA2NTN9.JfGPHvEMt80O2uTphiXjRM192ILu8k1OdT32C5dla6w"
}
```

### BODY PARAMETERS

Parameter | Description
--------- | -----------
mail | User's email.
password | User's password.


## Register

This endpoint register a new user.

### HTTP Request

```json
{
    "success": true,
    "msg": "User created successfully."   
}
```

`POST /v1/register`

#### BODY PARAMETERS

Parameter | Description
--------- | -----------
mail | User's email.
password | User's password.
pseudo | User's pseudo.
