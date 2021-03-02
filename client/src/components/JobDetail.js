// export default function getJob() {
//   return fetch(
//     "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=remote",
//     {
//       // method: "GET",
//       // mode: "cors",
//       headers: {
//         "User-Agent": "request",
//       },
//     }
//   ).then((data) => data.json());
// }

import axios from "axios";
export default function getJob() {
  return axios.get(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=remote",
    {
      headers: {
        "User-Agent": "request",
      },
    }
  );
}
