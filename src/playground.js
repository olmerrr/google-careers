const axios = require("axios");
const url = "http://localhost:3000/jobs";

// const fetchJobsSync = () => {
//   axios.get(url).then((response) => console.log(response.data));
// };
// fetchJobsSync();

const fetjJobsAsync = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

fetjJobsAsync();
