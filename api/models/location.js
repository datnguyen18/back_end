const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ReviewSchema = require('./review');
const LocationSchema = new Schema({
    _idDoctor: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        type: Object,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    imageUrls: [{
        type: String,
        required: true
    }],
    rating: {
        type: Number,
        default: 0
    },
    coordinates: {
        latitude: {
            type: Number,
            default: 0,
        },
        longitude: {
            type: Number,
            default: 0
        }
    },
    timePeriod: {
        from: {
            type: Number,
            default: 0
        },
        to: {
            type: Number,
            default: 0
        }
    },
    reviews: {
      type: [ReviewSchema]
    },
    numberOfFollows: {
        type: Number,
        default: 0
    },
    date: {
      type: Date,
      default: new Date()
    }
});

const Location = mongoose.model('locations', LocationSchema);
module.exports = Location;