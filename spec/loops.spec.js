

describe('loops', function(){
    
    describe('logLocationAndTime', function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
          });
      
          afterEach(function () {
            console.log.restore();
          });
        it('should log only strings', function(){
            
            logLocationAndTime(students);
            if (console.log.args.length === 0){
                assert.equal(console.log.args.length > 0, true);
            } else {
                console.log.args.forEach(item => {
                    typeof item[0] === 'string';
                })
            }
        });
        it('should log correct strings in reverse', function(){
            const correct = [
                'Baltimore, MD - EST',
                'Atlanta, GA - EST',
                'New Orleans, LA - CST',
                'New Orleans, LA - CST',
            ]
            logLocationAndTime(students);
            if (console.log.args.length === 0){
                assert.equal(console.log.args.length > 0, true);
            } else {
                console.log.args.forEach((log, i) => {
                    assert.equal(log[0], correct[i]);
                });
            }
        });
        it('should not use the reverse() method', function(){
            assert.equal(logLocationAndTime.toString().includes(".reverse("), false);
        });
    });

    describe("logHalf", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
          });
      
          afterEach(function () {
            console.log.restore();
          });
        it('should log only strings', function(){
            logHalf(students);
            if (console.log.args.length === 0){
                assert.equal(console.log.args.length > 0, true);
            } else {
                console.log.args.forEach(item => {
                    console.log(item[0]);
                    typeof item[0] === 'string';
                })
            }
        });
        it('should log correct strings for first half of array', function(){
            const correct = [
                "Stephanie Cooper\nCourses attempted: 1\n--",
                "Bethany Joseph\nCourses attempted: 2\n--"
            ];
            logHalf(students);
            if (console.log.args.length === 0){
                assert.equal(console.log.args.length > 0, true);
            } else {
                console.log.args.forEach((log, i) => {
                    assert.equal(log[0], correct[i]);
                });
            }
        });
    })
});