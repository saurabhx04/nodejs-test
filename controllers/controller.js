const Employee = require('../models/employee');
exports.getdefaults = (req, res) => {
    res.send('Hello from Saurabh');
};

exports.aboutus = (req, res) => {
    res.send('You are on about us route');
};

exports.addemployees = (req, res) => {
    let empName = req.body.empName;
        let empPass = req.body.empPass;
        res.end(`Psot succcess, you sent ${empName} and ${empPass}, thanks! `)
};

exports.getemployees = (req, res) => {
    res.send('You are on the getemployee route')
};