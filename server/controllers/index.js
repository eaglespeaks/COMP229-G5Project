var express = require('express');
var router = express.Router();


module.exports.displayHomePage = function(req, res, next) {
    res.render('index', {title: 'Express' });
};

module.exports.displayAboutPage = function(req, res, next) {
    res.render('index', { title: 'About' });
  };

module.exports.displayProductsPage = function(req, res, next) {
    res.render('index', { title: 'Projects' });
  };

module.exports.displayServicesPage = function(req, res, next) {
    res.render('index', { title: 'Services' });
  };

module.exports.displayContactPage = function(req, res, next) {
    res.render('index', { title: 'Contact Us' });
  };