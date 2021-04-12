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
 *      description: get the login page
 *      responses:
 *          200:
 *              description: html page with the log in
 */
app.get('/login', (req, res) => {
    res.send('login');
});

/**
 * @swagger
 * /login:
 *  post:
 *      description: send the login data to the server
 *      parameters:
 *          - in : body
 *            name: credentials
 *            description: user's email and password
 *            schema:
 *              type: object
 *      responses:
 *          200:
 *              description: redirects to principal
 *          403:
 *              description: access denied, sends the user an alert that credentials aren't valid
 */
app.post('/login', (req, res) => {
    res.send('login');
});

/**
 * @swagger
 * /registro:
 *  get:
 *      description: get the registro page
 *      responses:
 *          200:
 *              description: html page with the registro page 
 */
app.get('/registro', (req, res) => {
    res.send('registro');
});

/**
 * @swagger
 * /registro:
 *  post:
 *      description: sends the user's new credentials
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
 */
app.post('/registro', (req, res) => {
    res.send('registro');
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
 *            description: param descriptikon
 *            schema:
 *              type: string|number|boolean|object
 *      responses:
 *          200:
 *              description: success call to the endpoint
 */