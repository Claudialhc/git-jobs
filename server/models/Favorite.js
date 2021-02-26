const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
  created: { type: String, required: true },
  company: { type: String, required: true },
  companyUrl: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  apply: { type: String, required: true },
  logo: { type: String, required: true },
  id: { type: Integer, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
console.log(Book)