import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Card, Rating, Icon, Grid } from "semantic-ui-react";

const GameCard = ({ title, subtitle, stars }) => {
  return (
    <React.Fragment>
      <Card>
        <Container>
          <Grid padded columns="2">
            <Grid.Column width="10">
              <Header>{title}</Header>
              <p style={{ color: "grey" }}>{subtitle}</p>
              <Rating icon="star" defaultRating={stars} maxRating={5}></Rating>
            </Grid.Column>
            <Grid.Column verticalAlign="bottom" floated="right" width="4">
              <Icon circular name="exclamation" />
            </Grid.Column>
          </Grid>
        </Container>
      </Card>
    </React.Fragment>
  );
};

export default GameCard;
