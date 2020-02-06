import gql from "graphql-tag";

export const GET_WEATHER = gql`
  {
    weather(city: "Berlin, DE") {
      current {
        temperature,
        feels_like
      }
    }
  }
`;