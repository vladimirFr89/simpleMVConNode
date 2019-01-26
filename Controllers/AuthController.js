const Controller = require('../core/Controller');

class AuthController extends Controller {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexAction(req, res) {
        res.end('indexAction from AuthController! with pathname ' + this._pathname);
    }

    registrationAction(req, res) {
        res.end('registrationAction from AuthController! with pathname ' + this._pathname);
    }

    loginAction(req, res) {
        res.end('loginAction from AuthController! with pathname ' + this._pathname);
    }

    logoutAction(req, res) {
        res.end('logoutAction from AuthController! with pathname ' + this._pathname);
    }
}

module.exports = AuthController;