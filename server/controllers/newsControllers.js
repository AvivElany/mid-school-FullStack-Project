const schemas = require("../schemas/newsSchema");
const News = require("../models/News");

// GET  --  V
const getAllNews = async (req, res) => {
  // get all news
  try {
    const allNews = await News.find({});
    // return all news
    return res.status(200).json({
      data: allNews,
    });
  } catch (err) {
    // return an error message
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// GET  -- V
const getNewsById = async (req, res) => {
  
  const { id } = req.params;

  try {
    // find the News that matches this id
    const found = await News.findById(id).exec();
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
      message: `News id '${id}' not found`,
    });
  } catch (err) {
    // return an error message
    return res.status(400).json({
      success: false,
      message: "Invalid format for News id",
    });
  }
};

// POST  --  V
const createNewNews = async (req, res) => {

  // validate the request's body using joi
  const { error, value } = schemas.createNewNews.validate(req.body);
  // check if there are joi validation errors
  if (error) {
    const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
    return res.status(400).json({ success: false, message: errorsArray });
  }
  // create a new News instance (it's only in memory- until we actually save it)
  const newNews = new News(value);
  console.log("newNews is: ", newNews);

  // save the News to database
  try {
    const saved = await newNews.save();
    // success ! return a response
    return res.status(201).json({
      created: saved,
    });
  } catch (err) {
    // error
    return res
      .status(500)
      .json({ success: false, message: `error saving the News` });
  }
};

// DELETE -- V
const deleteNews = async (req, res) => {

  // get the id from url (no need to parseInt, we're using string type id)
  const { id } = req.params;
  // try to handle errors
  try {
    const deleted = await News.findByIdAndDelete(id);
    if (!deleted) throw new Error();
    // found & deleted
    return res.status(200).json({ deleted: deleted });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, message: `News id ${id} not found` });
  }
};

// PUT  --  V
const updateNews = async (req, res) => {
  
  // validate the request's body using joi
  const { error, value } = schemas.updateNews.validate(req.body);
  // check if there are joi validation errors
  if (error) {
    const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
    return res.status(400).json({ success: false, message: errorsArray });
  }
  // get the id from url (no need to parseInt, we're using string type id)
  const { id } = req.params;

  let updated;

  try {
    updated = await News.findByIdAndUpdate(id, value, { new: true });
    // not found- return a response and stop execution
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: `News id ${id} was not found.` });
    // found- return a response
    return res.status(200).json({
      updated: updated,
    });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, message: `News id ${id} was not found.` });
  }
};

// PATCH  --  V
const isDeletedNews = async (req, res) => {
  
  // validate the request's body using joi
  const { error, value } = schemas.isDeleted.validate(req.body);
  // check if there are joi validation errors
  if (error) {
    const errorsArray = error.details.map((err) => err.message); // creates an array of error-message strings
    return res.status(400).json({ success: false, message: errorsArray });
  }
  // get the id from url (no need to parseInt, we're using string type id)
  const { id } = req.params;

  let updated;

  try {
    updated = await News.findByIdAndUpdate(id, value, { new: true });
    // not found- return a response and stop execution
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: `News id ${id} was not found.` });
    // found- return a response
    return res.status(200).json({
      updated: updated,
    });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, message: `News id ${id} was not found.` });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNewNews,
  deleteNews,
  updateNews,
  isDeletedNews,
};
