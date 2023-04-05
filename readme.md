# Consuelo

The reposiory houses the backend logic and API for consuelo health. The API is multitenant with two different type of users, the basic user and the admin user. The admin user is a super user who has read and write access on all the endpoints while the basic user has a limited access

All backend code follows the modular architecture. The business logic is abstracted in the handlers folder separated from the database models and routes

## Folder Structure

├── node_modules
├── src
│  ├── handlers
│  │    └── blog.js
│  │    └── mentalHealthTips.js
│  │    └── selfAffirmation.js
│  │    └── post.js
│  │    └── user.js
│  ├── models
│  │    └── blog.js
│  │    └── mentalHealthTips.js
│  │    └── selfAffirmation.js
│  │    └── user.js
│  ├── modules
│  │    └── auth.js
│  │    └── upload.js
│  ├── routes
│  │    └── blog.js
│  │    └── mentalHealthTips.js
│  │    └── post.js
│  │    └── selfAffirmation.js
│  │    └── user.js
│  │
│  ├── db.js
│  ├── index.js
│  ├── server.js

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

### Endpoints

#### POST /login
- General:
    - Returns a token
- Sample: `/login`

``` {
    "token": "eyuyjhmky34545.67ygggyuhjngvtfrfghjkl
    }
```

#### POST /signup
- General:
    - Returns a token
    - Save a user in the db
- `curl http://127.0.0.1:5000/books?page=3 -X POST -H "Content-Type: application/json" -d '{"title":"Neverwhere", "author":"Neil Gaiman", "rating":"5"}'`
``` {
    "token": "eyuyjhmky34545.67ygggyuhjngvtfrfghjkl
    }
```

#### GET /api/user
- Admin Only:
    - Return all users 
- `/api/user`


## Deployment N/A

N/A

## Authors
Yours truly, Coach Caryn 

## Acknowledgements 
All awesome students and tutuors at Udacity, soon to be full stack extraordinaires! 