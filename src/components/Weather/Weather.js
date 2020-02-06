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
        console.log(cityCountry)
        /* const handleSumit = e => {
            e.preventDefault();
            this.setState({
                cityCountry: this.state.inputValue
            })
        };
        const handleChange = e => {
            console.log(e.target.value)
            const value = e.target.value;
            this.setState({
                cityCountry: '',
                inputValue: value
            });
        }; */

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
