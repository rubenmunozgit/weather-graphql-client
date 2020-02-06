import React, { Component } from 'react';
import Current from '../Current/Current';
import CityForm from '../CityForm/CityForm';
import './Weather.css';

export default class Weather extends Component {
    state = {
        cityCountry: ''
    }
    handleSumit = searchCity => {
        this.setState({
            cityCountry: searchCity
        })
    };
    render() {
        const {cityCountry} = this.state;

        return (
            <React.Fragment>
                <CityForm 
                    handleSumit={this.handleSumit} />
                {cityCountry && <Current 
                    city={this.state.cityCountry}/>}
            </React.Fragment>
        );
    }
}
