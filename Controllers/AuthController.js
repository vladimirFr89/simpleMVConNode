const Controller = require('../core/Controller');
const BodyParser = require('../helpers/BodyParser');
const User = require('../Models/User').User;
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
        const parser = new BodyParser();
        req.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            parser.read(chunk);
        }).on('end', () => {
            console.log(parser.getBody());
            const login = parser.getBody().login;
            const password = parser.getBody().password;
            if (login && password && login !== '' && password !== '') {
                User.findOne({ login: login }, function (err, user) {
                    if (err) return console.error(err);
                    console.log('!!!find');
                    console.log(arguments);
                    if (user === null) {
                        const user = new User({ login: login, psw: password });
                        user.save(function(err, vasya) {
                            if (err) return console.error(err);
                            console.log('!!!save');
                            console.log(arguments);
                            res.end(`Hello! ${arguments[1]}`);
                            return;
                        });

                    } else {
                        if (user.getPsw() === password) {
                            const cookie = `uid=${user._id}`
                            res.setHeader('Set-Cookie', cookie);
                            res.end(`Welcome ${user.getLogin()}!`);
                            return;
                        } else {
                            res.end('Login or password is faild!');
                            return;
                        }
                    }
                });
            } else {
                res.end('Login or password is faild!');
            }
            
        });
    }

    logoutAction(req, res) {
        res.end('logoutAction from AuthController! with pathname ' + this._pathname);
    }
}

module.exports = AuthController;