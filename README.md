# rest-server
---

#### Usage
+ Install package `npm install @ravisahu88/restful-express-server`
+ Create an `.env` file with configs. (_list below_)
+ Require `const {loadConfig, RestServer} = require('@ravisahu88/restful-express-server');`
+ Creating instance

```javascript
// Load configurations or create custom object
const config = loadConfiguration();

// Create a server instance
const server = new RestfulExpressServer(config);

//  Load all middle-wares required for rest API development
server.pre();

// router group
let router = server.router();

// bind some routes
router.get('/ravi', (req, res) => {
    res.send({
        now: (Date.now()),
        ravi: true
    })
});
// binding any router
// or middleware
server.use(router);

// bind 404, exception handling, terminating middle-ware and start listening.
server.post().terminating().listen();
```

---

#### Supported config variables
* `BODY_SIZE_LIMIT`, _Default: '100kb'_
* `DEFAULT_ERROR_MESSAGE`, _Default: 'Some error occured'_
* `logger`, _Default: console_
* `injectException`, `Default: () => {}` 
* `PORT`, _Default: 5000_

#### Silent features
+ Correlation id logging on exception.
+ Helmet initialized by default.
+ Compression & JSON Body parsing.
+ CORS enabled.
+ Support for overriding logger.
+ Support for injecting Custom Exception handler.