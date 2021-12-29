const express = require('express');
const UserController = require("../controllers/UserController");
const VehicleController = require('../controllers/VehicleController');
const ServiceController = require('../controllers/ServiceController');
const Middlewares = require('../middlewares/Middleware');

const router = express.Router();

// user related routes
router.post('/login',UserController.login);
router.get('/userlist',Middlewares.checkAuth,UserController.list);
router.post('/signup',UserController.signup);
router.post('/createUser',Middlewares.checkAuth,UserController.createUser)
router.get('/userById/:id',Middlewares.checkAuth,UserController.fetchById);
router.post('/updateuser/:id',Middlewares.checkAuth,UserController.update);
router.get('/deleteuser/:id',Middlewares.checkAuth,UserController.delete);
router.post('/editPassword/:id',Middlewares.checkAuth,UserController.updatePassword);
router.post('/update-push-token',Middlewares.checkAuth,UserController.updatePushToken)

// vehicle routes
router.get('/vehiclelist',Middlewares.checkAuth,VehicleController.list);
router.post('/createvehicle',Middlewares.checkAuth,VehicleController.create);
router.get('/vehicleById/:id',Middlewares.checkAuth,VehicleController.fetchById);
router.post('/updatevehicle/:id',Middlewares.checkAuth,VehicleController.update);
router.get('/deletevehicle/:id',Middlewares.checkAuth,VehicleController.delete);

// service routes
router.get('/servicelist',Middlewares.checkAuth,ServiceController.list);
router.post('/createservice',Middlewares.checkAuth,ServiceController.create);
router.post('/assignservice/:id',Middlewares.checkAuth,ServiceController.assign);
router.get('/reachedservice/:id',Middlewares.checkAuth,ServiceController.reached);
router.post('/addKmService/:id',Middlewares.checkAuth,ServiceController.addKM)
router.post('/completeservice/:id',Middlewares.checkAuth,ServiceController.completed);
router.get('/deleteservice/:id',Middlewares.checkAuth,ServiceController.delete);
router.get('/getServiceById/:id',Middlewares.checkAuth,ServiceController.getServiceDetail)
router.get("/fetch-mechanic-pending-services",Middlewares.checkAuth,ServiceController.fetchMechanicPendingService)

// fetch bikes
router.get('/fetchBikes',async (req,res) => {
    let bikes = [
        'Honda unicorn CB160',
        'Bajaj boxer bm150',
        'Hero hunk 150',
        'Tvs appache rtr 180',
        'Tvs stryker 125',
        'Bajaj pulsar 150',
        'Tvs xl-super heavy duty  70',
        'Tvs star city',
        'Bajaj platina',
        'Other'
    ]

    return res.json({status : 200,message : 'Bikes has been fetched successfully!',bikes})
})

module.exports = router;