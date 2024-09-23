const router = require('express').Router();
const { myProfile, mustLogin } = require('../controllers/authControllers');

  //  base path = "/auth"
  
  router.get('/profile', mustLogin, myProfile)

module.exports = router;