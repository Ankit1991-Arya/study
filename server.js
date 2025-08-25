const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('Hello ANkit');
})
app.listen(3005, function(){
    console.log("Server running on port 3005");
});