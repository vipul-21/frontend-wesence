import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from './containers/ListContainer';
import AddItemContainer from './containers/AddItemContainer';
import AppContainer from './containers/AppContainer';

const EditItemContainer = () => <AddItemContainer edit />;
const getRoutes = () =>
  (
    <AppContainer>
      <Switch>
        <Route path="/" exact component={ListContainer} />
        <Route
          path="/add"
          exact
          component={AddItemContainer}
        />
        <Route
          path="/edit"
          exact
          component={EditItemContainer}
        />
      </Switch>
    </AppContainer>
  );
export default getRoutes;
