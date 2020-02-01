import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavAuthed from './components/Nav-Authed';
import Nav from './components/Nav';
import History from './components/History';
import Login from './components/Login';
import LogoutConfirm from './components/LogoutConfirm';
// import Search from './components/Search';
import Info from './components/Info';
import Footer from './components/Footer';
import LeftTab from './components/LeftTab'

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <div>
          <LeftTab />
          <Switch>
            <Route exact path="/" component={Info} />
            {/* <Route exact path="/search" component={Search} /> */}
            {/* <Route exact path="/searchAuth" component={Search} /> */}
            <Route exact path="/history" component={History} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// 393D3F BLACK OLIVE
// FDFDFF "WHITE"
// C6C5B9 PALE SILVER
// 065A82 BLUE SAPPHIRE
// 1C7293 LAPIS LAZULI
// E54B4B CARMINE PINK

export default App;
