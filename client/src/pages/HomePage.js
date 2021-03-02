import React, {useEffect, useState} from "react";
import JobCard from "../components/JobCard";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import getJob from "../components/JobDetail";
const jobs = [
{
  "id": "421871bb-05d3-4fbe-b00c-3f372fa35584",
  "type": "Full Time",
  "url": "https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584",
  "created_at": "Tue Aug 04 17:23:12 UTC 2020",
  "company": "Sticker Mule",
  "company_url": "https://www.stickermule.com/careers",
  "location": "Anywhere",
  "title": "Javascript Engineer",
  "description": "<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internet's most \"kick ass\" brand. We are privately-owned, profitable, and powered by a  globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.</p>\n<p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting problems.</p>\n<p><strong><a href=\"https://www.stickermule.com/about\">See more about our teams here</a></strong></p>\n<p><strong>We offer</strong></p>\n<ol>\n<li>Remote work with flexible schedules</li>\n<li>Varied, interesting technical challenges to solve</li>\n<li>A fun \"no bullshit\" work environment</li>\n</ol>\n<p><strong>We like you to know</strong></p>\n<ol>\n<li>Docker</li>\n<li>NextJS</li>\n<li>React</li>\n<li>NodeJS</li>\n<li>GraphQL</li>\n<li>Postgres</li>\n<li>Redis</li>\n<li>Familiarity with Ruby</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>Challenges</strong></p>\n<ol>\n<li>Improve and expand our React shared components gallery</li>\n<li>Migrate a large Rails code base to JavaScript front-ends and back-ends</li>\n<li>Maintain optimal front-end performance on desktop and mobile</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$99,000-$135,000+</li>\n<li>$10,000 signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n",
  "how_to_apply": "<p><strong>Apply here only:</strong> <a href=\"https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29\">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n",
  "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg"
  }]
function HomePage() {
const [job, setJob] = useState([]);
useEffect (() => {
  let mounted = true;
  getJob()
  .then(items => {
    console.log(items)
    if(mounted) {
      setJob(items)
    }
  })
  return () => mounted = false;
}, [])
return (
<div>
<Jumbotron fluid>
  <Container>
    <h1>Welcome to GitJobs</h1>
  </Container>
</Jumbotron>
<h3>Available Jobs:</h3>
{job.map( job => {
  return <JobCard job={job} />
})}
</div>
)
}
export default HomePage;