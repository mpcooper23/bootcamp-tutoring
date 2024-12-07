describe('object & array access', function(){
    
    describe('getFirstPrepObservation', function(){
        it('should return a string', function(){
            assert.equal(typeof getFirstPrepObservation(student), 'string');
        });
        it('should return a correctly formatted string', function(){
            assert.equal(getFirstPrepObservation(student), "Stephanie was absent from class due to her powering being out. - 11/06/2024")
        });
    });

    
});