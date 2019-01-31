const path = require('path');
const pug = require('pug');
const View = require('../core/View');

class AuthView extends View {
    constructor(pathname, action) {
        super(pathname, action);
    }

    render(res) {
        const templateName = `${this._action}.pug`;
        const filePath = path.join(__dirname, 'templates/authView/', templateName);
        //res.end('render from AuthView! with template ' + filePath);
        res.end(
            pug.renderFile(filePath)
        );
    }
}

module.exports = AuthView;