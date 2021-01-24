import express from 'express';
import route from './routes';
import bodyParser from 'body-parser';
const app = express()
const PORT = 9000
app.use(bodyParser.json())
app.use('/api/v1/', route)
app.listen(PORT, (err, result) => {
    if (err) console.log(`Getting error`)
    else {
        console.log(`server starting at port ${PORT}`)
    }
})


var arr = [1, 2, 3, 4, 5, 6]
var ele = 4
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
        for(var j=i;j<arr.length-1;j++){
            arr[j] = arr[j + 1]        
            console.log(arr)
        }
    }
}

