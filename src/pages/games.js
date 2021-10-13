import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Card, Rating, Icon, Grid } from "semantic-ui-react";
import Nav from "../components/Nav";
import GameCard from "../components/GameCard";

const GamesPage = () => {
  return (
    <React.Fragment>
      <br></br>
      <Container>
        <Nav></Nav>
        <Header as="h1">Games</Header>
        <br></br>
        <Grid columns="3">
          <Grid.Column>
            <GameCard
              title={"Tic-Tac-Toe"}
              subtitle={"3 in a row"}
              stars={2}
            ></GameCard>
            <GameCard
              title={"Yahtzee"}
              subtitle={"Feeling Lucky"}
              stars={5}
            ></GameCard>
          </Grid.Column>
          <Grid.Column>
            <GameCard
              title={"Checkers"}
              subtitle={"Jumping Race"}
              stars={3}
            ></GameCard>
          </Grid.Column>
          <Grid.Column>
            <GameCard
              title={"Snakes & Ladders"}
              subtitle={"Snake!"}
              stars={4}
            ></GameCard>
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GamesPage;
