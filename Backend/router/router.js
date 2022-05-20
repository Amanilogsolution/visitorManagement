const express = require('express');
const router = express.Router();

const GeneratorController = require('../controller/GeneratorMaster')
const DieselController = require('../controller/DieselMaster')
const VisiterController = require('../controller/VisiterMaster')
const LoginController = require('../controller/LoginMaster')
const WarehouseController = require('../controller/WarehouseMaster')


router.post('/generatorentry',GeneratorController.GeneratorEntry)
router.post('/dieselentry',DieselController.DieselEntry)
router.post('/visiterentry',VisiterController.VisiterEntry)
router.post('/loginuser',LoginController.UserLogin)
router.post('/warehousecheckopen',WarehouseController.Warehousecheckopen)
router.post('/warehouseopen',WarehouseController.Warehouseopen)
router.post('/warehouseclose',WarehouseController.Warehouseclose)


module.exports= router
