const { Router } = require("express");
const jobsRouter = new Router();


jobsRouter.get("/api/job-listings", (req, res) => {
    const { query: params } = req;
        axios
          .get("https://jobs.github.com/positions.json?description=remote", {
            params
          })
          .then(Jobs => res.json(Jobs))
          .catch(err => res.status(422).json(err));
  });

  module.exports = jobsRouter;