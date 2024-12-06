// sample object
const student = {
    name: 'Stephanie Cooper',
    age: 37,
    location: 'New Orleans, LA',
    timeZone: 'CST',
    courses: [
        {
            courseName: 'Prep',
            status: 'Passed',
            attempts: 1,
            dateOfLastAttempt: '10/28/2024',
            observations: [
                {
                    author: {
                        name: 'Alex Aaron',
                        role: 'Instructor'
                    },
                    text: "Stephanie was absent from class due to her powering being out.",
                    dateObserved: '11/06/2024'
                }
            ]
        }
    ]
};

// Problem #1 //
function getFirstPrepObservation(object){
    return object.courses[0].observations[0].text + " - " + object.courses[0].observations[0].dateObserved;
}

