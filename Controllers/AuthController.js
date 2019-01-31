const Controller = require('../core/Controller');
const AuthView = require('../Views/AuthView');

class AuthController extends Controller {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexAction(req, res) {
        //res.end('indexAction from AuthController! with pathname ' + this._pathname);
        const view = new AuthView(this._pathname, this._action);
        view.render(res);
    }

    registrationAction(req, res) {
        res.end('registrationAction from AuthController! with pathname ' + this._pathname);
    }

    loginAction(req, res) {
        let body = [];
        req.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            if (typeof body === 'string') {
                console.log(body);
            }
            res.end('loginAction from AuthController! with pathname ' + this._pathname);
        });
    }

    logoutAction(req, res) {
        res.end('logoutAction from AuthController! with pathname ' + this._pathname);
    }
}

module.exports = AuthController;