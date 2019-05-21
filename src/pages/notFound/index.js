import React from 'react';
import { cardsConfig } from './config';
import CardList from 'containers/cardList';

const SomeContent = () => {
  return (
    <CardList cardsConfig={cardsConfig} />
  );
}
export default SomeContent;
