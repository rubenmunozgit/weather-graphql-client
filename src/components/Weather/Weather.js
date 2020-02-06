import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import {GET_WEATHER} from '../../graphql/weatherQueries';
import './Weather.css';


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

  export default Weather;