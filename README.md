# Advice Giver v1.0.0

Api for Advice Giver

- [AdviserGroup](#advisergroup)
	- [Add user adviser](#add-user-adviser)
	- [Get all advisers](#get-all-advisers)
	- [Get users advisers](#get-users-advisers)
	
- [Auth](#auth)
	- [Register a new user.](#register-a-new-user.)
	- [Login a user](#login-a-user)
	
- [Users](#users)
	- [Get user](#get-user)
	- [Get all users](#get-all-users)
	- [Update user](#update-user)
	


# AdviserGroup

## Add user adviser



	POST /myMentors/

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| seeker_id			| Integer			|  <p>Advice Seeker Id</p>							|
| advisor_id			| Integer			|  <p>Advice Giver ID</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.post('/myMentors', {
  seeker_id: 1,
  advisor_id: 3,
});
```

### Success Response

Request Success

```
{
    "message": "created"
}
```
## Get all advisers



	GET /myMentors/

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('/myMentors'/7);
```

### Success Response

Request Success

```
[
 {
        "id": 5,
        "username": "Buffet",
        "password": "password",
        "adviceGiver": true,
        "expertise": "Finance",
        "yearsOfExperience": 10,
        "age": 75,
        "email": "warren@berkshiregmail.com",
        "img": null
    },
 {
        "id": 6,
        "username": "Freud",
        "password": "password",
        "adviceGiver": true,
        "expertise": "Counseling",
        "yearsOfExperience": 10,
        "age": null,
        "email": "freudian@yahoo.com",
        "img": null
    },...
 ]
```
## Get users advisers



	GET /myMentors/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('/myMentors'/7);
```

### Success Response

Request Success

```
[
 {
        "id": 1,
        "username": "Amelia",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "amelia@yahoo.com",
        "img": null
    },
 {
        "id": 2,
        "username": "Norah",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "norah@gmail.com",
        "img": null
    }...
 ]
```
# Auth

## Register a new user.



	POST /auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>Users username</p>							|
| password			| String			|  <p>Users password</p>							|
| email			| Email			|  <p>Users email</p>							|
| adviceGiver			| boolean			|  <p>If the user is a advice giver or not</p>							|
| expertise			| String			| **optional** <p>Advice Giver Expertise</p>							|
| yearsOfExperience			| Number			| **optional** <p>Advice Giver Years of Experience</p>							|
| age			| Number			| **optional** <p>Users age</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
});
request.post('/auth/register', {
    "username": "jeremiah",
    "password": "password",
    "email": "jeremiahtenbrink@gmail.com",
    "adviceGiver": true,
    "expertise": "life",
    "yearsOfExperience": 10,
    "age": 33
});
```

### Success Response

Request Success

```
[
     {
        "id": 8,
        "username": "jeremiah",
        "email": "jeremiahtenbrink@gmail.com",
        "adviceGiver": true,
        "expertise": "life",
        "yearsOfExperience": 10,
        "age": 33
      }
 ]
```
## Login a user



	POST /auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>Users username</p>							|
| password			| String			|  <p>Users password</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
});
request.post('/auth/register', {
    "username": "jeremiah",
    "password": "password"
});
```

### Success Response

Request Success

```
{
  "id": 8,
  "username": "jeremiah",
  "password": "$2a$10$hufhEDza64YtcfmTnOK2E.n2AV6aS9eUoiYZ54V91FkqYL6Dpewj2",
  "adviceGiver": true,
  "expertise": "life",
  "yearsOfExperience": 10,
  "age": 33,
  "email": "jeremiahtenbrink@gmail.com",
  "img": null,
  "token": "some really long string"
}
```
# Users

## Get user



	GET /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('users/4');
```

### Success Response

Request Success

```
{
    "id": 4,
    "username": "Gwen",
    "password": "password",
    "adviceGiver": false,
    "expertise": null,
    "yearsOfExperience": null,
    "age": 23,
    "email": "gwenieLOU@aol.com",
    "img": null
}
```
## Get all users



	GET /users/

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('users/');
```

### Success Response

Request Success

```
[
 {
        "id": 1,
        "username": "Amelia",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "amelia@yahoo.com",
        "img": null
    },
 {
        "id": 2,
        "username": "Norah",
        "password": "password",
        "adviceGiver": false,
        "expertise": null,
        "yearsOfExperience": null,
        "age": 25,
        "email": "norah@gmail.com",
        "img": null
    },
 ...
 ]
```
## Update user



	PUT /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User token given when user logs in.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Integer			| **optional** <p>Users id</p>							|
| username			| String			| **optional** <p>Users username</p>							|
| password			| String			| **optional** <p>Users password</p>							|
| email			| Email			| **optional** <p>Users email</p>							|
| adviceGiver			| boolean			| **optional** <p>If the user is a advice giver or not</p>							|
| expertise			| String			| **optional** <p>Advice Giver Expertise</p>							|
| yearsOfExperience			| Number			| **optional** <p>Advice Giver Years of Experience</p>							|
| age			| Number			| **optional** <p>Users age</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'https://advice-giver-backend.herokuapp.com',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.put('users/4', {
  id: 1,
  "username": "username",
  "password": "password",
  "adviceGiver": true,
  "expertise": null,
  "yearsOfExperience": null,
  "age": 25,
  "email": "Some email address",
  "img": "imgUrl"
});
```

### Success Response

Request Success

```
{
    "id": 8,
    "username": "jeremiah1",
    "password": "$2a$10$hufhEDza64YtcfmTnOK2E.n2AV6aS9eUoiYZ54V91FkqYL6Dpewj2",
    "adviceGiver": true,
    "expertise": "life",
    "yearsOfExperience": 10,
    "age": 33,
    "email": "jeremiahtenbrink@gmail.com",
    "img": null
}
```

