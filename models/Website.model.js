var mongoose = require('mongoose');
var search = require('mongoose-search');
var Schema = mongoose.Schema;

var webSchema = new Schema({
    title: { type: String, required: true },
    submittedBy: { id: { type: Schema.ObjectId, ref: 'User' } },
    url: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

webSchema.plugin(search, {
    fields: ['title', 'url', 'description'],
});

module.exports = mongoose.model('Website', webSchema);