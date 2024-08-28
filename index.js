//console.log("Hello World");
const express= require ('express');
const port = 8000; 
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


router.get('/', (req, res) => {
    res.send("Hello there");
});

router.get('/aboutus', (req, res) => {
    res.send("About us route");
});


//app.post('addemployee', () => {} );

router.post('/addemployee', (req, res) => {
    let empName = req.body.empName;
    let emppass = req.body.empPass;
    res.end(`Psot succcess, you sent ${empName} and ${emppass}, thanks! `)
});

app.use('/', router);
app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
