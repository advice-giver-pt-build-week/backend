define({ "api": [
  {
    "type": "post",
    "url": "/myMentors/",
    "title": "Add user adviser",
    "version": "1.0.0",
    "name": "AddUserAdviser",
    "group": "AdviserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "seeker_id",
            "description": "<p>Advice Seeker Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "advisor_id",
            "description": "<p>Advice Giver ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.post('/myMentors', {\n  seeker_id: 1,\n  advisor_id: 3,\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "{\n    \"message\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userAdvisorGroupRoute.js",
    "groupTitle": "AdviserGroup",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/myMentors/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/myMentors/",
    "title": "Get all advisers",
    "version": "1.0.0",
    "name": "GetAllAdvisers",
    "group": "AdviserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('/myMentors'/7);",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 5,\n        \"username\": \"Buffet\",\n        \"password\": \"password\",\n        \"adviceGiver\": true,\n        \"expertise\": \"Finance\",\n        \"yearsOfExperience\": 10,\n        \"age\": 75,\n        \"email\": \"warren@berkshiregmail.com\",\n        \"img\": null\n    },\n {\n        \"id\": 6,\n        \"username\": \"Freud\",\n        \"password\": \"password\",\n        \"adviceGiver\": true,\n        \"expertise\": \"Counseling\",\n        \"yearsOfExperience\": 10,\n        \"age\": null,\n        \"email\": \"freudian@yahoo.com\",\n        \"img\": null\n    },...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userAdvisorGroupRoute.js",
    "groupTitle": "AdviserGroup",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/myMentors/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/myMentors/:id",
    "title": "Get users advisers",
    "version": "1.0.0",
    "name": "GetUsersAdvisers",
    "group": "AdviserGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('/myMentors'/7);",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 1,\n        \"username\": \"Amelia\",\n        \"password\": \"password\",\n        \"adviceGiver\": false,\n        \"expertise\": null,\n        \"yearsOfExperience\": null,\n        \"age\": 25,\n        \"email\": \"amelia@yahoo.com\",\n        \"img\": null\n    },\n {\n        \"id\": 2,\n        \"username\": \"Norah\",\n        \"password\": \"password\",\n        \"adviceGiver\": false,\n        \"expertise\": null,\n        \"yearsOfExperience\": null,\n        \"age\": 25,\n        \"email\": \"norah@gmail.com\",\n        \"img\": null\n    }...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userAdvisorGroupRoute.js",
    "groupTitle": "AdviserGroup",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/myMentors/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register a new user.",
    "version": "1.0.0",
    "name": "RegisterUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>Users email</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "adviceGiver",
            "description": "<p>If the user is a advice giver or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "expertise",
            "description": "<p>Advice Giver Expertise</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "yearsOfExperience",
            "description": "<p>Advice Giver Years of Experience</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "description": "<p>Users age</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n});\nrequest.post('/auth/register', {\n    \"username\": \"jeremiah\",\n    \"password\": \"password\",\n    \"email\": \"jeremiahtenbrink@gmail.com\",\n    \"adviceGiver\": true,\n    \"expertise\": \"life\",\n    \"yearsOfExperience\": 10,\n    \"age\": 33\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n     {\n        \"id\": 8,\n        \"username\": \"jeremiah\",\n        \"email\": \"jeremiahtenbrink@gmail.com\",\n        \"adviceGiver\": true,\n        \"expertise\": \"life\",\n        \"yearsOfExperience\": 10,\n        \"age\": 33\n      }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth-router.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/auth/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login a user",
    "version": "1.0.0",
    "name": "UserLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n});\nrequest.post('/auth/register', {\n    \"username\": \"jeremiah\",\n    \"password\": \"password\"\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "{\n  \"id\": 8,\n  \"username\": \"jeremiah\",\n  \"password\": \"$2a$10$hufhEDza64YtcfmTnOK2E.n2AV6aS9eUoiYZ54V91FkqYL6Dpewj2\",\n  \"adviceGiver\": true,\n  \"expertise\": \"life\",\n  \"yearsOfExperience\": 10,\n  \"age\": 33,\n  \"email\": \"jeremiahtenbrink@gmail.com\",\n  \"img\": null,\n  \"token\": \"some really long string\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth-router.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/auth/login"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/messages/:id",
    "title": "Deletes a message",
    "version": "1.0.0",
    "name": "DelMessage",
    "group": "Messages",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.delete('/messages/1');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 2,\n        \"message\": \"I am looking to become a software developer and want to know the quickest way to become employed and be competent.\",\n        \"private\": false,\n        \"user_id\": 2,\n        \"type\": \"Academics\",\n        \"title\": \"Help with career goals.\",\n        \"isAnswered\": false\n    },\n {\n        \"id\": 3,\n        \"message\": \"What kind of computer do you recommend for someone wanting to become a software developer?\",\n        \"private\": false,\n        \"user_id\": 2,\n        \"type\": \"Academics\",\n        \"title\": \"Which computer?\",\n        \"isAnswered\": false\n    },...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/messageRoute.js",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/messages/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/messages",
    "title": "Get all messages",
    "version": "1.0.0",
    "name": "GetMessages",
    "group": "Messages",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.put('users/4', {\n  id: 1,\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 1,\n        \"message\": \"I have question about my finances.  I would like to inquire into whether or not I buy call options or go long the S&P via an index fund.\",\n        \"private\": false,\n        \"user_id\": 1,\n        \"type\": \"Finance\",\n        \"title\": \"Help with money\",\n        \"isAnswered\": false\n    },\n {\n        \"id\": 2,\n        \"message\": \"I am looking to become a software developer and want to know the quickest way to become employed and be competent.\",\n        \"private\": false,\n        \"user_id\": 2,\n        \"type\": \"Academics\",\n        \"title\": \"Help with career goals.\",\n        \"isAnswered\": false\n    },...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/messageRoute.js",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/messages"
      }
    ]
  },
  {
    "type": "post",
    "url": "/messages",
    "title": "Post a message",
    "version": "1.0.0",
    "name": "PostMessage",
    "group": "Messages",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message text</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "private",
            "description": "<p>Message private indicator</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Message user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Message type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Message title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAnswered",
            "description": "<p>Message answered indicator</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.post('/messages', {\n  message: \"Updated message text\",\n  private: false,\n  user_id: 8,\n  type: \"Academics\",\n  title: \"Support for math.\",\n  isAnswered: false,\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 7,\n        \"message\": \"Here is a message\",\n        \"private\": true,\n        \"user_id\": 2,\n        \"type\": \"Academics\",\n        \"title\": \"Still need support\",\n        \"isAnswered\": false\n    }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/messageRoute.js",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/messages"
      }
    ]
  },
  {
    "type": "put",
    "url": "/messages/:id",
    "title": "Update a message",
    "version": "1.0.0",
    "name": "UpdateMessage",
    "group": "Messages",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>Message ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Message text</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Message private indicator</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>Message user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Message type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Message title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isAnswered",
            "description": "<p>Message answered indicator</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.put('/messages/1', {\n  message: \"Updated message text\",\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "routes/messageRoute.js",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/messages/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('users/4');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "{\n    \"id\": 4,\n    \"username\": \"Gwen\",\n    \"password\": \"password\",\n    \"adviceGiver\": false,\n    \"expertise\": null,\n    \"yearsOfExperience\": null,\n    \"age\": 23,\n    \"email\": \"gwenieLOU@aol.com\",\n    \"img\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get all users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('users/');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "[\n {\n        \"id\": 1,\n        \"username\": \"Amelia\",\n        \"password\": \"password\",\n        \"adviceGiver\": false,\n        \"expertise\": null,\n        \"yearsOfExperience\": null,\n        \"age\": 25,\n        \"email\": \"amelia@yahoo.com\",\n        \"img\": null\n    },\n {\n        \"id\": 2,\n        \"username\": \"Norah\",\n        \"password\": \"password\",\n        \"adviceGiver\": false,\n        \"expertise\": null,\n        \"yearsOfExperience\": null,\n        \"age\": 25,\n        \"email\": \"norah@gmail.com\",\n        \"img\": null\n    },\n ...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/users/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User token given when user logs in.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>Users id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Users password</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": true,
            "field": "email",
            "description": "<p>Users email</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "adviceGiver",
            "description": "<p>If the user is a advice giver or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "expertise",
            "description": "<p>Advice Giver Expertise</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "yearsOfExperience",
            "description": "<p>Advice Giver Years of Experience</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "description": "<p>Users age</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://advice-giver-backend.herokuapp.com',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.put('users/4', {\n  id: 1,\n  \"username\": \"username\",\n  \"password\": \"password\",\n  \"adviceGiver\": true,\n  \"expertise\": null,\n  \"yearsOfExperience\": null,\n  \"age\": 25,\n  \"email\": \"Some email address\",\n  \"img\": \"imgUrl\"\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Success",
          "content": "{\n    \"id\": 8,\n    \"username\": \"jeremiah1\",\n    \"password\": \"$2a$10$hufhEDza64YtcfmTnOK2E.n2AV6aS9eUoiYZ54V91FkqYL6Dpewj2\",\n    \"adviceGiver\": true,\n    \"expertise\": \"life\",\n    \"yearsOfExperience\": 10,\n    \"age\": 33,\n    \"email\": \"jeremiahtenbrink@gmail.com\",\n    \"img\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://advice-giver-backend.herokuapp.com/users/:id"
      }
    ]
  }
] });
