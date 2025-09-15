var fs = require('fs');

fs.appendFile('new.txt','Hello Content!',
    function(err){
        if(err) throw err;
        console.log('Saved!');
    }
);

