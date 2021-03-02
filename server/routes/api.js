const { Router } = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");
const auth = require("../config/auth");
const apiRouter = new Router();

// LOGIN ROUTE
apiRouter.post("/api/login", (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(400).json(err));
});

// SIGNUP ROUTE
apiRouter.post("/api/signup", (req, res) => {
  db.User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
apiRouter.get("/api/user", isAuthenticated, (req, res) => {
  db.User.findById(req.user.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

// A route to delete one preference
apiRouter.delete(
  "/api/user-favorites/:favoriteId",
  isAuthenticated,
  (req, res) => {
    const { favoriteId } = req.params;
    db.User.findById(req.user.id).then((user) => {
      user.favorites = user.favorites.filter((favorite) => {
        favorite;
      });
    });
    db.User.favorites
      .deleteOne(req.user.id.favorites.id)
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).send({ success: false, message: "Not deleted" });
        }
      })
      .catch((err) => res.status(400).send(err));
  }
);

// add a route to add one preference to the specific, loginned user m(req.user.id)
apiRouter.post("/api/user-favorites", isAuthenticated, (req, res) => {
  db.User.findById(req.user.id)
    .then((user) => {
       user.favorites.push(req.body)
       return user.save()
      // if (data) {
      //   res.json(data);
      // } else {
      //   res.status(404).send({ success: false, message: "Not favorited" });
      // }
    }).then((data)=>{
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = apiRouter;

// db.User.findOneAndDelete({ "favorites.id": req.user.id.favorites.id})

// System.findOne({ 'nodes.main.Alpha': 23000}, function(err, system){
//   if(err){console.log(err);}
//   else{console.log(system);}
// });
