import { HttpClient } from "../services/httpClient";

export const registerUser = (name, lastname, username, email, password) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/Users/register", {
      name,
      lastname,
      username,
      email,
      password,
    }).then((response) => {
      resolve(response);
    });
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("/Users").then((response) => {
      resolve(response);
    });
  });
};

export const updateUser = (name, lastname, username, email, password) => {
  return new Promise((resolve, reject) => {
    HttpClient.put("/Users/update", {
      name,
      lastname,
      username,
      email,
      password,
    }).then((response) => {
      resolve(response);
    });
  });
};


export const loginUser = (user) => {
  return new Promise((resolve, reject)=>{
    HttpClient.post('/Users/login', user).then(response => {
      resolve(response);
    })
  });
};
