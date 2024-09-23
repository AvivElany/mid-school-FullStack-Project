const router = require('express').Router();
const { mustLogin, allowedRoles } = require('../controllers/authControllers');
const { getAllContacts, getContactsById, createNewContacts, deleteContact, updateContacts } = require('../controllers/contactControllers');

  //  base path = "/contacts"

    router.get('/', mustLogin, allowedRoles(['principal']), getAllContacts)
    
    // unprotected Routes :
    router.get('/:id', mustLogin, allowedRoles(['principal']), getContactsById)
    router.post('/', createNewContacts) // ALL
    router.patch('/:id', mustLogin, allowedRoles(['principal']), updateContacts) 
    router.delete('/:id', mustLogin, allowedRoles(['principal']), deleteContact)

module.exports = router;