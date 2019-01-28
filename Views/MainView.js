const View = require('../core/View');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

class MainView extends View {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexView(res) {
        const filePath = path.join(__dirname, 'templates/mainView/index.tmpl.html');
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
        //res.end('This is index view for action ' + this._action);
    }

    aboutView(res) {
        const filePath = path.join(__dirname, 'templates/mainView/about.pug');
        const compileFn = pug.compileFile(filePath);
        res.end(compileFn({
            name: 'Vladimir!'
        }));
    }
}

module.exports = MainView;