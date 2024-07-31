const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  country: String,
  city: String,
  street: String,
  houseNumber: Number,
})

const imageSchema = new mongoose.Schema({
  url: {type:String, default:'user.jpg'},
  alt: String,
})

const gradesSchema = new mongoose.Schema({
  math: Number,
  english: Number,
  sciences: Number,
  history: Number,
  literature: Number,
  programming: Number,
  art: Number,
})

const nameSchema = new mongoose.Schema({
  first: String,
  middle: String,
  last: String,
})

module.exports = { addressSchema, imageSchema, gradesSchema, nameSchema }