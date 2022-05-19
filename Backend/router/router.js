const express = require('express');
const router = express.Router();

const GeneratorController = require('../controller/GeneratorMaster')

router.post('/generatorentry',GeneratorController.GeneratorEntry)

module.exports= router
