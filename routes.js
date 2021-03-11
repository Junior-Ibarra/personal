import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './src/components/Auth/Auth';
import Main from './src/components/Main/Main';
import WatchList from './src/components/WatchList/WatchList';

export default (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/main" component={Main} />
        <Route path="/watchlist/" component={WatchList} />
    </Switch>
)