import React from 'react'
import CategoriesContainer from './Categories';
import Result from './Result';
import SprintIntervalsContainer from './SprintIntervals';

const Main: React.FC = () => {
  return (
    <>
      <CategoriesContainer></CategoriesContainer>
      <SprintIntervalsContainer></SprintIntervalsContainer>
      <Result></Result>
    </>
  );
}

export default Main;