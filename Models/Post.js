const mongoose = require('../libs/mongoose')

const schema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    author: String
});

schema.methods.setTitle = function(title) {
    this.title = title;
}

schema.methods.getTitle = function() {
    return this.title;
}

schema.methods.setBody = function(body) {
    this.body = body;
}

schema.methods.getBody = function() {
    return this.body;
}

schema.methods.setDate = function(date) {
    this.date = date;
}

schema.methods.getDate = function() {
    return this.date;
}

schema.methods.setAuthor = function(author) {
    this.author = author;
}

schema.methods.getAuthor = function() {
    return this.author;
}

exports.Post = mongoose.model('Post', schema);