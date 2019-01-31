const routing = require('../routing');
const url = require('url');
const MainController = require('../Controllers/MainController');
const AuthController = require('../Controllers/AuthController');
const StaticController = require('../Controllers/StaticController');

class Router {
    constructor(){
        this._staticPath = '';
    }

    set staticPath(path) {
        this._staticPath = path;
    }

    run(req, res) {

        const urlParsed = url.parse(req.url);

        const routObj = routing[urlParsed.pathname];

        if (routObj) {
            console.log(routObj);
            let controller;
            switch(routObj.controller) {
                case 'mainController':
                    controller = new MainController(urlParsed.pathname, routObj.action);
                    controller[routObj.action + 'Action'].call(controller, req, res);
                    break;
                
                case 'authController':
                    controller = new AuthController(urlParsed.pathname, routObj.action);
                    controller[routObj.action + 'Action'].call(controller, req, res);
                    break;        

                default:
                    res.statusCode = 404;
                    res.end('Page not found!');
            }
        } else {
            console.log(urlParsed.pathname);
            const patternStatic = /\.css$|\.js$/;
            if (patternStatic.test(urlParsed.pathname)){
                const controller = new StaticController(urlParsed.pathname, '');
                controller.serve(this._staticPath, res);
            }
        }  
    }
}

module.exports = Router;