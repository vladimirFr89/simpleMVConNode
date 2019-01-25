const routing = require('../routing');
const url = require('url');
const MainController = require('../Controllers/MainController');
const AuthController = require('../Controllers/AuthController');

class Router {
    run(req, res) {
        const urlParsed = url.parse(req.url);

        const routObj = routing[urlParsed.pathname];

        if (routObj) {
            console.log(routObj);
            let controller;
            switch(routObj.controller) {
                case 'mainController':
                    controller = new MainController(urlParsed.pathname);
                    controller[routObj.action + 'Action'].call(controller, req, res);
                    break;
                
                case 'authController':
                    controller = new AuthController(urlParsed.pathname);
                    controller[routObj.action + 'Action'].call(controller, req, res);
                    break;        

                default:
                    res.statusCode = 404;
                    res.end('Page not found!');
            }
        }  
    }
}

module.exports = Router;