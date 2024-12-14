describe('object & array access', function(){
    
    describe('getFirstPrepObservation', function(){
        it('should return a string', function(){
            assert.equal(typeof getFirstPrepObservation(student), 'string');
        });
        it('should return a correctly formatted string', function(){
            assert.equal(getFirstPrepObservation(student), "He would benefit from asking more questions in class. - 08/03/2023")
        });
    });

    describe('getLastObservationAuthor', function(){
        it('should return a string', function(){
            assert.equal(typeof getLastObservationAuthor(student), 'string');
        });
        it('should return a correctly formatted string', function(){
            assert.equal(getLastObservationAuthor(student), "Vanessa Jones - Student Success Coordinator");
        })
    });

    describe('getLastCourseNameAndStatus', function(){
        it('should return a string', function(){
            assert.equal(typeof getLastCourseNameAndStatus(student), 'string');
        });
        it('should return a correct string', function(){
            assert.equal(getLastCourseNameAndStatus(student), 'Bootcamp - Passed')
        });
    });

    describe('createSimplifiedObject', function(){
        it('should return an object', function(){
            assert.equal(typeof createSimplifiedObject(student), 'object');
        });
        it('should return a correct object', function(){
            assert.deepEqual(createSimplifiedObject(student), {
                name: 'Nathan Coen',
                age: 36,
                location: "Atlanta, Georgia",
                courses: 2,
            });
        });
    });

    describe('createString', function(){
        it('should return a string', function(){
            assert.equal(typeof createString(student), 'string');
        });
        it('should return a correct string', function(){
            assert.equal(createString(student), "Nathan C.\nState & Time Zone: Georgia - EST\nDate of Last Course: 09/15/2023 (Bootcamp)\n");
        });
    });

    // describe('getLastRoleAndDateArray', function(){
    //     it('should return an array', function(){
    //         assert.equal(Array.isArray(getLastRoleAndDateArray(students)), true);
    //     });
    //     it('should return a correct array of strings', function(){
    //         assert.deepEqual(getLastRoleAndDateArray(students), [
    //             'Instructor - 11/06/2024', 
    //             'Student Success Coordinator - 08/21/2023', 
    //             'Student Success Coordinator - 10/05/2023'
    //         ]);
    //     });
    // });

});