import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/users";

export const signupUser = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post("", { email, password })
      .then(({ data, status }) => {
        if (status === 200 && data) {
          resolve(data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
