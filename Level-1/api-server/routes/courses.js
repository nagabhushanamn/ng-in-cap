var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')


const mongoose = require('mongoose');
mongoose.connect('mongodb://user1:user111@ds031567.mlab.com:31567/learning_db', { useNewUrlParser: true });

const Course = mongoose.model('Course', {
    id: Number,
    title: String,
    price: Number,
    description: String,
    canBuy: Boolean,
    img_path: String,
    c_code: String,
    publish_date: Date,
    discount: Number
});

const Review = mongoose.model('Review', {
    author: String,
    stars: Number,
    body: String,
    course_id: Number
});

router
    .post('/', bodyParser.json(), function (req, res, next) {
        let course = new Course({ ...req.body })
        course.save((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .put('/:course_id', bodyParser.json(), function (req, res, next) {
        Course.findOneAndUpdate({ id: req.params.course_id }, { ...req.body }, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .get('/', function (req, res, next) {
        Course.find({}, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .get('/:course_id', function (req, res, next) {
        Course.findOne({ id: req.params.course_id }, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .delete('/:course_id', function (req, res, next) {
        Course.findOneAndRemove({ id: req.params.course_id }, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .get('/:course_id/reviews', function (req, res, next) {
        Review.find({ course_id: req.params.course_id }, (err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })
    .post('/:course_id/reviews', bodyParser.json(), function (req, res, next) {
        let course_id = req.params.course_id;
        let newReview = new Review({ ...req.body })
        newReview.course_id = course_id;
        newReview.save((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    })


module.exports = router;
