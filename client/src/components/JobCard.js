import React, { Component } from "react";
import axios from "axios";
import API from "../util/API";
import JobDetail from "./JobDetail";

class JobCard extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
      API.publicPage()
      .then((res) => {
          this.setState({ results: res.data.results })
          console.log(res.data)
        })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const emName = this.state.results.filter(result => result.name.first.toLowerCase().startsWith(event.target.value.toLowerCase()));
    this.setState({ search: event.target.value, results: emName });
  };


  renderJobSearchResult() {
    if (!this.state.result.title) {
    }
    return (
    // {this.state.emoloyees.map((employee) => (
      <JobDetail
        title={this.state.result.title}
        type={this.state.result.type}
        location={this.state.result.location}
        company={this.state.result.company}
        description={this.state.result.description}
        company_url={this.state.result.company_url}
      />
    );
    }

//   render() {
//       console.log(this.state)
//     return (
//         <div>
//         <SearchForm
//           search={this.state.search}
//           handleInputChange={this.handleInputChange}
//         />
        
//         <ResultList results={this.state.results || [""]} />
//       </div>
//     );
//   }
} 



// class JobCard extends Component {
//     state = {
//       results: [],
//     };
    
//     componentDidMount() {
//         fetch("https://jobs.github.com/positions.json?description=remote")
//         .then((response) => response.json())
//         .then((response) => {
//             this.setState({
//                 results: response.results,
//                 loading: true,
//             });
//         });
//     }
    
//     render() {
//         const { results, loading } = this.state;
//         console.log(results)
//         if (!loading) {
//             return <div>Loading...</div>;
//         } else {
//             return (
//                 <div className="container">
//           {results.map((item) => (
//               <Card>
//       <Card.Body>
//         <h2>JobTitle={this.state.results.title}</h2>
//         <ul>
//           <li>Type (full-time/part-time)</li>
//           <li>Loacation</li>
//           <li>Created at</li>
//           <li>Decription</li>
//           <li>How to Apply</li>
//           <li>URL</li>
//         </ul>
//       </Card.Body>
//     </Card>
            
//             ))}
//         </div>
//       );
//     }
// }
// }



export default JobCard;
