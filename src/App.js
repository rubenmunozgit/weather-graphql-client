import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Weather from './components/Weather/Weather';

import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h3>React up un running...</h3>
        <Weather />
      </div>
    </ApolloProvider>
  );
}

export default App;
