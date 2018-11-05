---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript

toc_footers:
  - <a href='#'>Made by Feedbook</a>

includes:
  - authentication
  - books
  - favorites
  - profile

search: true
---

# Introduction

Welcome to the Feedbook Api.

**Please read all introduction before modifying or integrate an API.**

The Feedbook API uses Node.js and Express.js

## Testing

To run API test execute the following command

`npm test`

## ORM

We use **Sequelize** as ORM, we created models from the db tables.

## Base JSON response format

```json
{
  "success": true,
  "status": 200,
  "msg": "Success"
}
```

Response will always contain at least a `status` field
as well as a `mesg` field.

## Common error codes

Value | Cause
------ | ------
400 | A parameter provided is not valid
422 | A parameter required is missing
409 | A parameter is a duplicate from the data in the database