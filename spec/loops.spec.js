

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
    });

    describe("getStringValues", function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(getStringValues(students[0])), true)
        });
        it('should return an array of string values with a length greater than 3', function(){
            assert.deepEqual(getStringValues(students[0]), [
                "Stephanie Cooper",
                "New Orleans, LA"
            ]);
        });
        it('should use a for in loop', function(){
            const func = getStringValues.toString();
            console.log(func.match(/for\s[(][a-z]{3}\s[a-zA-Z]+\sin\s[a-zA-Z]+[)]/g));
            assert.equal(func.match(/for\s[(][a-z]{3}\s[a-zA-Z]+\sin\s[a-zA-Z]+[)]/g).length > 0, true);
        })
    })
});