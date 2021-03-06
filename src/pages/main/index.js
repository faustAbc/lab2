import React from 'react';
import CardList from 'containers/cardList';
import { cardsConfig } from './config';
import { Dialog } from 'containers/dialog';

const Main = () => (
  <CardList cardsConfig={cardsConfig} />
);

export default Main;
