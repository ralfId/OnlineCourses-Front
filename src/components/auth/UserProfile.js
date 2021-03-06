import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "react-images-upload";

import { updateUser } from "../../actions/auth";
import { styleAuth } from "../../Styles/auth";
import { getimageData } from "../../helpers/getImageData";
import { openSnackBar } from "../../actions/ui";
import defaultUserPhoto from "../../img/user.png";
import {
  CompareEquals,
  StringEmpty,
  ValidateEmail,
} from "../../utils/validations";

export const UserProfile = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const [validations, setValidations] = useState({ errors: {} });

  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    profileImage: null,
    image: null,
  });

  const {
    name,
    lastName,
    userName,
    email,
    password,
    passwordConfirm,
    profileImage,
    image,
  } = formValues;

  useEffect(() => {
    if (auth) {
      setFormValues(auth);
    }
  }, [auth]);

  const checkValidations = () => {
    let errors = {};
    let isValid = true;

    try {
      if (!ValidateEmail(email)) {
        errors["email"] = "Email is not valid";
        isValid = false;
      }

      if (!CompareEquals(password, passwordConfirm)) {
        errors["password"] = "Passwords do not match";
        isValid = false;
      }

      setValidations({ ...validations, errors });
      return isValid;
    } catch (error) {
      console.log(error);
    }
  };

  const saveChanges = (e) => {
    e.preventDefault();

    if (checkValidations()) {
      dispatch(
        updateUser(name, lastName, userName, email, password, profileImage)
      );
    }
  };

  const HandleOnchange = ({ target }) => {
    setFormValues((values) => ({
      ...values,
      [target.name]: target.value,
    }));
  };

  const userPhotoId = uuidv4();

  const handleUploadImage = (imagenes) => {
    const uriImg = URL.createObjectURL(imagenes[0]);
    getimageData(imagenes[0])
      .then((response) => {
        setFormValues({
          ...formValues,
          image: uriImg,
          profileImage: response,
        });
      })
      .catch((error) => {
        dispatch(openSnackBar("Can not load image", "error"));
      });
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={styleAuth.paper}>
        <Avatar style={styleAuth.avatar} src={image || defaultUserPhoto} />
        <Typography component="h1" variant="h5">
          User profile
        </Typography>
        <form style={styleAuth.form} onSubmit={saveChanges}>
          <span style={{ color: "red" }}>
            {validations.errors["emptyFiles"]}
          </span>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                value={name}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                label="Type your name"
              />
              <span style={{ color: "red" }}>{validations.errors["name"]}</span>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="lastName"
                value={lastName}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                label="Type your lastname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="userName"
                value={userName}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                label="Type your username"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                value={email}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                label="Type your email"
              />
              <span style={{ color: "red" }}>
                {validations.errors["email"]}
              </span>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                value={password || ""}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                type="password"
                label="Type your password"
              />
              <span style={{ color: "red" }}>
                {validations.errors["password"]}
              </span>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="passwordConfirm"
                value={passwordConfirm || ""}
                onChange={HandleOnchange}
                variant="outlined"
                fullWidth
                type="password"
                label="Confirm your password"
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUploader
                withIcon={true}
                key={userPhotoId}
                singleImage={true}
                buttonText="Choose your profile picture"
                onChange={handleUploadImage}
                imgExtension={["jpg", "jpeg", "png"]}
                maxFileSize={4000000}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={styleAuth.submit}
              >
                Save changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
