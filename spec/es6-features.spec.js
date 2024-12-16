describe("ES6 Features", function(){
    describe("getInfoString", function(){
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
            const regex1 = ?;
            const regex2 = ?;
        });
    });
});