var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var userScema = require('./user.js');


var WishlistSchema = new Schema({
    strProductName: {
        type: String,
        required: true
    },
    strBuyURL: {
        type: String,
        required: true
    },
    strLargeImage: {
        type: String,
        required: true
    },
    dblProductPrice: {
      type: Number,
      required: true
    },
    dblProductSalePrice: {
      type: Number
    },
    strMerchantName: {
      type: String
    },
    strProductSKU: {
      type: String,
      required: true
    },
    txtLongDescription: {
      type: String
    },
    dtmCreationDate: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
