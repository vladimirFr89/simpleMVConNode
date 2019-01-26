const routing = require('../routing');
const url = require('url');
const MainController = require('../Controllers/MainController');
const AuthController = require('../Controllers/AuthController');
const fs = require('fs');
const path = require('path');

class Router {
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
            const pattern = /\.js$/;
            if (pattern.test(urlParsed.pathname)){
                const filePath = path.join(__dirname, '../', urlParsed.pathname);
                fs.readFile(filePath, (err, data) => {
                    if (err) throw err;

                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(data);
                })
            }
        }  
    }
}

module.exports = Router;