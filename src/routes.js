import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage'
import ItemListsPage from './components/itemslist/ItemListsPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="lists" component={ItemListsPage}/>
  </Route>
);
