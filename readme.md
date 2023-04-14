# Consuelo

The repository houses the backend logic and API for consuelo health. The API is multitenant with two different type of users, the basic user and the admin user. The admin user is a super user who has read and write access on all the endpoints while the basic user has a limited access

All backend code follows the modular architecture. The business logic is abstracted in the handlers folder separated from the database models and routes

## Folder Structure

## Getting Started

### Pre-requisites and Local Development

Developers using this project should already have at least node 16 and npm installed on their local machines.

#### Backend

From the backend folder run `npm install`. All required packages are included in the package.json file.

To run the application run the following commands:

```
npm run dev
```

These commands put the application in development and directs our application to use the `index.js` file in our root folder. Working in development mode shows an interactive debugger in the console and restarts the server whenever changes are made.
The application is run on `http://127.0.0.1:3000/` by default and is a proxy in the frontend configuration.

## API Reference

### Getting Started

- Base URL: The address will be provided, which should be set as a proxy in the frontend configuration.
- Authentication: This version of the application require authentication by passing a Bearer token in the header of the request. To generate a token call the login or signup endpoint

### Error Handling

Errors are returned as JSON objects in the below format:

```
{
    "success": False,
    "error": 400,
    "message": "bad request"
}
```

The API will return three error types when requests fail:

- 400: Bad Request
- 404: Resource Not Found
- 422: Not Processable
- 500: Server Error

### Endpoints

#### POST /login

- General:
  - Returns a token
- Sample: `/login`

```{
        "token": "eyuyjhmky34545.67ygggyuhjngvtfrfghjkl
    }
```

#### POST /signup

- General:

  - Returns a token
  - Save a user in the db

  req body:

  ```
  {
      "firstName":"Neverwhere",
      "lastName":"Neil",
      "email":"example@yahoo.com",
      "password": "admin12345"
  }
  ```

- `curl http://127.0.0.1:3000/signup -X POST -H "Content-Type: application/json" -d '{"firstName":"Neverwhere", "lastName":"Neil", "email":"example@yahoo.com", "password": "admin12345"}'`

  res body

```{
    "token": "eyuyjhmky34545.67ygggyuhjngvtfrfghjkl
    }
```

#### GET /api/blog

- General:
  - Return all blogs on the db
- `/api/blog`
- header 'Authorisation: Bearer {{token}}'
  req body: null
  res body:
  ` { "message": "success", "data": [ { "image": { "data": { "type": "Buffer", "data": [ 49,49,49,49,49,49,49,32, 48,49,49,49,49,49,49,49, 49,49,32,49,49,49,49,49, 49,49,49,49,48,48,48,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,48, 48,48,49,49,49,49,49,49, 49,49,49,32,49,49,49,49, 49,49,49,49,49,48,48,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,48, 48,48,48,49,49,49,49,49, 49,49,49,49,32,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,32,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49, 49,49,49,49,49,49,49,49 ] }, "contentType": "image/jpeg" }, "_id": "6428013fb5dd4ea8e77a5e71", "title": "Seventh Blog", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.,", "authorId": "1234567890", "tags": [], "date": "2023-04-01T10:02:39.977Z", "comments": [], "__v": 0 } ] } `

#### GET /api/blog/:id

- General:
  - Return one blog with the corresponding id
- `/api/blog/:id`
- header 'Authorisation: Bearer {{token}}'

      req body: null
      res body:
      ```
          {

  "message": "success",
  "data": {
  "image": {
  "data": {
  "type": "Buffer",
  "data": [
  49,49,49,49,49,49,49,32,
  48,49,49,49,49,49,49,49,
  49,49,32,49,49,49,49,49,
  49,49,49,49,48,48,48,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,48,
  48,48,49,49,49,49,49,49,
  49,49,49,32,49,49,49,49,
  49,49,49,49,49,48,48,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,48,
  48,48,48,49,49,49,49,49,
  49,49,49,49,32,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,32,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49
  ]
  },
  "contentType": "image/jpeg"
  },
  "\_id": "6428013fb5dd4ea8e77a5e71",
  "title": "Seventh Blog",
  "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.,",
  "authorId": "1234567890",
  "tags": [],
  "date": "2023-04-01T10:02:39.977Z",
  "comments": [],
  "\_\_v": 0
  }
  }
  ```

#### POST /api/blog

- Admin Only:
  - create a blog
- `/api/blog`
- header 'Authorisation: Bearer {{token}}'
  req body:
  ` { "title": "Seventh Blog", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.,", "image": { "data": "1111111 0111111111 1111111110001111111111111111000111111111 1111111110011111111111111110000111111111 1111111111111111111111111111111111111111 1111111111111111111111111111111111111111", "contentType": "image/jpeg" }, "authorId": "1234567890" } `
  res body:

      ```
          {

  "message": "blog created",
  "data": {
  "title": "Seventh Blog",
  "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.,",
  "image": {
  "data": {
  "type": "Buffer",
  "data": [
  49,49,49,49,49,49,49,32,
  48,49,49,49,49,49,49,49,
  49,49,32,49,49,49,49,49,
  49,49,49,49,48,48,48,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,48,
  48,48,49,49,49,49,49,49,
  49,49,49,32,49,49,49,49,
  49,49,49,49,49,48,48,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,48,
  48,48,48,49,49,49,49,49,
  49,49,49,49,32,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,32,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49,
  49,49,49,49,49,49,49,49
  ]
  },
  "contentType": "image/jpeg"
  },
  "authorId": "1234567890",
  "tags": [],
  "\_id": "642e8f40457776e3cdac4be7",
  "date": "2023-04-06T09:22:08.734Z",
  "comments": [],
  "\_\_v": 0
  }
  }
  ```

#### PUT /api/blog/:id

- Admin Only:
  - edit a blog record
- `/api/blog/:id`
- header 'Authorisation: Bearer {{token}}'

req body:

```
   {
 "title": "Seventh Blog",
 "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.,",
 "image": {
   "data": "1111111 0111111111 1111111110001111111111111111000111111111 1111111110011111111111111110000111111111 1111111111111111111111111111111111111111 1111111111111111111111111111111111111111",
   "contentType": "image/jpeg"
 },
 "authorId": "1234567890"
}
```

res body:

```
   {
       "message": "update successful",
   }
```

#### PUDELETET /api/blog/:id

- Admin Only:
  - delete a blog record
- `/api/blog/:id`
- header 'Authorisation: Bearer {{token}}'

  req body: null
  res body:

  ```
       res body:
  ```

````
   {
       "message": "blog deleted",
   }
   ```
## Deployment N/A

N/A

## Authors
Yours truly, [Hassan] Caryn

## Acknowledgements
All awesome students and tutuors at Udacity, soon to be full stack extraordinaires!
````
