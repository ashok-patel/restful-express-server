
try{
    let {loadConfiguration, RestfulExpressServer} = require('./..');

    const config = {PORT: 5000} || loadConfiguration();
    const server = new RestfulExpressServer(config);


    let router = server.router();
    router.get('/ashok', (req, res) => {
        res.send({
            now: (Date.now()),
            ashok: true
        })
    });

    server.pre();

    server.use((req, res, next) => {
        console.log('Custom Server - use');
        next();
    }, (req, res, next) => {
        console.log('Custom Server - use next');
        next();
    }, (req, res, next) => {
        console.log('Custom Server - use next to next');
        next();
    });

    server.use('/prefix', router);

    server.getServer().get('/', (req, res) => {
        res.send({
            now: (new Date())
        });
    });
    server.post().terminating().listen();
}catch(ee){
    console.error(ee)
}
