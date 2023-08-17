import React from 'react';
import { HomeCard } from './Material-ui/HomeCard';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import illus1 from '../images/1.png';
import illus2 from '../images/3.png';
import illus3 from '../images/2.png';

const useStyles = makeStyles({
  homeContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.homeContainer}>
      <HomeCard
        color='#707075'
        heading='Create Quiz'
        path='CreateQuize'
        delay={0.15}
        image={illus1}
        size={'320px'}
      />
      <HomeCard
        color='#707075'
        heading='My Quizzes'
        path='MyQuizzes'
        delay={0.25}
        image={illus2}
        size={'320px'}
      />
      <HomeCard
        color='#707075'
        heading='Start Quiz'
        path='StartQuize'
        delay={0.35}
        image={illus3}
        size={'320px'}
      />
    </Container>
  );
};

export default Home;
