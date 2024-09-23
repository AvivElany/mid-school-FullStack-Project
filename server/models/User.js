const mongoose = require("mongoose");
const { addressSchema, imageSchema, nameSchema, gradesSchema } = require("./common");

// define a mongoose schema:
// this describes the shape of one 'user' in our users collection.
const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    name: nameSchema,
    job: String,
    classroom: String,
    phone: String,
    grades: gradesSchema,
    isMale: Boolean,
    image: imageSchema,
    address: addressSchema,
    isPrincipal: Boolean,
    isTeacher: Boolean, 
    isDeleted: Boolean, 
  },
  {
    timestamps: true,
  }
);

// compile the schema into a model.
// we will use this model to access our users collection.
const User = mongoose.model("User", userSchema);

module.exports = User;
