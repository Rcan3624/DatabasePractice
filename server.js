// TODO: Find out what is causing the "Model.find() no longer accepts a callback" error when starting the server

const express = require('express');
const mongoose = require('mongoose')
const app = express();
const ejs = require('ejs')

app.set('view engine', 'ejs');

// Connect to Group 2 database
mongoose.connect('mongodb+srv://grouptwo:schoolyard@group2.50g5lu7.mongodb.net/?retryWrites=true&w=majority');

// Code explanation (Timeline 9:46): https://youtu.be/yH593K9fYvE?t=586
const courseSchema = ({
    id: Number,
    dept: String,
    name: String

});

const Course = mongoose.model('Course', courseSchema);

// Code explanation (Timeline 11:12): https://youtu.be/yH593K9fYvE?t=722
app.get('/', (req, res) => {
    Course.find({}, async(err, classes) => {                  // Code explanation (Timeline 14:45): https://youtu.be/yH593K9fYvE?t=885
        res.render('index', {
            courseList: classes
        })
    })
})

// Go to: http://localhost:3000
app.listen(3000, function() {
    console.log('server is running');
})

