import { HttpClient } from "../services/httpClient";
import { httpClientNoToken } from "../services/httpClienWithOutToken";
import { types } from "../types/types";
import { openSnackBar } from "./ui";

export const loginUser = (user) => {
  return (dispatch) => {
    httpClientNoToken
      .postNOToken("/Users/login", user)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          if (response.data.profileImage) {
            let photo = response.data.profileImage;
            const newPhoto =
              "data:image/" + photo.extention + ";base64," + photo.data;
            response.data.image = newPhoto;
            response.data.profileImage = null;

          }
          dispatch(login(response.data));
        }
      })
      .catch((error) => {
        //catch one error
        if (error.response.data.message !== null) {
          dispatch(
            openSnackBar("Login error: " + error.response.data.message, "error")
          );
        }
        //catch many error
        let errors = error.response.data.errors;
        if (errors !== null) {
          for (let categ in errors) {
            for (let err in errors[categ]) {
              dispatch(openSnackBar(errors[categ][err], "error"));
            }
          }
        }
      });
  };
};

const login = (user) => ({
  type: types.login,
  payload: user,
});

export const registerUser = (name, lastname, username, email, password) => {
  return (dispatch) => {
    httpClientNoToken
      .postNOToken("/Users/register", {
        name,
        lastname,
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("iiiiiiiiiiiiiiiiiiiiiiiii");
        if (response.status === 200) {
          dispatch(login(response.data));
        }
      })
      .catch((error) => {
        //catch one error
        if (error.response.data.message !== null) {
          dispatch(
            openSnackBar("Login error: " + error.response.data.message, "error")
          );
        }
        //catch many error
        let errors = error.response.data.errors;
        if (errors !== null) {
          for (let categ in errors) {
            for (let err in errors[categ]) {
              dispatch(openSnackBar(errors[categ][err], "error"));
            }
          }
        }
      });
  };
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("/Users").then((response) => {
      if (response.status === 200) {
        if (response.data.profileImage) {
          let photo = response.data.profileImage;
          const newPhoto =
            "data:image/" + photo.extention + ";base64," + photo.data;
          response.data.image = newPhoto;
          response.data.profileImage = null;
        }
      }
      resolve(response);
    });
  });

  // return (dispatch) => {
  //   HttpClient.get("/Users").then((response) => {
  //     if (response.status === 200) {
  //       if (response.data.ProfileImage) {
  //         let photo = response.data.ProfileImage;
  //         const newPhoto =
  //           "data:image/" + photo.extention + ";base64," + photo.data;
  //         response.data.ProfileImage = newPhoto;
  //         dispatch(login(response.data));
  //         console.log(response.data)
  //       }
  //     }
  //   });
  // };
};

export const updateUser = (
  name,
  lastname,
  username,
  email,
  password,
  UserImage
) => {
  return (dispatch) => {
    HttpClient.put("/Users/update", {
      name,
      lastname,
      username,
      email,
      password,
      UserImage,
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.profileImage) {
            let photo = response.data.profileImage;
            const newPhoto =
              "data:image/" + photo.extention + ";base64," + photo.data;
            response.data.image = newPhoto;
            response.data.profileImage = null;
          }
          window.localStorage.setItem("token", response.data.token);
          dispatch(update(response.data));
          dispatch(openSnackBar("Changes were saved successfully", "success"));
        }
      })
      .catch((error) => {
        // console.log(error.response.data.errors)
        dispatch(
          openSnackBar(
            "Could not save changes:  " +
              JSON.stringify(error.response.data.errors),
            "error"
          )
        );
      });
  };
};

const update = (user) => ({
  type: types.update,
  payload: user,
});
