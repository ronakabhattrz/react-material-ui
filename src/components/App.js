import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import LandingPage from '../components/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/custom-software" component={() => <div>custom-software</div>} />
          <Route exact path="/mobile-apps" component={() => <div>mobile-apps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
