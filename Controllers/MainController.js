const Controller = require('../core/Controller');
const MainView = require('../Views/MainView');

class MainController extends Controller {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexAction(req, res) {
        //res.end('indexAction from MainController! with pathname ' + this._pathname);
        const view = new MainView(this._pathname, this._action);
        view[this._action + 'View'].call(view, res);
    }

    aboutAction(req, res) {
        //res.end('aboutAction from MainController! with pathname ' + this._pathname);
        const view = new MainView(this._pathname, this._action);
        view[this._action + 'View'].call(view, res);
    }
}

module.exports = MainController;
