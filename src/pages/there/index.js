import React from 'react';
import { cardsConfig } from './config';
import CardList from 'containers/cardList';

const There = () => {
  return (
    <CardList cardsConfig={cardsConfig} />
  );
}
export default There;
