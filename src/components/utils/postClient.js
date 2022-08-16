import axios from "axios";

const postClient = (url, body) => {
  axios.post(url, body).then(response => {
    console.log(response.data);
  });
};

export default postClient;