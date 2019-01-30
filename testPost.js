const Post = require('./Models/Post').Post;

const post = new Post();
post.setTitle('Post 5');
post.setBody('Text for post 5');
post.setAuthor('Vladimir Fedorin');

post.save(function(err, post) {
    if (err) return console.error(err);

    console.log(arguments);
});