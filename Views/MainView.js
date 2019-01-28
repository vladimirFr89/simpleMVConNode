const View = require('../core/View');
const path = require('path');
const pug = require('pug');

class MainView extends View {
    constructor(pathname, action) {
        super(pathname, action);
    }

    indexView(res) {
        const filePath = path.join(__dirname, 'templates/mainView/index.pug');
        
        const posts = [
            { title: "Post Title 1", postAuthor: "Vladimir Fedorin", postDate: "27.01.2019", postLink: "#", postText: "Some text for post 1"},
            { title: "Post Title 2", postAuthor: "Vladimir Fedorin", postDate: "25.01.2019", postLink: "#", postText: "Some text for post 2"},
            { title: "Post Title 3", postAuthor: "Vladimir Fedorin", postDate: "24.01.2019", postLink: "#", postText: "Some text for post 3"}
        ];
        
        res.end(
            pug.renderFile(filePath, {
                data: posts
            })
        );
    }

    aboutView(res) {
        const filePath = path.join(__dirname, 'templates/mainView/about.pug');
        res.end(
            pug.renderFile(filePath, { 
                name: 'Vladimir!'
            })
        );
    }
}

module.exports = MainView;