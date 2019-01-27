const path = require('path');
const fs = require('fs');
const Controller = require('../core/Controller');

class StaticController extends Controller {
    constructor(pathname, action) {
        super(pathname, action);
    }

    serve(staticDir, res){
        const staticDirName = path.basename(staticDir);
        const lastPath = this._pathname.split(staticDirName).pop();
        const filePath = path.join(staticDir, lastPath);
        const fileExt = path.extname(path.basename(filePath));

        if (fileExt === '.css') {
            res.setHeader('Content-Type', 'text/css');
        }

        if (fileExt === '.js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
        
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
}

module.exports = StaticController;