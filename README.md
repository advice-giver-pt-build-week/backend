# Advice Giver v1.0.0

Api for Advice Giver

- [Auth](#auth)
	- [Register a new user.](#register-a-new-user.)
	- [Login a user](#login-a-user)
	


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

