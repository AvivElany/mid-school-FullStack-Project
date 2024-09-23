const router = require('express').Router();
const {allowedRoles, mustLogin } = require('../controllers/authControllers');
const { createStaff, getAllStaff, getStaffById, updateStaff, deleteStaff } = require('../controllers/staffControllers');

  //  base path = "/staff"

    router.post('/', mustLogin, allowedRoles(["principal"]), createStaff)
    router.get('/', getAllStaff) 
    router.get('/:id', mustLogin, allowedRoles(["principal"]), getStaffById)
    router.put('/:id', mustLogin, allowedRoles(["principal"]), updateStaff)
    router.delete('/:id', mustLogin, allowedRoles(["principal"]), deleteStaff)

module.exports = router;