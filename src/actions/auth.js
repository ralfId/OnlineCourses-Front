import { HttpClient } from "../services/httpClient";
import { types } from "../types/types";
import { openSnackBar } from "./ui";

export const loginUser = (user) => {
  return (dispatch) => {
    HttpClient.post("/Users/login", user)
      .then((response) => {
        dispatch(login(response.data));
      })
      .catch((error) => console.log(error.response.data));
  };
};

const login = (user) => ({
  type: types.login,
  payload: user,
});

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
      if (response.status === 200) {
        if (response.data.profileImage) {
          let photo = response.data.profileImage;
          const newPhoto =
            "data:image/" + photo.extention + ";base64," + photo.data;
          response.data.profileImage = newPhoto;
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
            response.data.profileImage = newPhoto;
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
