import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, HttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const httplLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/thought"
                element={<SingleThought />}
              />

              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;