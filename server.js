const express = require('express');
const mongoose = require('mongoose')
const app = express();
const ejs = require('ejs')

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://grouptwo:schoolyard@group2.50g5lu7.mongodb.net/?retryWrites=true&w=majority');

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

const Movie = mongoose.model('Course', courseSchema);

// https://youtu.be/yH593K9fYvE?t=346
// https://youtu.be/yH593K9fYvE?t=722
app.get('/', (req, res) => {
    Movie.find({}, async(err, movies) => {
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})

