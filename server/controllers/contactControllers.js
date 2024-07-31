const schemas = require("../schemas/contactsSchema");
const Contacts = require("../models/Contacts");

// GET  --  V
const getAllContacts = async (req, res) => {
    // get all contacts
    try {
        const allContacts = await Contacts.find({});
        // return all contacts
        return res.status(200).json({
        data: allContacts,
        });
    } catch (err) {
        // return an error message
        return res.status(400).json({
        success: false,
        message: err.message,
        });
    }
}

// GET  --  V
const getContactsById = async (req, res) => {
    
    const { id } = req.params;

    try {
        // find the contacts that matches this id
        const found = await Contacts.findById(id).exec();
        // found
        if (found) {
        // return the contacts found
            return res.status(200).json({
                data: found,
            });
        }
        // not found
        return res.status(404).json({
        success: false,
        message: `contact id '${id}' not found`,
        });
    } catch (err) {
        // return an error message
        return res.status(400).json({
        success: false,
        message: "Invalid format for contacts id",
        });
    }
}

// POST  --  V
const createNewContacts = async (req, res) => {

    // validate the request's body using joi
    const { error, value } = schemas.createNewMessage.validate(req.body);
    // check if there are joi validation errors
    if (error) {
        const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
        console.log(errorsArray);
        return res.status(400).json({ success: false, message: errorsArray });
    }
    // create a new News instance (it's only in memory- until we actually save it)
    const newContactMessage = new Contacts(value);

    // save the News to database
    try {
        const saved = await newContactMessage.save();
        // success ! return a response
        return res.status(201).json({
        created: saved,
        });
    } catch (err) {
        // error
        return res
        .status(500)
        .json({ success: false, message: `error saving the contact message` });
    }
}

// DELETE  --  V
const deleteContact = async (req, res) => {

    // get the id from url (no need to parseInt, we're using string type id)
    const { id } = req.params;
    // try to handle errors
    try {
        const deleted = await Contacts.findByIdAndDelete(id);
        if (!deleted) throw new Error();
        // found & deleted
        return res.status(200).json({ deleted: deleted });
    } catch (err) {
        return res
        .status(404)
        .json({ success: false, message: `Contact message id ${id} not found` });
    }
}

// PATCH  --  V
const updateContacts = async (req, res) => { 
    
    // validate the request's body using joi
    const { error, value } = schemas.updateMessage.validate(req.body);
    // check if there are joi validation errors
    if (error) {
        const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
        return res.status(400).json({ success: false, message: errorsArray });
    }
    // get the id from url (no need to parseInt, we're using string type id)
    const { id } = req.params;

    let updated;

    try {
        updated = await Contacts.findByIdAndUpdate(id, value, { new: true });
        // not found- return a response and stop execution
        if (!updated)
        return res
            .status(404)
            .json({ success: false, message: `Contact message id ${id} was not found.` });
        // found- return a response
        return res.status(200).json({
        updated: updated,
        });
    } catch (err) {
        return res
        .status(404)
        .json({ success: false, message: `Contact message id ${id} was not found.` });
    }
    }

module.exports = {
    getAllContacts,
    getContactsById,
    createNewContacts,
    deleteContact,
    updateContacts,
};
