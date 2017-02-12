import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ItemListsPage from './components/itemslist/ItemListsPage';
import ItemsPage from './components/items/ItemsPage';
import UsersPage from './components/users/UsersPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="lists" component={ItemListsPage}/>
    <Route path="lists/:id" component={ItemsPage} />
    <Route path="users" components={UsersPage} />
  </Route>
);
