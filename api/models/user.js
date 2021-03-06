const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    follows: [{type: Schema.Types.ObjectId, ref: 'locations'}],
    avatar: {
        type: String,
        default: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'
    },
    permission: {
      type: String,
      default: 'USER'
    },
    imageOfIdentificationBack:{
      type:String,
    },
    imageOfIdentificationFront:{
      type:String,
    },
    imageOfDiploma: {
      type:String,
    },
    imageOfReservation:{
      type:String,
    },
    requireVerify: {
      type:Boolean,
      default: false
    },
    departments:[{
      type: String
    }],
    conversations:[{
      type: Schema.Types.ObjectId,
      ref: 'conversations'
    }],
    ticketInfo:{
      type: Array
    }
});
UserSchema.plugin(uniqueValidator)
const User = mongoose.model('users', UserSchema);

module.exports = User;
