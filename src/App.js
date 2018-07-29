import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

import NavBar from './components/presentational/NavBar';
import ListView from './components/container/ListView';
import Footer from './components/presentational/Footer';

class App extends Component {
  render() {
    return (
        <ErrorBoundary>
           <div className="container">
             <NavBar />
             <hr/>
             <ListView />
             <hr />
             <Footer msg="2018 - YComb" />
           </div>
        </ErrorBoundary>
    );
  }
}

export default App;
