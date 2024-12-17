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
        const func = getNewGenreTagsArray.toString();
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
            assert.equal(getNewGenreTagsArray(films[1], "Horror"), ["Suspense", "Drama", "Horror"]);
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
});