//console.log("Hello World");
const express= require ('express');
const port = 8000; 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("Hello Shalini the paglu!");
});

//app.post('addemployee', () => {} );

app.post('/addemployee', (req, res) => {
    let empName = req.body.empName;
    let emppass = req.body.empPass;
    res.end(`Psot succcess, you sent ${empName} and ${emppass}, thanks! `)
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
