const mongoose = require("mongoose");
const { imageSchema } = require("./common");

const newsSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    content: String,
    date: String,
    web: String,
    image: imageSchema,
    isDeleted: Boolean, 
  },
  {
    timestamps: true, 
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
