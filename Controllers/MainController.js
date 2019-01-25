const Controller = require('../core/Controller');

class MainController extends Controller {
    constructor(pathname) {
        super(pathname);
    }

    indexAction(req, res) {
        res.end('indexAction from MainController!');
    }

    aboutAction(req, res) {
        res.end('aboutAction from MainController!');
    }
}

module.exports = MainController;
