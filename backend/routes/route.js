const express = require('express');
const UserController = require("../controllers/UserController");
const VehicleController = require('../controllers/VehicleController');
const Middlewares = require('../middlewares/Middleware');

const router = express.Router();

// user related routes
router.post('/login',Middlewares.checkAuth,UserController.login);
router.get('/userlist',Middlewares.checkAuth,UserController.list);
router.post('/signup',Middlewares.checkAuth,UserController.signup);
router.get('/userById/:id',Middlewares.checkAuth,UserController.fetchById);
router.post('/updateuser/:id',Middlewares.checkAuth,UserController.update);
router.get('/deleteuser/:id',Middlewares.checkAuth,UserController.delete);
router.post('/editPassword/:id',Middlewares.checkAuth,UserController.updatePassword);

// product routes
router.get('/vehiclelist',Middlewares.checkAuth,VehicleController.list);
router.post('/createvehicle',Middlewares.checkAuth,VehicleController.create);
router.get('/vehicleById/:id',Middlewares.checkAuth,VehicleController.fetchById);
router.post('/updatevehicle/:id',Middlewares.checkAuth,VehicleController.update);
router.get('/deletevehicle/:id',Middlewares.checkAuth,VehicleController.delete);

module.exports = router;