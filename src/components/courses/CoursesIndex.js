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
                  src="https://img.freepik.com/foto-gratis/hombre-estudiando-casa-cursos-linea-o-informacion-gratuita-si-mismo-convierte-musico-guitarrista-aislamiento-cuarentena-contra-propagacion-coronavirus-usando-computadora-portatil-telefono-inteligente-auriculares_155003-39514.jpg?w=1380&t=st=1678227591~exp=1678228191~hmac=e1f7d37d677a29ebd56b911dea5cf4106e2965ad8e873ae9830a1aec551933f2"
                  alt="Hero"
                  className="hero__illustration-image"
                  draggable="false"
                />
              </div>

              <div className="hero__text">
                <h1 className="hero__heading">
                  Online Courses
                </h1>
                <h3>Welcome to our online course store! We are excited to offer you a wide variety
                  of options to help you improve your skills and knowledge in different areas.</h3>
                <p className="hero__description">
                  On our platform you can find online courses on different topics, from digital marketing to programming,
                  graphic design, finance, leadership and much more. All our courses are designed to be accessible and practical,
                  so you can learn effectively and at your own pace.
                  <br />
                  <br />
                  We are sure that you will find in our online course store the training you are looking for to achieve your personal and professional goals.
                  Thank you for trusting us and start this new learning adventure!
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

        <Paper elevation={3} className="container-py container-mb3" id="courses">

          <Grid container spacing={2} className="container-py container-px">
            <Grid item xs={12} md={4}>
              <Card className={useStyles.rootCard} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="170"
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
