const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profileImageUrl:{
        type: String,
        default: null
    },
    role:{
        type: String,
        enum:["admin","member"], default:"member"
    },
    date:{
        type: Date,
        default: Date.now
    },
  },
  {timestamps: true}
);
  const User = mongoose.model('User', UserSchema);
  module.exports = User;