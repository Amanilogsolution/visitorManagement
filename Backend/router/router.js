const express = require('express');
const router = express.Router();

const GeneratorController = require('../controller/GeneratorMaster')
const DieselController = require('../controller/DieselMaster')
const VisiterController = require('../controller/VisiterMaster')


router.post('/generatorentry',GeneratorController.GeneratorEntry)
router.post('/dieselentry',DieselController.DieselEntry)
router.post('/visiterentry',VisiterController.VisiterEntry)



module.exports= router
