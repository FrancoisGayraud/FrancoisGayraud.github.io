# Messages

All endpoints for the messaging part of Feedbook.

<aside class="notice">
Each of the requests require a token.
</aside>

## Post a message

```json
{
  "status": 200,
  "message": {
    "id": 7,
    "receiver_id": "6",
    "content": "Ceci est un message",
    "sender_id": 6,
    "sent_at": "2019-04-02T18:24:55.558Z"
  },
  "msg": "Messages successfully sent.",
  "success": true
}
```

This endpoint posts a new message.

### HTTP REQUEST

`POST /v1/messages/`

### BODY PARAMETERS
        
Parameter | Description
--------- | -----------
email | email of the receiver.
receiver_id | id of the receiver.
username | username of the receiver.
content | the content of the message.
subject | the subject of the message (optional).

<aside class="warning">
Only ONE parameter is required to identify the receiver (EMAIL, USERNAME OR ID).
</aside>

## Get all your messages

```json
{
  "status": 200,
  "messages": [
    {
      "sender_id": 6,
      "receiver_id": 6,
      "id": 2,
      "content": "Ceci est un message",
      "sent_at": null,
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 6,
      "receiver_id": 6,
      "id": 9,
      "content": "Ceci est un message :)",
      "sent_at": "2019-04-02T18:24:55.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 6,
      "receiver_id": 6,
      "id": 10,
      "content": "Test",
      "sent_at": "2019-04-05T13:51:34.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 6,
      "receiver_id": 6,
      "id": 11,
      "content": "Test message Follow-up",
      "sent_at": "2019-04-05T15:00:36.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 6,
      "receiver_id": 1,
      "id": 16,
      "content": "Test message conversation",
      "sent_at": "2019-05-05T19:38:33.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "LeagueOfLegend",
        "first_name": "Lucas",
        "last_name": "Vax"
      }
    }
  ],
  "msg": "Messages successfully retrieved.",
  "success": true
}
```

This endpoint gets all the messages that you received.
 
### HTTP REQUEST

`GET /v1/messages`

## Get all users that you have a conversation with by page

```json
{
  "status": 200,
  "msg": "Conversations successfully retrieved",
  "conversations": [
    {
      "user": {
        "id": 4,
        "username": "Antoine"
      },
      "last_message": {
        "sender_id": 6,
        "receiver_id": 4,
        "id": 58,
        "content": "message test à antoine le bro",
        "sent_at": "2019-05-09T16:35:30.000Z"
      }
    },
    {
      "user": {
        "id": 7,
        "username": "API"
      },
      "last_message": {
        "sender_id": 6,
        "receiver_id": 7,
        "id": 56,
        "content": "message à L'api",
        "sent_at": "2019-05-09T16:14:42.000Z"
      }
    },
    {
      "user": {
        "id": 2,
        "username": "dza"
      },
      "last_message": {
        "sender_id": 6,
        "receiver_id": 2,
        "id": 45,
        "content": "message à dza",
        "sent_at": "2019-05-09T15:42:04.000Z"
      }
    },
    {
      "user": {
        "id": 1,
        "username": "LeagueOfLegend"
      },
      "last_message": {
        "sender_id": 6,
        "receiver_id": 1,
        "id": 43,
        "content": "message à leagueof",
        "sent_at": "2019-05-09T15:27:21.000Z"
      }
    }
  ],
  "totalPages": 1,
  "totalConversation": 4,
  "success": true
}
```

This endpoint gets all the users that you have an open conversation with, and the last message sent in each conversations. The search is by page
 
### HTTP REQUEST

`GET /v1/messages/conversations/:page`

<aside class="warning">
There are 10 conversations per page
</aside>


## Get all messages from a conversation by page

```json
{
  "status": 200,
  "msg": "Conversation successfully retrieved.",
  "conversation": [
    {
      "sender_id": 7,
      "receiver_id": 6,
      "id": 9,
      "content": "Ceci est un message :)",
      "sent_at": "2019-04-02T18:24:55.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 7,
      "receiver_id": 6,
      "id": 10,
      "content": "Test",
      "sent_at": "2019-04-05T13:51:34.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    },
    {
      "sender_id": 7,
      "receiver_id": 6,
      "id": 11,
      "content": "Test message Follow-up",
      "sent_at": "2019-04-05T15:00:36.000Z",
      "subject": "Sujet du message",
      "receiver": {
        "username": "Francois",
        "first_name": "monPrénom",
        "last_name": "ABCD"
      }
    }
  ],
  "totalPages": 2,
  "totalMessages": 13
}
```

This endpoint gets all the the messages from the conversation with the user specified in the URL, by page.
 
### HTTP REQUEST

`GET /v1/messages/conversations/:id/:page`

<aside class="notice">
The id in the URL is the id of the user you have a conversation with 
</aside>

<aside class="notice">
Messages are ordered by the date from oldest to newest
</aside>

<aside class="warning">
There are 10 messages per page
</aside>

## Remove a conversation

```json
{
  "status": 200,
  "msg": "Conversation successfully delete.",
  "success": true
}
```

This endpoint deletes all messages from the conversation with the user specified in the URL.
 
### HTTP REQUEST

`DELETE /v1/messages/conversations/:id`

## Remove a message

```json
{
  "status": 200,
  "msg": "Message successfully delete.",
  "success": true
}
```

This endpoint deletes the message with the id specified in the URL.
 
### HTTP REQUEST

`DELETE /v1/messages/:id`