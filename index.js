const express = require('express');
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title":"IRDb Documentation",
            "descrpition" : "Documentation from IRDb users",
            "version": "1.0.0",
            "servers": ["http://localhost:4200"]
        }
    },
    apis: ['index.js']
}

const port = 3000;
app.get('/', (req,res) => {
    res.send('app works');
});

/**
 * @swagger
 * /login:
 *  get:
 *      description: get the login page (MongoDB)
 *      responses:
 *          200:
 *              description: html page with the log in
 *          500:
 *              description: server error
 */

app.get('/login', (req, res) => {
    res.send('login');
});

/**
 * @swagger
 * /login:
 *  post:
 *      description: send the login data to the server (MongoDB)
 *      parameters:
 *          - in : body
 *            name: credentials
 *            description: user's email and password
 *            schema:
 *              type: object
 *      responses:
 *          200:
 *              description: redirects to principal
 *          401:
 *              description: access denied, sends the user an alert that credentials aren't valid
 *          500:
 *              description: server error
 */
app.post('/login', (req, res) => {
    res.send('login');
});

/**
 * @swagger
 * /registro:
 *  get:
 *      description: get the registro page (MongoDB)
 *      responses:
 *          200:
 *              description: html page with the registro page 
 *          500:
 *              description: server error
 */
app.get('/registro', (req, res) => {
    res.send('registro');
});

/**
 * @swagger
 * /registro:
 *  post:
 *      description: sends the user's new credentials (MongoDB)
 *      parameters:
 *          - in : body
 *            name: credentials 
 *            description: new user credentials
 *            schema:
 *              type: object
 *      responses:
 *          200:
 *              description: redirects to principal
 *          409:
 *              description: Conflict, sends the user an alert that the user already exists
 *          500:
 *              description: server error
 */
app.post('/registro', (req, res) => {
    res.send('registro');
});

/**
 * @swagger
 * /main:
 *  get:
 *      description: get the main page and displays the recipes (EDAMAM)
 *      responses:
 *          200:
 *              description: gets EDAMAM and puts it in the html
 *          500:
 *              description: server error
 */
app.get('/main', (req, res) => {
    res.send('main');
});

/**
 * @swagger
 * /recipe:
 *  get:
 *      description: gets the recipe by name (EDAMAM)
 *      parameters:
 *          - in : body
 *            name: recipeName
 *            description: get the whole recipe
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: returns and puts the recipe
 *          500:
 *              description: server error
 */
app.get('/recipe', (req, res) => {
    res.send('recipe');
});

/**
 * @swagger
 * /lists:
 *  get:
 *      description: gets the recipe by name (MongoDB)
 *      parameters:
 *          - in : body
 *            name: userID
 *            description: gets the users lists
 *            schema:
 *              type: number
 *      responses:
 *          200:
 *              description: returns the users lists if any available
 *          500:
 *              description: server error
 */
app.get('/lists', (req, res) => {
    res.send('list');
});

/**
 * @swagger
 * /lists:id:
 *  get:
 *      description: gets the recipes in that ID created (MongoDB) & (EDAMAM)
 *      parameters:
 *          - in : url
 *            name: listId
 *            description: The id of the list created by the user
 *            schema:
 *              type: number
 *      responses:
 *          200:
 *              description: returns the id from the recipes that the user added and then returns all the recipes
 *          500:
 *              description: server error
 */
app.get('/lists:id', (req, res) => {
    res.send('list-details');
})

/**
 * @swagger
 * /users:
 *  get:
 *      description: get the user details and the users list (MongoDB)
 *      parameters:
 *          - in : body
 *            name: userID
 *            description: get the users information
 *            schema:
 *              type: number
 *      responses:
 *          200:
 *              description: reeturns the users information as well as its created playlists
 *          500:
 *              description: server error
 */
app.get('/users', (req, res) => {
    res.send('users');
})
//Swagger
const swaggerDoc = swaggerJsDoc(swaggerOptions);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(port, () => {
    console.log('app listening in port' + port);
});

/**
 * @swagger
 * /endpoint:
 *  get|post|put:
 *      description: dummy endpoint
 *      parameters:
 *          - in : body|query|url
 *            name: param name
 *            description: param description
 *            schema:
 *              type: string|number|boolean|object
 *      responses:
 *          200:
 *              description: success call to the endpoint
 *          500:
 *              description: server error
 */