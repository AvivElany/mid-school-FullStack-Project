const schemas = require("../schemas/staffSchema");
const Staff = require("../models/Staff");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

//GET -- V
const getAllStaff = async (req, res) => {

    try {
        const allStaff = await Staff.find({});

        return res.status(200).json({
        data: allStaff,
        });

    } catch (err) {

        // return an error message
        return res.status(400).json({
        success: false,
        message: err.message,
        });

    }
};

//GET -- V
const getStaffById = async (req, res) => {

  const { id } = req.params;

  try {
    // find the News that matches this id
    const found = await Staff.findById(id).exec();
    // found
    if (found) {
      // return the News found
      return res.status(200).json({
        data: found,
      });
    }
    // not found
    return res.status(404).json({
      success: false,
      message: `Staff id '${id}' not found`,
    });
  } catch (err) {
    // return an error message
    return res.status(400).json({
      success: false,
      message: "Invalid format for News id",
    });
  }
};

//POST  --  V
const createStaff = async (req, res) => {

    // validate the request's body using joi
    const { error, value } = schemas.createNewStaff.validate(req.body);
    // check if there are joi validation errors
    if (error) {
        const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
        return res.status(400).json({ success: false, message: errorsArray });
    }

        try {
        // check if the job is already in use (in db)
        const existingStaff = await Staff.find({ job: value.job });

        // if this job is in use- send an error response
        if (existingStaff.length > 0)
            return res
            .status(409)
            .json({
                success: false,
                message: `job ${value.job} is already in use! consider logging in`,
            });
        // create new Staff in memory
        const newStaff = new Staff(value);

        newStaff.isPrincipal = false;
        // save the new Staff to the database
        const saved = await newStaff.save();

        const token = jwt.sign(
            {
            id: saved._id,
            isPrincipal: saved.isPrincipal,
            isTeacher: saved.isTeacher,
            classroom: saved.classroom,
            },
            JWT_SECRET,
            {
            expiresIn: JWT_EXPIRES_IN,
            }
        );

        // success! send the response with token
        return res
        .status(201)
        .json({ created: newStaff, token: token });
    } catch (err) {
        return res
        .status(500)
        .json({
            success: false,
            message: `Error registering Staff: ${err.message}`,
        });
    }
};

//DELETE  --  V
const deleteStaff = async (req, res) => {

    const { id } = req.params;
    
    try {
        const deleted = await Staff.findByIdAndDelete(id).exec();
        if (!deleted) throw new Error();

        // found & deleted
        return res.status(200).json({ deleted: deleted });
    } catch (err) {
        return res
        .status(404)
        .json({ success: false, message: `Staff id ${id} not found` });
    }
    };

    //PUT  --  V
const updateStaff = async (req, res) => {
    
    // get the id from url (no need to parseInt, we're using string type id)
    const { id } = req.params;
    // validate the request's body using joi
    const { error, value } = schemas.updateStaff.validate(req.body);
    if (error) {
        const errorsArray = error.details.map((err) => err.message); 
        return res.status(400).json({ success: false, message: errorsArray });
    }
    try {
        const updateStaff = await Staff.findByIdAndUpdate(id, value, { new: true }).exec();
        // not found- return a response and stop execution
        if (!updateStaff)
        return res
            .status(404)
            .json({ success: false, message: `Staff id ${id} was not found.` });
        // found- return a response
        return res.status(200).json({
        updated: updateStaff,
        });
    } catch (err) {
        return res
        .status(404)
        .json({ success: false, message: `Staff id ${id} was not found.` });
    }
};

module.exports = {
    createStaff, //post
    getAllStaff, //get
    getStaffById ,//get:id
    updateStaff, //put:id
    deleteStaff ,//delete:id
};