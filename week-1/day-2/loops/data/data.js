// sample array
const students = [
    {
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
    },
    {
        name: 'Bethany Joseph',
        age: 35,
        location: 'New Orleans, LA',
        timeZone: 'CST',
        courses: [
            {
                courseName: 'Prep',
                status: 'Passed',
                attempts: 2,
                dateOfLastAttempt: '08/15/2023',
                observations: [
                    {
                        author: {
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Bethany has improved greatly this session!',
                        dateObserved: '08/01/2023'
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
                            name: 'Vanessa Jones',
                            role: 'Student Success Coordinator'
                        },
                        text: 'Bethany is up to date with her WIOA requirements.',
                        dateObserved: '08/21/2023'
                    }
                ]
            }
        ]
    },
    {
        name: 'Nathan Coen',
        age: 36,
        location: 'Atlanta, Georgia',
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
            }
        ]
    }
];