const controller = require('../controllers/controller');

module.exports = function(router){
    router.get('/',controller.getdefaults);
    router.get('/aboutus',controller.aboutus);
    router.post('/addemployees',controller.addemployees);
    router.get('/getemployees',controller.getemployees);
};