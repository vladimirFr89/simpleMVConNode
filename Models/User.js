const mongoose = require('../libs/mongoose');

const schema = new mongoose.Schema({
    login: String,
    psw: String
});

schema.methods.getLogin = function() {
    return this.login;
}

schema.methods.setLogin = function(login) {
    this.login = login;
}

schema.methods.getPsw = function() {
    return this.psw;
}

schema.methods.setPsw = function(password) {
    this.psw = password;
}

exports.User = mongoose.model('User', schema);