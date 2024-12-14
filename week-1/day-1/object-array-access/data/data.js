// sample object
const student = {
    firstName: 'Nathan',
    lastName: 'Coen',
    age: 36,
    city: 'Atlanta',
    state: 'Georgia',
    timeZone: 'EST',
    courses: [
        {
            courseName: 'Prep',
            status: 'Passed',
            attempts: 1,
            dateOfLastAttempt: '08/15/2023',
            observations: [
                {
                    author: {
                        name: 'Alex Aaron',
                        role: 'Instructor'
                    },
                    text: 'He would benefit from asking more questions in class.',
                    dateObserved: '08/03/2023'
                }
            ]
        },
        {
            courseName: 'Bootcamp',
            status: 'Passed',
            attempts: 1,
            dateOfLastAttempt: '09/15/2023',
            observations: [
                {
                    author: {
                        name: 'Alex Aaron',
                        role: 'Instructor',
                    },
                    text: 'Nathan has increased his question volume in class.',
                    dateObserved: '09/19/2023'
                },
                {
                    author: {
                        name: 'Vanessa Jones',
                        role: 'Student Success Coordinator'
                    },
                    text: 'Nathan requested has met his midpoint requirements.',
                    dateObserved: '10/05/2023'
                }
            ]
        },
    ]
};

