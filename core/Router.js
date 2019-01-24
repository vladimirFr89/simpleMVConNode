const routing = require('../routing');

class Router {
    run(req, res) {
        res.end('Im am router! I use ' + routing['/']['controller']);
    }
}

module.exports = Router;