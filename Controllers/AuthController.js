const Controller = require('../core/Controller');

class AuthController extends Controller {
    constructor(pathname) {
        super(pathname);
    }

    indexAction(req, res) {
        res.end('indexAction from AuthController! with pathname ' + this.pathname);
    }

    registrationAction(req, res) {
        res.end('registrationAction from AuthController! with pathname ' + this.pathname);
    }

    loginAction(req, res) {
        res.end('loginAction from AuthController! with pathname ' + this.pathname);
    }

    logoutAction(req, res) {
        res.end('logoutAction from AuthController! with pathname ' + this.pathname);
    }
}

module.exports = AuthController;