const { ref } = require("joi");
const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema(
{
    sender: String,
    id: String,
    message: String,
    email: String,
    phone: String,
    isDeleted: Boolean, 
    userID: { type:mongoose.SchemaTypes.ObjectId, ref:'User' },
},
{
    timestamps: true, //חותמת זמן ליצירה ועדכון
}
);

const Contacts = mongoose.model("Contacts", ContactsSchema);

module.exports = Contacts;
