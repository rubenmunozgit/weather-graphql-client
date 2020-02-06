import gql from "graphql-tag";

export const GET_WEATHER = gql`
  query weather($city: String!) {
    weather(city: $city) {
      current {
        temperature,
        feels_like
      }
    }
  }
`;