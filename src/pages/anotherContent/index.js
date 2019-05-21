import React from 'react';
import { cardsConfig } from './config';
import CardList from 'containers/cardList';

const AnotherContent = () => {
  return (
    <CardList cardsConfig={cardsConfig} />
  );
}
export default AnotherContent;
