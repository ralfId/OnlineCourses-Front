import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Paper,
  Hidden,
} from "@material-ui/core";
import { useStyles } from "../../Styles/ui";
import { styleAuth } from "../../Styles/auth";

export const CoursesIndex = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Grid item>
            <section className="hero container container-pall">
              <div className="hero__image">
                <img
                  src="https://a.top4top.io/p_1996ri7a41.png"
                  alt="Hero"
                  className="hero__illustration-image"
                  draggable="false"
                />
              </div>

              <div className="hero__text">
                <h1 className="hero__heading">
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className="hero__description">
                  Words Bytes Lists Rich TextHTML Copy Lorem ipsum dolor sit
                  amet consectetur adipiscing elit imperdiet, sapien per erat
                  scelerisque lobortis hac habitasse, eu euismod mattis tellus
                  rutrum porta aliquet. Habitant integer tortor aliquet a
                  faucibus vehicula massa velit iaculis quam vitae posuere.
                </p>
                <a href="#courses" className="hero__cta hero__cta--primary">
                  Subscribe to a course
                </a>
              </div>
            </section>
            <Hidden mdDown>
            <div className="h-divider">
              <div className="shadow"></div>
            </div>
            </Hidden>
          </Grid>
        </Grid>

        <Paper elevation={3} className="container-py container-mb3">
          
          <Grid container spacing={2} className="container-py container-px">
            <Grid item xs={12} md={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={styleAuth.submit}
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
