import React from 'react';
import CardList from 'containers/cardList';
import { cardsConfig } from './config';

const SomeContent = () => (
  <CardList cardsConfig={cardsConfig} />
)
export default SomeContent;
