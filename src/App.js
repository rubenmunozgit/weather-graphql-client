import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const GET_WEATHER = gql`
  {
    weather(city: "Berlin, DE") {
      current {
        temperature,
        feels_like
      }
    }
  }
`;

const Weather = props => {
  const { loading, error, data } = useQuery(GET_WEATHER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    console.log(data)
    const {weather} = data;
    const {current: {temperature, feels_like}} = weather;
    return (
      <div className="currentWeather__Temp">
        <div>{temperature}</div>
        <div className="currentWeather__Feel">feels like: {feels_like}</div>
      </div>
    )
  }
}

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
