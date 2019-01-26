const View = require('../core/View');
const fs = require('fs');
const path = require('path');

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
}

module.exports = MainView;