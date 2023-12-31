let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Survey = require('../models/survey');

module.exports.displaySurveyList = async (req, res, next) =>{
    try {
        let surveyList = await Survey.find();
        //console.log(surveyList)

        res.render('survey/list', {
            title: 'Surveys',
            SurveyList: surveyList,
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('survey/add', {
            title: 'Add Survey',
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.processAddPage = async (req, res, next) =>{
    let newSurvey = new Survey({
        "Name": req.body.Name,
        "Owner": req.body.Owner,
        "Released": req.body.Released,
        "Description": req.body.Description,
        "Status": req.body.Status
    });

    try{
        await newSurvey.save();
        res.redirect('/survey_list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try{
        let surveyToEdit = await Survey.findById(id);
        res.redirect('survey/edit', {
            title: 'Edit Survey',
            survey: surveyToEdit,
            displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedSurvey = {
        "Name": req.body.Name,
        "Owner": req.body.Owner,
        "Released": req.body.Released,
        "Description": req.body.Description,
        "Status": req.body.Status
    };

    try{
        await Survey.updateOne({_id: id}, updatedSurvey);
        res.redirect('/survey_list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try{
        await Survey.findByIdAndRemove(id);
        res.redirect('/survey_list');
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
};