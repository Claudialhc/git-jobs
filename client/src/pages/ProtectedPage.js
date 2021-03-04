import React, { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import { Jumbotron, Container } from "react-bootstrap";
import FavoriteJobCard from "../components/FavoriteJobCard";
import API from "../util/API.js";

function ProtectedPage() {
  const [jobs, setJobs] = useState([]);
  const auth = useAuth();
  
  useEffect(() => {
    API.getUser().then((response) => {
      setJobs(response.data.favorites);
    });
  }, []);


  const deleteFavorite = (favoriteId) => {
    API.deleteFavorite(favoriteId)
      .then((res) => {
        // sorry about the repetivie code. look into using the useCallback hook
        // to factor out a loadJobs function
        return API.getUser()
      }).then((response) => {
        setJobs(response.data.favorites);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1 className="text-center">Welcome {auth.user.email}!</h1>
          <div className="text-center pt-3">
            <button type="button" className="btn btn-success" onClick={() => auth.logout()}>
              Log Out
            </button>
          </div>
        </Container>
      </Jumbotron>
      {jobs.map((job) => {
        return <FavoriteJobCard key={job._id} job={job} onDeleteFavorite={deleteFavorite} />;
      })}
    </div>
  );
}

export default ProtectedPage;
