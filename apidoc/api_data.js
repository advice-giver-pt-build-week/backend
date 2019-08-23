define({ "api": [
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
  }
] });
