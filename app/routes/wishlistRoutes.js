var express = require('express');
var wishlistRouter = express.Router();
var jwt = require('jsonwebtoken');
var Wishlist = require('../models/wishlist.js');
var config = require('../../config/db.js');
var bcrypt = require("bcrypt");

wishlistRouter.get('/', function(req, res) {
    Wishlist.find({
        user: req.user._doc._id
    }, function(err, wishlists) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(wishlists);
        }
    });

});

wishlistRouter.post('/', function(req, res) {
    var wishlist = new Wishlist(req.body);
    // console.log(wishlist);
    wishlist.user = req.user._doc._id;
    wishlist.save(function(err, newWishlist) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newWishlist);
        }
    });
});

wishlistRouter.delete('/:strProductSKU', function(req, res) {
    Wishlist.remove({
        strProductSKU: req.params.strProductSKU
    }, function(err, removedWishlist) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(removedWishlist);
        }
    });
});



module.exports = wishlistRouter;
