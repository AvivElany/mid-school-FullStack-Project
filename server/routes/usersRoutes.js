const router = require('express').Router();
const { getAllUsers, getUserById, deleteUser, updateUser, register, login, updateGrades, getClassroom } = require('../controllers/usersControllers');
const { mustLogin, allowedRoles, allowedClassroom } = require('../controllers/authControllers');

  //  base path = "/users"
  
  router.post('/register'/* , allowedRoles(['principal']) */, register)
  router.post('/login', login)
  router.get('/', mustLogin, allowedRoles(['principal', "teacher"]), getAllUsers)
  router.get('/:id', mustLogin, allowedRoles(["principal", "teacher", "ownUser"]), getUserById)
  /* router.get('/:classroom', mustLogin, allowedClassroom(["principal", "teacher", "ownClassroom"]), getClassroom) */
  router.put('/:id', mustLogin, allowedRoles(["principal", "ownUser"]), updateUser)
  router.patch('/:id', mustLogin, allowedRoles(["principal", "teacher"]), updateGrades),
  router.delete('/:id', mustLogin, allowedRoles(["principal"]), deleteUser)

module.exports = router;