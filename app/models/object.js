var mongoose = require('mongoose'); // Import Mongoose Package
var Schema = mongoose.Schema; // Assign Mongoose Schema function to variable
var bcrypt = require('bcrypt-nodejs'); // Import Bcrypt Package
var titlize = require('mongoose-title-case'); // Import Mongoose Title Case Plugin
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin
//var ObjectId = Schema.ObjectId;

var ObjectSchema = new Schema({
    user_id: { type: String },
    title: { type: String, required: true },
    creator: { type: String, required: true },
    subject: [String],
    description: { type: String, required: true },
    year: { type: String, required: true },
    period: { type: String, required: true },
    identifier: { type: String, required: true },
    authors_rights: { type: String, required: true },
    property_rights: { type: String, required: true },
    format: { type: String, default: 'MimeType' },
    classification: { type: String, required: true },
    work_type: { type: String, required: true },
    measurements: { type: String, required: true },
    materials: { type: String, required: true },
    techniques: { type: String, required: true },
    placement: { type: String, required: true },
    art_movement: { type: String, required: true },
    media_object: { type: String, required: true },
});

module.exports = mongoose.model('Object', ObjectSchema); // Export User Model for us in API
