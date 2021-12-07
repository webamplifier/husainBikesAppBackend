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
router.get('/userById/:id',Middlewares.checkAuth,UserController.fetchById);
router.post('/updateuser/:id',Middlewares.checkAuth,UserController.update);
router.get('/deleteuser/:id',Middlewares.checkAuth,UserController.delete);
router.post('/editPassword/:id',Middlewares.checkAuth,UserController.updatePassword);

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
router.post('/reachedservice/:id',Middlewares.checkAuth,ServiceController.reached);
router.post('/completeservice/:id',Middlewares.checkAuth,ServiceController.completed);
router.get('/deleteservice/:id',Middlewares.checkAuth,ServiceController.delete);

module.exports = router;