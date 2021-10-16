const {readFile , writeFile}  = require('fs');


console.log('start');
readFile('./contents/first.txt', 'utf8' ,(err , result) => {
    if(err) {
        console.log(err);
        return; 
    }

   const first = result;
   readFile('./contents/second.txt' , 'utf8' , (err , result) => {
        if(err) {
            console.log(err);
            return; 
        }
        
        const second = result;
        writeFile(
            './contents/result-async.txt' , 
            `Here is the result ${first} , ${second}` , 
            (err , result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
        
   })

})
console.log('starting next task');