import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import PrivateRoute from './routes/PrivateRoute';

import Home from './views/Home';
import Post from './views/Post';
import Login from './views/Login';
import About from './views/About';

import { LoginAccount } from './interfaces';

const App: React.FC<{ account?: LoginAccount }> = (props) => {
  const account: LoginAccount | undefined = props.account;
  return (
    <div className="App">
      <Router>
        <Route path="/" >
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Home} />
        <PrivateRoute path="/posts" isAuth={!!account?.username}><Post /></PrivateRoute>
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    account: state.login.account
  }
}

export default connect(mapStateToProps)(App);
