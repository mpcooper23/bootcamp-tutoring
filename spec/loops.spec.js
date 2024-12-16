

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
        it('should use a for loop to iterate backwards', function(){
            const func = logLocationAndTime.toString();
            const regex1 = /for\s[(][a-z]{3}\s[a-zA-Z]+\s=\s[a-zA-Z]+.length\s-\s1;\s[a-zA-Z]\s>=\s0;\s[a-zA-Z][-]{2}[)]/g;
            const regex2 = /for\s[(][a-z]{3}\s[a-zA-Z]+\s=\s[a-zA-Z]+.length\s-\s1;\s[a-zA-Z]+\s>\s-1;\si[-]{2}[)]/g;
            const match1 = func.match(regex1);
            const match2 = func.match(regex2);
            let matches = [];
            if (match1){
                matches = matches.concat(match1);
            } else if (match2){
                matches = matches.concat(match2);
            }
            assert.equal(matches.length > 0, true);
        })
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
        });
    });

    describe('createBooleanEntries', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(createBooleanEntries(students, 'Bethany Joseph')), true)
        });
        it('should return a correct array of boolean entries', function(){
            assert.deepEqual(createBooleanEntries(students, 'Bethany Joseph'), [
                ['hotSpotAvailability', true],
                ['transportation', false],
                ['newsLetterSubscription', true]
            ]);
        });
        it('should use a for in loop', function(){
            const func = createBooleanEntries.toString();
            assert.equal(func.match(/for\s[(][a-z]{3}\s[a-zA-Z]+\sin\s[a-zA-Z]+[)]/g).length > 0, true);
        });
    });

    describe("getCoursesByYear", function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(getCoursesByYear(students, 2024)), true);
        });
        it('should return a correct array of objects based on the year', function(){
            assert.deepEqual(getCoursesByYear(students, 2024), [
                {
                    studentName: 'Stephanie Cooper', 
                    course: 'Prep', 
                    status: 'Passed', 
                    observations: 1
                },
                {
                    studentName: 'Bethany Joseph', 
                    course: 'Bootcamp', 
                    status: 'Passed', 
                    observations: 1
                },
            ]);
        });
        it('should use nested for loops', function(){
            const regex1 = /for\s[(][a-zA-Z]+\s[a-zA-Z]+\s=\s0;\s[a-zA-Z]+\s<\s[a-zA-Z]+.length;\s[a-zA-Z]+[+][+][)]/g;
            const regex2 = /for\s[(][a-z]{3}\s[a-zA-Z]+\s=\s0;\s[a-zA-Z]+\s<=\s[a-zA-Z]+.length\s-\s1;\s[a-zA-Z][+]{2}[)]/g;
            const func = getCoursesByYear.toString();
            const match1 = func.match(regex1);
            const match2 = func.match(regex2);
            let matches = [];
            if (match1){
                matches = matches.concat(match1);
            } else if (match2){
                matches = matches.concat(match2);
            }
            assert.equal(matches.length > 1, true);
        });
    })
});