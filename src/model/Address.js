const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const address = new Schema({
    name: { type: String, required: true },
    firstname: {type: String, required: true },
    phone: {type: String, require: true}
}, {
    collection : "address"
});

module.exports = mongoose.model('Address', address);
