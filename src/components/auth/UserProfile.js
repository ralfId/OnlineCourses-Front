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

import {  updateUser } from "../../actions/auth";
import { styleAuth } from "../../Styles/auth";
import { getimageData } from "../../helpers/getImageData";
import { openSnackBar } from "../../actions/ui";
import defaultUserPhoto from "../../img/user.png";

export const UserProfile = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
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
  const { isAuthenticated } = auth;

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
    // getCurrentUser().then((response) => {
    // });
    if (isAuthenticated) {
      setFormValues(auth);
    }
  }, [isAuthenticated, auth]);

  const saveChanges = (e) => {
    e.preventDefault();

    dispatch(
      updateUser(name, lastName, userName, email, password, profileImage)
    );
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
                type="email"
                label="Type your email"
              />
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
