import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../MainComponent/Main';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
    <Footer />
  </div>
);

export default App;
