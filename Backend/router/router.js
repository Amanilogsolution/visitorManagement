const express = require('express');
const router = express.Router();

const GeneratorController = require('../controller/GeneratorMaster')

router.post('/GeneratorEntry',GeneratorController.GeneratorEntry)

module.exports= router
