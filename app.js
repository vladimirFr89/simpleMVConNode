const http = require('http');
const Router = require('./core/Router');

http.createServer(function(req, res){
    const router = new Router();
    router.run(req, res);
})
.listen(3000, '127.0.0.1');