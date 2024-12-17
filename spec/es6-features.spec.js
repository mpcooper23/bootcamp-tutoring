describe("ES6 Features", function(){
    describe("getInfoString", function(){
        it('should be written as an arrow function', function(){
            const func = getInfoString.toString();
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            } else {
                expect(match).to.not.equal(null);
            }
        });
        it('should return a string', function(){
            assert.equal(typeof getInfoString(films[1]), 'string');
        });
        it('should return a correctly formmated string', function(){
            assert.equal(getInfoString(films[1]), "Blue Velvet (1986) - directed by David Lynch")
        });
        it('should utilize destructuring', function(){
            const func = getInfoString.toString();
            const regex1 = /(const|let)\s\{\s[a-zA-Z]+,\s[a-zA-Z]+,\s[a-zA-Z]+\s}\s=\s[a-zA-Z]+/g
            const regex2 = /(const|let)\s\{([a-zA-Z]+|\s[a-zA-Z]+),\s[a-zA-Z]+,\s[a-zA-Z]+(}|\s})\s=\s[a-zA-Z]+/g
            const match1 = func.match(regex1);
            const match2 = func.match(regex2);
            let matches = [];
            if (match1){
                matches = matches.concat(match1);
            } else if (match2){
                matches = matches.concat(match2);
            }
            console.log(matches);
            assert.equal(matches.length > 0, true);
        });
        it('should utilize template literal sytax', function(){
            const func = getInfoString.toString();
            const regex1 = /`(?=[$])[$]{[a-zA-Z]+}\s[(][$]{[a-zA-Z]+}[)]\s-\s[a-z]+\s[a-z]+\s[$]{[a-zA-Z]+.name}`/g
            const regex2 = /`(?=[$])[$]{[a-zA-Z]+}\s[(][$]{[a-zA-Z]+}[)]\s-\s[a-z]+\s[a-z]+\s[$]{([a-zA-Z]+.name|[a-zA-Z]+)}`/g;
            const match1 = func.match(regex1);
            const match2 = func.match(regex2);
            console.log(match2);
            let matches = [];
            console.log(match1);
            console.log(match2);
            console.log(matches);
            if (match1){
                console.log('hit this condition')
                matches = matches.concat(match1);
            } else if (match2){
                console.log('hit this condition');
                matches = matches.concat(match2);
            }
            assert.equal(matches.length > 0, true);
        });
    });
    describe("getNewGenreTagsArray", function(){
        let func;
        if (getNewGenreTagsArray){
            func = getNewGenreTagsArray.toString();
        }
        it('should be written as an arrow function', function(){
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            }  else {
                expect(match).to.equal(null);
            }
        });
        it('should return an array', function(){
            assert.equal(Array.isArray(getNewGenreTagsArray(films[1])), true);
        });
        it('should return a correct array', function(){
            assert.deepEqual(getNewGenreTagsArray(films[1], "Horror"), ["Suspense", "Drama", "Horror"]);
        });
        it('should use the spread operator', function(){
            const regex1 = /\[(\s...[a-zA-Z]+|...[a-zA-Z]+)(\s\]|\])/g;
            const regex2 = /\[(\s...[a-zA-Z]+|...[a-zA-Z]+)(,\s\]|,\])/g;
            const match1 = func.match(regex1);
            const match2 = func.match(regex2);
            let matches = [];
            if (match1){
                matches = matches.concat(match1);
            } else if (match2){
                matches = matches.concat(match2);
            }
            assert.equal(matches.length > 0, true);
        });
    });
    
    describe('getNewObject', function(){
        let func;
        if (getNewObject){
            func = getNewObject.toString();
        }
        it('should be written as an arrow function', function(){
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            }  else {
                expect(match).to.equal(null);
            }
        });
        it('should return an object', function(){
            assert.equal(typeof getNewObject(films[1], 'productionCompany', 'De Laurentiis Entertainment Group'), 'object');
        });
        it('should return a new object correctly updated', function(){
            assert.deepEqual(getNewObject(films[1], 'productionCompany', 'De Laurentiis Entertainment Group'), {
                title: 'Blue Velvet',
                productionCompany: 'De Laurentiis Entertainment Group',
                year: 1986,
                genreTags: ['Suspense', 'Drama'],
                director: {
                    name: 'David Lynch',
                    countryOfOrigin: 'United States',
                    academyAwards: [
                        {
                            filmTitle: 'Elephant Man',
                            year: 1980,
                            category: 'Best Adapted Screenplay',
                            status: 'Nomination'
                        },
                        {
                            filmTitle: 'Elephant Man',
                            year: 1980,
                            category: 'Best Director',
                            status: 'Nomination'
                        },
                        {
                            filmTitle: 'Blue Velvet',
                            year: 1986,
                            category: 'Best Director',
                            status: 'Nominataion'
                        },
                        {
                            filmTitle: 'Mulholland Drive',
                            year: 2001,
                            category: 'Best Director',
                            status: 'Nomination'
                        }
                    ]
            }
            })
        });
        it('should use the spread operator', function(){
            const regex = /(let|const)\s[a-zA-Z]+\s=\s{(\s...[a-zA-Z]+|...[a-zA-Z]+)(\s}|})/g;
            const match = func.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else if (match.length > 0){
                assert.equal(match.length > 0, true);
            }
        });
        it('should not use mutate input object', function(){
            const result = getNewObject(films[1], 'productionCompany', 'De Laurentiis Entertainment Group');
            expect(result).to.not.equal(films[1]);
        });
    });

    describe('printAwards', function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
          });
      
          afterEach(function () {
            console.log.restore();
          });
        let func;
        if (printAwards){
            func = printAwards.toString();
        }
        it('should be written as an arrow function', function(){
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            }  else {
                expect(match).to.equal(null);
            }
        });
        it('should utilize destructuring', function(){
            const regex = /(let|const)\s{(\s[a-zA-Z]+|[a-zA-Z]+),\s[a-zA-Z]+,\s[a-zA-Z]+(\s}|})\s=\s([a-zA-Z]+\[[a-zA-Z]+\]|[a-zA-Z]+)/g;
            const match = func.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else if (match.length > 0){
                assert.equal(match.length > 0, true);
            }
        });
        it('should use template literal syntax', function(){
            const regex = /`(?=[$])[$]{[a-zA-Z]+}:\s\${[a-zA-Z]+}\s-\s\${[a-zA-Z]+}`/g;
            const match = func.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else if (match.length > 0){
                assert.equal(match.length > 0, true);
            }
        });
        it('should correctly log the values at `status`, `filmTitle`, and `category`', function(){
            const correct = [
                "Nomination: The Russians Are Coming, the Russians Are Coming - Best Editing",
                "Win: In the Heat of the Night - Best Editing",
                "Nomination: Coming Home - Best Director"
            ];
            printAwards(films, 'Hal Ashby');
            if (console.log.args.length === 0){
                expect(console.log.args.length).to.not.equal(0);
            } else {
                console.log.args.forEach((log, i) => {
                    assert.equal(log[0], correct[i]);
                })
            }
        });
    });

    describe("updateAwards", function(){
        let func;
        if (updateAward){
            func = updateAward.toString();
        }
        it('should be written as an arrow function', function(){
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            }  else {
                expect(match).to.equal(null);
            }
        });
        it('should use the spread operator', function(){
            const regex = /(let|const)\s[a-zA-Z]+\s=\s{(\s...[a-zA-Z]+\[[a-zA-Z]+\]|...[a-zA-Z]+\[[a-zA-Z]+\])(\s}|}|,\s})/g;
            const match = func.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else if (match.length > 0){
                assert.equal(match.length > 0, true);
            }
        });
        it('should utilize destructuring', function(){
            const regex1 = /(let|const)\s[a-zA-Z]+\s=\s{(\s...[a-zA-Z]+\[[a-zA-Z]+\]|...[a-zA-Z]+\[[a-zA-Z]+\])(\s}|}|,\s}|,})/g;
            const regex2 = /(let|const)\s[a-zA-Z]+\s=\s{(\s...[a-zA-Z]+|...[a-zA-Z]+)(\s}|}|,\s}|,})/g
            const match1 = func.match(regex1);
            console.log(match1);
            const match2 = func.match(regex2);
            console.log(match2);
            let matches = [];
            
            if (match1){
                matches = matches.concat(match1);
            } else if (match2){
                matches = matches.concat(match2);
            }

            assert.equal(matches.length > 0, true);
        });
        it('should return a correctly updated object', function(){
            const result = updateAward(films[1], 'Blue Velvet', 'Best Director', [ ['filmTitle', 'BLUE VELVET'], ['status', 'NOMINATION'] ]);
            const expected = {
                filmTitle: 'BLUE VELVET',
                year: 1986,
                category: 'Best Director',
                status: 'NOMINATION'
            };
            assert.deepEqual(result, expected);
        });
    })

});