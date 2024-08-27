//console.log("Hello World");
const express= require ('express');
const port = 8000; 
const app = express();
app.get('/', function(request, response){
    response.send("Hello Shalini the paglu!");
});

app.post('addemployee', function(){} );

app.listen(port, function(){
    console.log("App is listening " + port);
});