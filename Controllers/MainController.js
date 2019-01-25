const Controller = require('../core/Controller');

class MainController extends Controller {
    constructor(pathname) {
        super(pathname);
    }

    indexAction(req, res) {
        res.end('indexAction from MainController! with pathname ' + this.pathname);
    }

    aboutAction(req, res) {
        res.end('aboutAction from MainController! with pathname ' + this.pathname);
    }
}

module.exports = MainController;
