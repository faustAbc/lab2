import React from 'react';
import { cardsConfig } from './config';
import CardList from 'containers/cardList';

const PlaceToGo = () => {
  return (
    <CardList cardsConfig={cardsConfig} />
  );
}
export default PlaceToGo;
