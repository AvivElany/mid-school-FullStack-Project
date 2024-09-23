const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
const { getAllNews, getNewsById, createNewNews, deleteNews, updateNews, isDeletedNews } = require('../controllers/newsControllers');

  //  base path = "/news"

  router.get('/', getAllNews)
  
  // unprotected Routes :
  router.get('/:id', getNewsById)
  router.post('/' , mustLogin, allowedRoles(['principal']), createNewNews)
  router.put('/:id', mustLogin, allowedRoles(['principal']), updateNews)
  router.patch('/:id', mustLogin, allowedRoles(['principal']), isDeletedNews)
  router.delete('/:id', mustLogin, allowedRoles(['principal']), deleteNews)

module.exports = router;