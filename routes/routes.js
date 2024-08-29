module.exports = function(router){
    router.get('/', (req, res) => {
        res.send("Hello there");
    });
    
    router.get('/aboutus', (req, res) => {
        res.send("About us route");
    });
    
    
    //app.post('addemployee', () => {} );
    
    router.post('/addemployee', (req, res) => {
        let empName = req.body.empName;
        let empPass = req.body.empPass;
        res.end(`Psot succcess, you sent ${empName} and ${empPass}, thanks! `)
    });
};