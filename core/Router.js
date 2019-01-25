const routing = require('../routing');
const url = require('url');
const MainController = require('../Controllers/MainController');

class Router {
    run(req, res) {
        const urlParsed = url.parse(req.url);
        const controllerPattern = /^\/[a-z]+\/[a-z]+$/;
        const actionPattern = /^\/(?![a-z]+)|^\/[a-z]+$/;
        if (actionPattern.test(urlParsed.pathname)){
            const controller = new MainController(urlParsed.pathname);
            const action = urlParsed.pathname.substr(1);
            
            switch(action) {
                case '':
                    console.log('index!');
                    controller.indexAction(req, res);
                    break;
                case 'about':
                    controller.aboutAction(req, res);
                    break;
                default:
                    res.statusCode = 404;
                    res.end('Page not found!');
                    break;
            }
            
        } else if (controllerPattern.test(urlParsed.pathname)){
            const params = urlParsed.pathname.split('/');
            const controllerName = params[1];
            const action = params[2];            
            res.end(`use controller: ${controllerName} with action ${action}`);
        } else {
            res.status = 404;
            res.end('Im am router! I use ' + routing['/']['controller']);
        }
        
    }
}

module.exports = Router;