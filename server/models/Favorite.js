const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
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

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
console.log(Favorite)