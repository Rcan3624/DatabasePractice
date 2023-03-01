const express = require('express');
const mongoose = require('mongoose')
const app = express();
const ejs = require('ejs')

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://grouptwo:schoolyard@group2.50g5lu7.mongodb.net/?retryWrites=true&w=majority');

// Code explanation (Timeline 9:46): https://youtu.be/yH593K9fYvE?t=586
const courseSchema = ({
    _id: {
        type: Number,
        required: true
    },

    dept: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }

});

const Course = mongoose.model('Course', courseSchema);

// Code explanation (Timeline 11:12): https://youtu.be/yH593K9fYvE?t=722
app.get('/', (req, res) => {
    Course.find({}, async(err, classes) => {
        res.render('index', {
            courseList: classes
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})

