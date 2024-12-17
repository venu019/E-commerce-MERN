const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Role:{type: String, default:'user'}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
