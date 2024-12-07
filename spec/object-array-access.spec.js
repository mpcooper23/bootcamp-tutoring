describe('object & array access', function(){
    
    describe('getFirstPrepObservation', function(){
        it('should return a string', function(){
            assert.equal(typeof getFirstPrepObservation(student), 'string');
        });
        it('should return a correctly formatted string', function(){
            assert.equal(getFirstPrepObservation(student), "He would benefit from asking more questions in class. - 08/23/2023")
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


});