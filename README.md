
# Order Management REST API

Welcome to this order management system. This is a basic Node.js RESTful API modeled after an order management system. This API handles GET, PATCH, PULL, and DELETE requests for Orders, Products, and Users. Data is stored in a MongoDB Atlas database.

## Key Takeaways

**Node.js:** This project served as my introduction to Node.js/Express, its basic capabilities and some of its related packages. In addition, fundamental Separation of Concerns/MVC design principles were implemented for cleanliness.

**MongoDB:** The work with MongoDB helped refine some of the NoSQL fundamentals learned in school. It also served as an introduction to related tools such as MongoDB’s cloud platform Atlas, the Mongoose package for model building and connecting to the cloud DB, and the Multer package for uploading images. 

**REST:** I learned a lot about the RESTful style of design/architecture as well as the constraints all REST services should adhere to. Although I have interacted with REST APIs as a client (including HERE and Twitter) understanding the server side of this relationship has increased my comfort as an API user as well. 

**Token-Based Authentication:** I learned that REST APIs are stateless, which is why token-based authentication is preferred as sessions are not an option. Implementing a token-based authentication reinforced knowledge previously gained through school based Cyber Security and Web Development classes as well as introduced me to JWT.

**Client Server Interactions via HTTP:** Previous knowledge of client-server interactions was strengthened as well as learning some API testing practices via the Postman tool.

## If I Revisited This Project, 
#### I Would...

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..expand the object fields for a more fleshed out experience.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..add logic to process requests to retrieve filtered results and more intrinsic search functionality.  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..build a basic web page to interact with this API for easier demoing 

## Installation

Once project is pulled, enter the main folder location and run npm start command to run the service.

```bash
  cd ../[PROJECT-LOCATION]
  npm start
```
    
## Usage/Examples

This API takes standard JSON requests, however certain routes do require authorization. To get a token a POST request can be sent to 

```html
/user/login
```
With the following JSON body

```JSON
{
    "email": "tester@test.com",
    "password": "tester"
}
```
The token that is returned should be included as an “Authorization” header for all subsequent requests. 

![token-example](https://user-images.githubusercontent.com/64343445/148490317-62ce2b5c-c6d1-40a9-9889-6df758874dea.gif)

## Credits

This project was built as part of a project based learning lesson from [Academind.](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)

