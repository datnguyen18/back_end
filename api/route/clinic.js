const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Clinic = require('../models/clinic');
const _ = require('lodash');
const upload = require('../config/multer');
const ClinicController = require('../controllers/clinic');
router.get('/',(req,res) => {
    Clinic.find().then(doc => {
        res.status(200).send({all: doc})
    }).catch(err => {res.status(404).send({err:err})})
})
//create new clinic
router.post('/',upload.array('imageUrls', 8), ClinicController.create_new_clinic);
//follow a clinic by idClinic and need current userID in body
router.post('/follow/:idClinic', ClinicController.follow_clinic)

router.post('/unfollow/:idClinic', ClinicController.unfollow_clinic)
//update coordinates and address
router.patch('/modify/:idClinic', ClinicController.modify_clinic);
module.exports = router;