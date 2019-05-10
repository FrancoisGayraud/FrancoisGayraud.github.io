---
title: API Reference

toc_footers:
  - <a href='#'>Made by Feedbook</a>

includes:
  - authentication
  - books
  - favorites
  - profile
  - comments
  - messages
  - reviewers
  - reviews
  - users

search: true
---

# Introduction

Welcome to the Feedbook Api documentation.

> `↓ Examples of data returns by the API are below ↓ `

**Please read all introduction before modifying the API.**

The Feedbook API uses Node.js and Express.js. The API is host on Heroku.


## Testing

To run API tests execute the following command :

> `npm test`

`npm test`

## ORM

We use **Sequelize** as ORM, with **Sequelize-auto** to generate models.

## Base URL

> `https://api-feedbook.herokuapp.com/api/v1`

The base URL of the API is :

`https://api-feedbook.herokuapp.com/api/v1`

## Base JSON response format

```json
{
  "success": true,
  "status": 200,
  "msg": "Success"
}
```

Response will always contain at least a `status` field as well as a `msg` field. 


## Common error codes

Value | Cause
------ | ------
400 | A parameter provided is not valid
422 | A parameter required is missing
409 | A parameter is a duplicate from the data in the database
401 | Invalid Token
