const mongoose = require('mongoose');
const User = require('./Models/User').User;

const user = new User({ login: 'first', psw: '123' });
console.log(user.getLogin());

User.find(function(err, res) {
    if (err) return console.error(err);

    console.log(res);
    console.log(res.id);
    console.log(res.getLogin());
    console.log(res.getPsw());
    mongoose.connection.close();
});
//const vasya = new User({login: 'radix', psw: 'qwerty000'});

//const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     vasya.save(function(err, vasya) {
//         if (err) return console.error(err);
//         console.log(arguments);
//         db.close();
//     });
//     User.findOne(function(err, res) {
//         if (err) return console.error(err);

//         console.log(res);
//         db.close();
//     });
// });