const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const FavoriteSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
  created_at: { type: String, required: true },
  company: { type: String, required: true },
  company_url: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  how_to_apply: { type: String, required: true },
  company_logo: { type: String, required: true },
  // This is an id from the gitHub jobs API.
  gitHubJobsId: { type: String, required: true }
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,

    // Don't include password in queries unless the query asks for it to prevent
    // accidentally exposing hashed passwords. (see
    // https://mongoosejs.com/docs/api.html#schematype_SchemaType-select)
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  favorites: [
    {
      type: FavoriteSchema
    }
  ]
});
{
  user: "tanman"
  email: "yolo.com"
  pasword: "yelp"
  favorites: [{type: {
    title: "any-string",
    type: "any-string",
    url: "any-string",
    created: "any-string",
    company: "any-string",
    companyUrl: "any-string",
    location: "any-string",
    title: "any-string",
    description: "any-string",
    apply: "any-string",
    logo: "any-string",
    id: 7878 
  }}]
}

// Execute before each user.save() call
UserSchema.pre("save", function (callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified("password")) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);
// const Favorite = mongoose.model("Favorite", FavoriteSchema);
module.exports = User;
