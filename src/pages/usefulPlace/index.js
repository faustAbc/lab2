import React from 'react';
import { cardsConfig } from './config';
import CardList from 'containers/cardList';

const UsefulPlace = () => {
  return (
    <CardList cardsConfig={cardsConfig} />
  );
}
export default UsefulPlace;
