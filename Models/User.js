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

schema.statics.authorize = function(login, password, callback) {
    const User = this;
    User.findOne({ login: login }, function (err, user) {
        if (err) callback(err, null);
                
        if (user === null) {
            user = new User({ login: login, psw: password });
            user.save(function(err, user) {
                if (err) callback(err, null);
                console.log('!!!save');
                callback(null, user);
            });

        } else {
            console.log('!!!Founded');
            callback(null, user);
        }
    });

}

exports.User = mongoose.model('User', schema);