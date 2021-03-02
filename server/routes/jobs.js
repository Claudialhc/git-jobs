const { Router } = require("express");
const jobsRouter = new Router();
const axios = require("axios");

jobsRouter.get("/api/job-listings", (req, res) => {
  const { query: params } = req;
  axios
    .get("https://jobs.github.com/positions.json", {
      params,
    })
    .then((jobsResponse) => {
      res.json(jobsResponse.data);
    })
    .catch((err) => res.status(422).json(err));
});

module.exports = jobsRouter;
