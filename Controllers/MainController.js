const Controller = require('../core/Controller');
const MainView = require('../Views/MainView');
const Post = require('../Models/Post').Post;

class MainController extends Controller {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexAction(req, res) {
        //res.end('indexAction from MainController! with pathname ' + this._pathname);
        const pathname = this._pathname;
        const action = this._action;
        Post.find(function(err, result) {
            if (err) return console.error(err);
            
            const view = new MainView(pathname, action);
            view[action + 'View'].call(view, res, result);

        });
    }

    aboutAction(req, res) {
        //res.end('aboutAction from MainController! with pathname ' + this._pathname);
        const view = new MainView(this._pathname, this._action);
        view[this._action + 'View'].call(view, res);
    }
}

module.exports = MainController;
