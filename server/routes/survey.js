let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to survey model
let Survey = require('../models/survey');

let surveyController = require('../controllers/survey');

//get routes for the survey list page
router.get('/', surveyController.displaySurveyList);

// Get route for the Add page - CREATE operation

router.get('/add', surveyController.displayAddPage);

// Post route for processing the Add page - CREATE operation
router.post('/add', surveyController.processAddPage);

// Get route for displaying Edit page - UPDATE operation
router.get('/edit/:id', surveyController.displayEditPage);

// Post route for processing the Edit page - UPDATE operation
router.post('/edit/:id', surveyController.processEditPage);

// Get route to perform Deletion - DELETE operation
router.get('/delete/:id', surveyController.performDelete);


module.exports = router;