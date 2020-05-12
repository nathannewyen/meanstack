// use my_first_db

// show collections

// Create 5 students with the appropriate info.
db.students.insert({
    name: 'nathan',
    home_state: 'TX',
    lucky_number: 31,
    birth_day: {
        month: 12,
        day: 31,
        year: 1999
    }
})

db.students.insert({
    name: 'nate',
    home_state: 'TX',
    lucky_number: 21,
    birth_day: {
        month: 2,
        day: 11,
        year: 2000
    }
})

db.students.insert({
    name: 'nick',
    home_state: 'CA',
    lucky_number: 1,
    birth_day: {
        month: 1,
        day: 1,
        year: 1996
    }
})

db.students.insert({
    name: 'hannie',
    home_state: 'TX',
    lucky_number: 810,
    birth_day: {
        month: 8,
        day: 10,
        year: 1996
    }
})

db.students.insert({
    name: 'newyen',
    home_state: 'NY',
    lucky_number: 10,
    birth_day: {
        month: 2,
        day: 10,
        year: 1997
    }
})

// Get all students.
db.students.find()

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({
    home_state: 'CA'
})

// Get all students whose lucky number is:
// greater than 3
db.students.find({
    lucky_number: {
        $gt: 3
    }
})

// less than or equal to 10
db.students.find({
    lucky_number: {
        $lte: 10
    }
})

// between 1 and 9 (inclusive)
db.students.find({
    $and: [{
        lucky_number: {
            $gte: 1
        }
    }, {
        lucky_number: {
            $lte: 9
        }
    }]
})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({}, {
    $set: {
        interests: ['coding', 'brunch', 'MongoDB']
    }
}, {
    multi: true
})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({
    name: 'nathan'
}, {
    $push: {
        interests: ['play_video_game']
    }
})

db.students.update({
    name: 'hannie'
}, {
    $push: {
        interests: ['sing']
    }
})

db.students.update({
    name: 'newyen'
}, {
    $push: {
        interests: ['rap']
    }
})

db.students.update({
    name: 'nate'
}, {
    $push: {
        interests: ['draw']
    }
})

db.students.update({
    name: 'nick'
}, {
    $push: {
        interests: ['jogging']
    }
})

// Add the interest 'taxes' into someone's interest array.
db.students.update({
    name: 'nate'
}, {
    $push: {
        interests: ['taxes']
    }
})

// Remove the 'taxes' interest you just added.
db.students.update({
    name: 'nate'
}, {
    $pull: {
        interests: ['taxes']
    }
})

// Remove all students who are from California.
db.students.remove({
    $or: [{
        home_state: "CA"
    }, {
        home_state: "WA"
    }]
})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({
    name: "newyen"
})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({
    lucky_number: {
        $gt: 5
    }
}, true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({}, {
    $set: {
        number_of_belts: 0
    }
}, {
    multi: true
})

// Increment this field by 1 for all students in Arizona.
db.students.insert({
    name: 'david',
    home_state: 'WS',
    lucky_number: 10,
    birth_day: {
        month: 2,
        day: 10,
        year: 1997
    }
})
db.students.update({
    home_state: "WS"
}, {
    $inc: {
        number_of_belts: 1
    }
}, {
    multi: true
})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({}, {
    $rename: {
        'number_of_belts': 'belts_earned'
    }
}, {
    multi: true
})

// Remove the 'lucky_number' field.
db.students.update({}, {
    $unset: {
        lucky_number: ""
    }
}, {
    multi: true
})

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({}, {
    $currentDate: {
        updated_on: {
            $type: "date"
        }
    }
}, {
    multi: true
})