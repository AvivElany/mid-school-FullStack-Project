const mongoose = require("mongoose");
const { imageSchema, nameSchema, } = require("./common");

// define a mongoose schema:
// this describes the shape of one 'staff' in our staff collection.
const staffSchema = new mongoose.Schema(
    {
        name: nameSchema,
        job: String,
        isMale: Boolean,
        image: imageSchema,
        classroom: String,
        isPrincipal: Boolean,
        isTeacher: Boolean, 
        isDeleted: Boolean, 
    },
    {
        timestamps: true,
    }
);

// compile the schema into a model.
// we will use this model to access our staff collection.
const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;