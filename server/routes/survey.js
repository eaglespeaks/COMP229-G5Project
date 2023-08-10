let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to survey model
let Survey = require('../models/survey');

let surveyController = require('../controllers/survey');

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//get routes for the survey list page
router.get('/', surveyController.displaySurveyList);

// Get route for the Add page - CREATE operation

router.get('/add', requireAuth, surveyController.displayAddPage);

// Post route for processing the Add page - CREATE operation
router.post('/add', requireAuth, surveyController.processAddPage);

// Get route for displaying Edit page - UPDATE operation
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

// Post route for processing the Edit page - UPDATE operation
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

// Get route to perform Deletion - DELETE operation
router.get('/delete/:id', requireAuth, surveyController.performDelete);


module.exports = router;