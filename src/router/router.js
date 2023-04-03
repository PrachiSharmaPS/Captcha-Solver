const express = require('express');
const router = express.Router();
const captchaController = require('../controller/captchaController');

//Route
router.get('/solve-captcha', captchaController.captchaSolver)

router.all("/*",function(req,res){
    res.status(404).send({msg:"invalid http request"})
})


module.exports = router;